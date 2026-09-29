# 공개 문의 이메일 통일

약관·개인정보처리방침·선택 동의 안내의 문의/철회 연락처를 `support@bareum.app` 메일 링크로 통일했다. 기존 고객지원 주소와 같으며 수신 라우팅은 유지한다. 같은 날짜의 출시 전 문서 연락처 정정으로 시행일과 동의 범위는 유지했다.

- Jekyll 빌드 및 Wrangler 배포 dry-run 통과, `git diff --check` 통과.
- Cloudflare `bareum-legal` 정적 파일 49개 manifest로 배포. 배포 ID: `61b7e25808b8459e9f7713a173506b9a`.
- 약관·개인정보처리방침·고객지원·선택 동의 페이지 HTTP 200 및 빌드 HTML과 정확히 일치 확인.
- 모든 빌드 HTML에서 개인 Gmail 연락처 미노출 확인.
- 웹 문서 수정이며 iOS 심사 빌드 변경은 없다.

## 소스 및 유지보수

- [PR #14](https://github.com/mugon-jeong/bareum-legal/pull/14) squash 머지: `299e3173477b520c0cbb9d392e4b121d18cc80d0`.
- 변경 파일: `terms.md`, `privacy.md`, `marketing-consent-2026-09-29.md`. 기존 `support.md`의 도메인 주소와 통일했다.
- 공개 지원 URL: `https://bareum.app/support/`. 약관·개인정보·동의 문서 연락처를 추가할 때도 같은 주소를 사용한다.
- 기존 Gmail 전달 라우팅과 DNS는 수정하지 않았다. 실제 외부 메일 수신 테스트, 도메인 주소 발신·답장 설정은 이 배포의 검증 범위가 아니다.
