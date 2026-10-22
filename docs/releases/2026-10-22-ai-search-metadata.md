# AI 검색용 앱 메타데이터 공개 — 2026-10-22

AI 검색이 바름을 앱으로 파악하도록 기계가 읽는 요약을 추가했다. 블로그 문구는 바꾸지 않았다.

- `/llms.txt`: 앱 소개·App Store 링크(`ct=llms`)·하는 일/하지 않는 일·성분 근거 페이지 목록(고민·글·성분은 스냅숏과 `site.posts`로 생성). 사실은 App Store 설명(iTunes lookup, 1.0.5)과 랜딩 문구에서만 가져왔다.
- 랜딩 `MobileApplication` JSON-LD(`_includes/app-jsonld.html`): 이름·iOS 18.0 이상·Lifestyle·무료·설치 링크(`ct=landing-jsonld`)·운영 주체. 평가 0건이라 `aggregateRating`은 넣지 않았다.
- Wrangler 배포, Worker `bareum-legal`, Version ID `7f8b5f3a-db02-47eb-beee-441cd340db80`
- 배포 전 `pnpm build` exit 0, `pnpm check:blog`(`blog check passed: 60 pages`) 통과.
- 운영 확인: `/llms.txt` 200 `text/plain`, 랜딩 JSON-LD `WebSite`·`MobileApplication` 파싱 성공, `/`·`/blog/`·`/sitemap.xml` 200.
- 같은 날 Cloudflare bot 설정을 읽어 AI 크롤러 차단·Bot Fight Mode가 모두 꺼져 있고 WAF 규칙이 없음을 확인했다(변경 없음).

## 남은 일

- 랜딩 본문의 「1.0.3 심사 중」 문구가 현재 버전(1.0.5)과 맞지 않는다.
