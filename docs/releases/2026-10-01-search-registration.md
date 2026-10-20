# 검색 사이트 소유 확인 — 2026-10-01

네이버 서치어드바이저 `https://bareum.app` 속성의 소유 확인용 메타 태그를 Cloudflare 빌드에 추가했다. GitHub Pages용 noindex·이동 설정은 보존했다.

- Jekyll 빌드 및 Wrangler dry-run 성공.
- Cloudflare MCP로 정적 파일 49개 manifest를 등록하고 필요한 17개 파일을 업로드했다.
- Worker `bareum-legal`, 배포 ID `79a3e97f82d04b908028a7cb6d73a1fe`.
- 운영 홈페이지 HTTP 200 응답에서 네이버 인증 태그와 기존 App Store 링크를 확인했다.
- 사용자가 보안문자 확인을 완료했고 네이버 사이트 목록에서 `https://bareum.app`의 등록일 `26.10.01`과 소유 확인 완료 상태를 확인했다. 검색 노출은 별도 상태다.

## Bing

- Google 계정으로 Bing Webmaster Tools에 로그인하고 `https://bareum.app`을 추가했다.
- DNS CNAME `9ecc79561d9f05aa529422f36f702ba5.bareum.app` → `verify.bing.com`을 추가했다. Cloudflare 레코드 ID는 `e58352ab72737ec164acc731e7b62c20`, DNS only, TTL 자동이다.
- 공용 DNS `1.1.1.1`에서 CNAME을 확인했다. Bing 최초 확인은 DNS 레코드 미감지로 실패했지만 재시도 후 소유 확인이 완료되었고 `bareum.app` 홈 대시보드를 확인했다.

## 다음

`bareum.app` 신규 등록 절차에서 필수 개인정보 수집 및 서비스 이용 동의 화면까지 진행했다. 사용자 동의 전이며 신청은 아직 제출하지 않았다.
