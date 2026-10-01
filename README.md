# bareum-legal

iOS 앱 **바름(BAREUM)** 의 앱 소개 사이트와 개인정보처리방침·이용약관·고객지원 문서 정본.
문서 소스는 이 GitHub 저장소에서 관리하고, 공개 사이트는 Cloudflare Workers Static Assets로 게시한다.

| 문서 | URL |
|---|---|
| 홈 | https://bareum.app/ |
| 개인정보처리방침 | https://bareum.app/privacy/ |
| 이용약관 | https://bareum.app/terms/ |
| 고객지원 | https://bareum.app/support/ |

**여기가 정본이다.** 앱 저장소에 사본을 두지 않는다 — 앱은 URL만 안다.
문서 내용을 고치면 시행일과 개정일을 같이 올리고, 이용자에게 불리한 변경은 30일 전에 공지한다.
호스팅 이전은 문서 내용·시행일을 변경하지 않는다.

## 빌드와 배포

Ruby 4.0, Bundler 4, Node.js 22 이상, pnpm 10을 사용한다.
시스템 Ruby 대신 설치한 Ruby가 PATH에서 먼저 잡혀야 한다.

```sh
bundle config set --local path vendor/bundle
bundle install
pnpm install --frozen-lockfile
pnpm build
pnpm dev
# 패키징 검증
pnpm run deploy:check
# 최초 로컬 배포 시 본인 Cloudflare 계정 인증
pnpm exec wrangler login
pnpm run deploy
```

`_site/`는 빌드 결과이며 커밋하지 않는다. 법적 문서와 기본 테마는 기존 Jekyll 구성을 유지한다.
Wrangler는 `bareum-legal` Worker와 `bareum.app`, `www.bareum.app` Custom Domains를 관리한다.
계정 ID는 공개 식별자이며 API 토큰·OAuth 자격 증명은 저장소에 넣지 않는다.

`www` → 대표 도메인 이동은 별도 Cloudflare Single Redirect 규칙으로 관리한다.
`http.host eq "www.bareum.app"`에 대해
`concat("https://bareum.app", http.request.uri.path)`로 HTTP 301을 반환하고 쿼리 문자열을 보존한다.
Wrangler 배포는 이 영역 규칙을 변경하지 않는다. 영역의 `always_use_https`도 활성화되어 있다.

`_layouts/default.html`은 Minimal 테마에서 호스팅 이름만 실제 환경에 맞춘 사본이다.
테마 저작권·라이선스는 `THEME-LICENSE.txt`에 보존한다.

## 운영 상태 — 2026-09-23

- Cloudflare MCP로 정적 파일을 직접 업로드하고 도메인을 연결했다.
- GitHub 자동 배포는 아직 연결되지 않았다. Cloudflare API가 Git 연동 해제 오류 `8000008`을 반환했다.
  Cloudflare에서 GitHub 저장소 접근을 다시 연결하기 전까지 문서 변경 후 위 `pnpm deploy`를 실행한다.
- 기존 GitHub Pages는 배포된 앱의 이전 링크를 위해 유지한다. 이 변경이 main에 반영되면
  기본 Jekyll 빌드의 head가 동일 경로의 `bareum.app`으로 브라우저를 이동시킨다.
  Cloudflare 빌드는 `_config.cloudflare.yml`을 병합하여 이동 태그 없이 본문을 제공한다.
- App Store Connect의 기존 URL 변경 및 새 iOS 빌드 배포는 별도 릴리스 작업이다.

배포 뒤 홈·약관·개인정보처리방침·고객지원의 HTTPS 200, `www`의 301,
존재하지 않는 경로의 404와 문서 내용 보존을 확인한다.

## 앱 소개 홈

[유지보수 안내](docs/app-introduction.md)에 전체 기능 범위, 화면 출처, 출시 전환과 검증 기준을 정리한다.

`index.md`는 `_layouts/landing.html`을 사용한다. 스타일과 동작은
`assets/css/landing.css`, `assets/css/features.css`, `assets/js/landing.js`, 화면 자료는 `assets/images/`에 있다.
화면 출처와 갱신 기준은 `docs/landing-assets.md`에 기록한다. `docs/`는 배포에서 제외한다.

`_config.yml`의 `app_store_url`은 공개된 [App Store 페이지](https://apps.apple.com/kr/app/id6807600225)를 가리킨다. 헤더·첫 화면·하단에 다운로드 링크를 제공한다. 이메일 신청·분석 스크립트·방문자 데이터 수집은 없다. [출시 전환 기록](docs/releases/2026-10-01-app-store-launch.md)을 확인한다.

로컬 미리보기:

```sh
PATH=/opt/homebrew/opt/ruby/bin:$PATH pnpm build
python3 -m http.server 4321 --bind 127.0.0.1 --directory _site
```

검증은 모바일·데스크톱, 키보드, 동작 줄이기, JavaScript 미사용 상태와 함께
기존 문서 링크 및 기본 Jekyll 빌드의 도메인 리다이렉트 보존을 확인한다.
`pnpm run deploy:check`는 패키징 검사이며 실제 배포는 별도다.

## 문의 이메일 라우팅

2026-09-28 `support@bareum.app` → 인증된 기존 문의 Gmail 수신함으로 전달하는 Cloudflare Email Routing 규칙을 추가했다. 기존 `hello@bareum.app`, `admin@bareum.app` 규칙과 DNS는 유지한다. 2026-09-29 기준 고객지원·약관·개인정보처리방침·선택 동의 안내의 공개 문의/철회 연락처는 모두 `support@bareum.app`이다. 개인 Gmail은 내부 전달 수신함으로만 유지하고 공개 문서에는 사용하지 않는다. App Store의 앱 지원 링크는 `/support/`로 연결된다. [연락처 통일 배포 기록](docs/releases/2026-09-29-public-contact-email.md)에 변경 범위와 운영 검증을 보존한다. 실제 수신 테스트는 아직 수행하지 않았다. 이 설정은 도메인 주소로 발신·답장하는 설정을 포함하지 않는다.

최근 AI 루틴 소개 반영과 운영 검증은 [2026-09-29 배포 기록](docs/releases/2026-09-29-ai-routine-introduction.md)에 있다. 초기 소개 사이트 배포는 [2026-09-28 기록](docs/releases/2026-09-28-app-introduction.md)을 참고한다.
