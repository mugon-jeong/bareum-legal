// 블로그 빌드 산출물 검사. `pnpm build` 뒤에 실행한다: node scripts/check-blog.mjs
// 규칙의 정본: bareum 저장소 docs/superpowers/specs/2026-10-20-ingredient-blog-design.md
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const site = join(root, "_site");
const blogDir = join(site, "blog");
const snapshot = JSON.parse(readFileSync(join(root, "_data/blog.json"), "utf8"));
const concerns = JSON.parse(readFileSync(join(root, "_data/blog_concerns.json"), "utf8"));

const DISCLAIMER = "성분에 대한 근거이며, 이 성분이 든 특정 제품의 효능을 뜻하지 않습니다. 제품의 실제 함량은 제품마다 다릅니다.";
const CAMPAIGNS = ["blog-ingredient", "blog-concern", "blog-post", "blog-index"];
const EMPTY_CONCERN = "현재 근거가 등록된 성분이 없어요";
const FORBIDDEN = [/coupang/i, /쿠팡/, />\s*null\s*</, />\s*undefined\s*</];

const failures = [];
const fail = (message) => failures.push(message);

function htmlFiles(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return htmlFiles(path);
    return name.endsWith(".html") ? [path] : [];
  });
}

const decode = (s) => s.replace(/&amp;/g, "&");
const pages = htmlFiles(blogDir);
if (pages.length === 0) fail("_site/blog/ 에 HTML 이 없다");

// 성분 페이지: 스냅숏과 1:1
const ingredientDir = join(blogDir, "ingredients");
const expected = new Set(snapshot.ingredients.map((i) => i.id));
const actual = existsSync(ingredientDir) ? readdirSync(ingredientDir).filter((n) => statSync(join(ingredientDir, n)).isDirectory()) : [];
for (const id of actual) if (!expected.has(id)) fail(`스냅숏에 없는 성분 페이지: ${id}`);
for (const ingredient of snapshot.ingredients) {
  const file = join(ingredientDir, ingredient.id, "index.html");
  if (!existsSync(file)) {
    fail(`성분 페이지 없음: ${ingredient.id}`);
    continue;
  }
  const html = decode(readFileSync(file, "utf8"));
  for (const claim of ingredient.claims) {
    if (!html.includes(`href="${claim.url}"`)) fail(`${ingredient.id}: 근거 링크 없음 (edge ${claim.edge_id})`);
  }
}

// 고민 페이지
for (const concern of concerns) {
  const file = join(blogDir, "concerns", concern.code, "index.html");
  if (!existsSync(file)) {
    fail(`고민 페이지 없음: ${concern.code}`);
    continue;
  }
  const empty = (snapshot.effects[concern.effect_id]?.ingredient_ids ?? []).length === 0;
  if (empty && !readFileSync(file, "utf8").includes(EMPTY_CONCERN)) fail(`${concern.code}: 빈 고민 안내 없음`);
}

// 모든 블로그 페이지 공통
for (const file of pages) {
  const rel = relative(site, file);
  const html = decode(readFileSync(file, "utf8"));
  if (!html.includes('name="apple-itunes-app" content="app-id=6807600225"')) fail(`${rel}: Smart App Banner 없음`);
  if (!html.includes(DISCLAIMER)) fail(`${rel}: 고정 고지 없음`);
  if (!html.includes("pt=129394063")) fail(`${rel}: 캠페인 링크 없음`);
  for (const [, ct] of html.matchAll(/[?&]ct=([^&"]+)/g)) if (!CAMPAIGNS.includes(ct)) fail(`${rel}: 허용되지 않은 ct=${ct}`);
  for (const pattern of FORBIDDEN) if (pattern.test(html)) fail(`${rel}: 금지 패턴 ${pattern}`);
  for (const [, href] of html.matchAll(/href="(\/blog\/[^"#?]*)"/g)) {
    const target = join(site, href, href.endsWith("/") ? "index.html" : "");
    if (!existsSync(target)) fail(`${rel}: 깨진 내부 링크 ${href}`);
  }
}

// 대표 글: 고민마다 1편
const POST_FORBIDDEN = /최고|가장 좋|치료|여드름|비듬|기미/;
for (const concern of concerns) {
  const file = join(blogDir, concern.code, "index.html");
  if (!existsSync(file)) {
    fail(`대표 글 없음: /blog/${concern.code}/`);
    continue;
  }
  const html = readFileSync(file, "utf8");
  if (!/"@type":\s*"(Article|BlogPosting)"/.test(html)) fail(`/blog/${concern.code}/: Article JSON-LD 없음`);
  if (!html.includes('href="/blog/ingredients/')) fail(`/blog/${concern.code}/: 성분 페이지 링크 없음`);
  if (!html.includes(`href="/blog/concerns/${concern.code}/"`)) fail(`/blog/${concern.code}/: 고민 페이지 링크 없음`);
  const body = html.match(/<div class="blog-post-body">([\s\S]*?)<\/div>/)?.[1] ?? "";
  if (!body) fail(`/blog/${concern.code}/: 본문 없음`);
  const word = body.match(POST_FORBIDDEN);
  if (word) fail(`/blog/${concern.code}/: 금지 표현 "${word[0]}"`);
}

// 사이트맵: 모든 블로그 페이지 URL
const sitemapPath = join(site, "sitemap.xml");
const sitemap = existsSync(sitemapPath) ? readFileSync(sitemapPath, "utf8") : "";
if (!sitemap) fail("sitemap.xml 없음");
for (const file of pages) {
  const url = `https://bareum.app/${relative(site, file).replace(/index\.html$/, "")}`;
  if (!sitemap.includes(`<loc>${url}</loc>`)) fail(`sitemap 에 없음: ${url}`);
}
const landing = readFileSync(join(site, "index.html"), "utf8");
if (!landing.includes('href="/blog/"')) fail("랜딩에 /blog/ 링크 없음");

if (failures.length) {
  for (const message of failures) console.error(`✖ ${message}`);
  console.error(`blog check failed: ${failures.length}`);
  process.exit(1);
}
console.log(`blog check passed: ${pages.length} pages`);
