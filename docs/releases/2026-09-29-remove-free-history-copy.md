# 소개 사이트 기록 화면의 무료 기간 문구 제거

2026-09-29, 앱 기록 안내 변경을 소개 사이트의 `history.webp`에도 반영했다. “전 기간 무료” 문구가 들어 있던 과거 캡처를 “이전 달의 기록도 확인할 수 있어요.”를 표시하는 최신 실제 앱 데모 캡처로 교체했다. 기능·가격 정책을 새로 선언하지 않는다.

## 검증

- 같은 앱 작업 트리의 최신 fixture를 다시 빌드: `BUILD SUCCEEDED`, 종료 코드 0.
- 독립 iPhone 18 Pro / iOS 27 시뮬레이터에서 실제 화면 캡처·시각 검증.
- 804×1748 WebP 변환; 화면 내용 합성·수정 없음.
- `pnpm run deploy:check` 종료 코드 0, `git diff --check` 통과.
- 운영 정적 파일 48개 모두 HTTP 200이고 최종 빌드와 바이트가 일치한다. 새 `history.webp`를 운영 URL에서 다시 받아 원본 변환본과 대조했다.
- 대표 도메인 301(경로·쿼리 보존), HTTPS 301, `/privacy` 307, 미등록 경로 404 유지.

## 배포

- [PR #7](https://github.com/mugon-jeong/bareum-legal/pull/7), squash `56e49d6627c59d73d4696553368e0ff51114d23d`.
- Cloudflare Worker `bareum-legal`, 2026-09-29 20:31 KST 배포.
- 버전 `b709656a-09b1-461e-953e-508a70421089`, 트래픽 100%.
- 배포 `d8a267ff-6138-4ec0-8a86-b9ee0502446b`.
- 변경된 이미지 1개 업로드; 전체 정적 파일 48개, 1,247,658 bytes.
- 기존 Custom Domains·호환 날짜·로그/트레이스·공개 문서 내용·시행일을 유지했다.
- 증빙은 `/Users/conny/bareum-backups/20260929-free-copy-web/`에 보존한다.
