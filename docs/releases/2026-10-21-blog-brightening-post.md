# 피부 미백 대표 글 공개 — 2026-10-21

`/blog/brightening/`(「미백 고시 성분, 함량 표기 읽는 법」)를 추가했다. 효능 4개 중 대표 글이 없던 미백을 채웠다.

- PR: mugon-jeong/bareum-legal#20 (squash `8e4df09`)
- Wrangler 배포, Worker `bareum-legal`, Version ID `101f92af-0f91-45ea-b2cc-a377afb9b3f7`
- 스냅숏은 갱신하지 않았다. 2026-10-21 재생성 결과가 `as_of` 외 동일(성분 51 · 근거 51)이라 기존 `as_of 2026-10-20T07:53:58.791Z`를 유지했다.
- 배포 전 `pnpm build`, `pnpm check:blog`(`blog check passed: 60 pages`) 통과. 로컬 375px에서 가로 넘침 없음.
- 운영 확인: `/blog/brightening/`·`/blog/`·`/sitemap.xml` 200, 사이트맵과 `/blog/` 목록에 새 URL 포함.

## 정정 — 2026-10-22

위의 "대표 글이 없던 미백"은 사실과 다르다. 2026-10-20 글(`_posts/2026-10-20-brightening.md`, #18)이 이미 있었고, 두 글이 같은 `/blog/brightening/`을 써서 사이트맵과 `/blog/` 목록에 주소가 두 번 실렸다(화면에는 10-21 글). 10-20 글을 지워 중복을 없앴다.

- Wrangler 배포, Version ID `85b8942f-3b65-4f73-9938-5952f71ecfff`
- 배포 전 `pnpm build`, `pnpm check:blog`(`blog check passed: 60 pages`) 통과. 빌드한 `/blog/brightening/`은 배포 전 운영 페이지와 diff 0.
- 운영 확인: `/blog/brightening/`·`/blog/`·`/sitemap.xml` 200, 사이트맵·`/blog/` 목록에 `/blog/brightening/` 1회씩.
- `check-blog.mjs`는 permalink 중복을 잡지 않는다(미해결).
