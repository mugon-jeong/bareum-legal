# 앱 소개 사이트 유지보수 안내

## 목적과 현재 범위

출시 전에는 앱 기능 소개만 제공한다. 출시 후 App Store 다운로드로 연결한다. 신청 폼이나 이메일 수집은 추가하지 않는다. ThreeUI의 Perspective UI를 화면 배치와 모션의 참고로 사용한다.

2026-09-28 소개 사이트를 운영 배포했다. [배포 기록](releases/2026-09-28-app-introduction.md)을 확인한다. 소스 정본은 `bareum-legal` 저장소의 `main`이다. 다음 작업 전 브랜치와 변경 상태를 다시 확인한다.

## 빠뜨리지 않아야 할 기능

| 기능 | 홈 앵커 | 소개 내용과 표현 기준 |
|---|---|---|
| 바르는 순서 | `#routine` | 가진 제품의 아침·저녁 순서와 단계 안내. 사이트에서 계산하지 않는다. |
| 고민으로 만드는 AI 루틴 | `#ai-routine` | 고민 1–3개 → 고민별 핵심 성분·보유 제품 → 나머지 제형 → 순서 확인·저장. 실제 맥락 안내와 기본 안내를 구분하며 성분 근거·순서 판단을 AI에 맡기는 것으로 소개하지 않는다. |
| 성분 구성 트리맵 | `#ingredients` | 공식 용도·검증된 효능 기준. 면적은 분류별 고유 성분 수이며 함량·효과 강도가 아니다. |
| 피부층별 성분 이동 UI | `#absorption` | 시점별 이동 모식도와 성분 상세. 실제 흡수량·침투량 또는 효과 측정이 아니다. |
| 홈·잠금 화면 위젯 | `#widgets` | 다음 제품·진행·연속 기록·체크. 크기와 루틴 상태에 따라 표시와 조작이 다르다. |
| 다이나믹 아일랜드 | `#live-activity` | 진행·대기시간, 펼친 상태의 제품·체크 버튼. 지원 iPhone에서 사용한다. |
| 잠금 화면 실시간 현황 | `#live-activity` | 다음 제품·남은 시간·진행 및 체크·스킵. 잠금 화면 위젯과 구분한다. |
| Apple Watch | `#watch` | 아침·저녁 루틴, 현재 단계·대기시간, 체크·건너뛰기, 이유·주의·근거, iPhone 동기화. iPhone에서 계정과 오늘의 순서를 준비한다. |
| 사용 기록 | `#history` | 일별 루틴 기록과 이어온 습관. |

기능 변경 시 앱 구현을 먼저 대조한다. 주요 확인 파일은 앱 저장소의 `ios/Bareum/` 아래 `Bareum/IngredientRelationsView.swift`, `Bareum/ShelfIngredientsView.swift`, `Bareum/AbsorptionView.swift`, `BareumWidget/NextStepWidget.swift`, `BareumWidget/StreakWidget.swift`, `BareumWidget/RoutineLiveActivity.swift`, `BareumWatch/WatchViews.swift`, `BareumWatch/WatchAppModel.swift`다.

현재 앱의 주요 탭은 순서·AI·성분·선반이다. 독립 성분 관계 그래프는 제공하지 않는다. 성분 상세에서 관련 연구와 출처를 확인하는 맥락은 유지하며, 연구 연결을 효과·안전성 보장으로 표현하지 않는다.

## 수정 위치와 화면 자료

- [홈 레이아웃](../_layouts/landing.html): 문구·섹션·기능 앵커.
- [기본 스타일](../assets/css/landing.css), [확장 기능 스타일](../assets/css/features.css): 반응형 화면과 장치 배치.
- [동작](../assets/js/landing.js): 화면 등장 효과.
- [홈 메타정보](../index.md), [설정](../_config.yml): 검색·공유 설명과 `app_store_url`.
- [화면 출처](landing-assets.md): 앱 데모 캡처와 디자인 예시를 구분한다. 출시 전 실제 출시 빌드 기준으로 갱신한다.
- [설계](superpowers/specs/2026-09-28-app-introduction-design.md): 목적·구성과 제품 표현 제약.

Watch·트리맵·피부층 UI는 앱 데모 화면이다. 위젯·다이나믹 아일랜드·실시간 현황 이미지는 디자인 내보내기이며 페이지에도 디자인 예시임을 표시한다. 제품 효능을 자체 주장하거나 흡수량 %를 추가하지 않는다.

## 출시 전환과 검증

2026-10-01 한국 App Store 공개 페이지를 확인하고 `_config.yml`의 `app_store_url`을 `https://apps.apple.com/kr/app/id6807600225`로 설정했다. 헤더·첫 화면·하단에서 다운로드할 수 있으며 메타정보와 푸터를 출시 후 문구로 전환했다. 기존 데모 화면과 디자인 예시 표시는 유지한다. [배포 기록](releases/2026-10-01-app-store-launch.md)을 확인한다.

빌드·로컬 미리보기·배포 명령은 [README](../README.md)에 따른다. `deploy:check`는 실제 배포가 아니다. 다음 검증은 변경할 때마다 다시 실행한다.

- Jekyll 빌드, Wrangler dry-run, JavaScript 구문 검사, `git diff --check`.
- 360/390/768/1440px 화면, 가로 넘침·잘림, 이미지·앵커·문서 링크.
- 키보드, 동작 줄이기, JavaScript 없이 본문 열람.
- 접근성 자동 검사와 배경 위 텍스트 대비 수동 확인.
- 기존 개인정보처리방침·이용약관·고객지원 및 이전 도메인 리다이렉트 보존.

2026-09-28 확장 구현 검증에서는 위 빌드·패키징·화면·링크 검사가 통과했고 axe A/AA 명확한 위반은 0이었다. 트리맵 상세·근거와 그래프 탐색을 확인하는 iOS UI 테스트 2개도 통과했다. 이 기록은 당시 결과이며 다음 변경의 검증을 대신하지 않는다. 문서만 수정한 후에는 링크·기능 앵커·diff를 확인한다.

`docs/`는 배포에서 제외한다. 사이트 소스와 공개 정책 문서는 이 저장소에서 관리하고 앱 저장소에 복제하지 않는다.

2026-09-29: 내부 배포 1.0 (59)의 복합 고민·맥락별 AI 안내를 소개에 반영했다. AI 지원 조건과 직접 선택 대체 흐름을 함께 설명한다. 앱은 여전히 공개 출시 전이므로 다운로드 URL은 빈 값으로 유지한다.
