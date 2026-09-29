# 앱 소개 화면 자료

- 기존 기능 캡처일: 2026-09-28. AI 루틴 캡처일: 2026-09-29.
- `order.webp`, `shelf.webp`: 설치된 Bareum Debug 앱을 별도 `Bareum Website Capture` iPhone 18 Pro / iOS 27 시뮬레이터에서 실행해 캡처. 각각 `--design-preview=tabs`, `shelf`를 사용했다. 데모 데이터이며 운영 사용자 자료가 아니다. 804×1748 크기 축소와 WebP 변환 외에 앱 내용은 수정하지 않았다.
- `widget-medium.webp`, `widget-small.webp`: 앱 저장소 `docs/design/screens.html`의 Pen 내보내기에서 `JEWV9`, `swepB` 요소를 브라우저로 캡처했다. 원본 문서는 변경하지 않았다. 실제 위젯 캡처가 아니라 디자인 예시임을 페이지에 명시했다.
- 위젯 기능 설명 대조: `BareumWidget/NextStepWidget.swift`, `NextStepHomeViews.swift`, `StreakWidget.swift`. 루틴을 앱에서 준비한 뒤 사용하며, 크기와 상태에 따라 표시·조작이 다르다.
- `app-icon.webp`: 앱의 `Assets.xcassets/AppIcon.appiconset/AppIcon.png` 축소본.
- `social.png`: 이 소개 사이트의 첫 화면을 브라우저로 캡처한 공유 이미지.
- ThreeUI 참고: https://threeui.com/motion-design/perspective-ui . 입체 화면 배치와 전환을 참고했으며 Pro 템플릿 소스·리소스를 복사하지 않았다.

출시 직전 실제 출시 빌드로 앱 화면을 갱신한다. 소개 문구는 웹사이트에서 순서나 효능을 재계산하지 않는다.

## 확장 기능 화면

- `treemap.webp`: `DesignRefreshTests/testShelfIngredientTabOpensCategoryAndEvidence`의 `ingredients-treemap` 첨부 화면(`1C299232-C4CF-4CE6-91D3-8A98E739A27E.png`, 독립 관계 그래프 종료 후 최종 UI 검증 결과). 합성 검증 데이터이며 검증된 효능 축을 표시한다. 분류별 고유 성분 수를 나타내고 함량·효과 강도를 나타내지 않는다.
- `absorption.webp`: 별도 iPhone 시뮬레이터의 `--design-preview=depth` 화면. 분자량·용해도 기반 모식도이며 실제 흡수량 측정이 아니다.
- `watch-home.webp`, `watch-routine.webp`: 별도 Apple Watch SE 3 40mm 시뮬레이터에서 설치된 Watch 앱을 `--watch-preview`, `--watch-preview --watch-preview-routine`으로 실행한 데모 화면.
- `island-compact.webp`, `island-expanded.webp`, `live-activity.webp`: 앱 저장소 `docs/design/screens.html`의 다이나믹 아일랜드·잠금 화면 실시간 현황 디자인 내보내기를 캡처. 실제 시스템 실행 캡처가 아니며 사이트에도 디자인 예시라고 명시했다.
- 기능 설명 대조: `ShelfIngredientsView.swift`, `AbsorptionView.swift`, `BareumWidget/RoutineLiveActivity.swift`, `BareumWatch/WatchViews.swift`, `WatchAppModel.swift`. Watch에서는 iPhone의 계정·오늘의 순서 준비가 필요하며, 다이나믹 아일랜드는 지원 기기에서 사용한다.

## 독립 관계 그래프 종료 반영

독립 관계 그래프 소개와 `graph.webp`, `graph-selected.webp` 자료는 제거했다. 첫 화면의 보조 iPhone은 내 선반을 표시한다. 2026-09-28 당시 앱의 순서·성분·선반 3개 탭에 맞춰 순서·트리맵 화면을 갱신했다. 이 기존 기능 데모는 당시 캡처이며, 현재 앱의 순서·AI·성분·선반 4개 탭은 아래 AI 루틴 자료에서 확인할 수 있다. 선반·기록·이동 모식도도 같은 Debug 빌드로 다시 캡처했다. 공유 이미지 `social.png`는 새 화면 자료가 적용된 웹 첫 화면 캡처다. 관련 연구·근거는 성분 상세 맥락에서 설명한다.


## AI 루틴 화면 (2026-09-29)

실제 iOS 앱의 `ConcernTemplateUITests` 실행 중 생성된 스크린샷이다. `Bareum Concern Routine Tests` 시뮬레이터(`4E435C66-3B8A-42F5-9EC0-2073F77481DB`)에서 합성 성분·제품·근거와 고정 응답을 사용하는 검증용 데모를 실행했다. 운영 사용자 자료, 실제 개인의 피부 고민, 실제 온디바이스 모델의 출력 결과가 아니다. 화면의 `AI 안내`도 성공 경로를 확인하기 위해 주입한 결정론적 테스트 응답이다. 페이지에서 앱 데모 화면임을 표시한다.

원본 1206×2622를 804×1748로 축소하고 `cwebp -q 90`으로 변환했다. 텍스트·탭·상태 표시·선택 결과를 합성하거나 수정하지 않았다.

| 사이트 파일 | 실제 화면 | 원본 첨부와 검증 테스트 |
|---|---|---|
| `ai-concerns.webp` | AI 탭에서 건조함·주름을 직접 선택한 두 가지 고민과 기본 안내 | `/tmp/bareum-guidance-ui-attachments/09EE22B8-C55A-4D78-ABB6-C08D156BFB30.png` — `testMultipleSameFormCoresAndBackPreserveBothSelections`, `multiple-selected-concerns` |
| `ai-ingredients.webp` | 건조함에 연결된 글리세린의 성분 근거, 보유 제품, 직접 선택 버튼과 AI 안내 | `/Users/conny/bareum-backups/20260929-contextual-guidance-build59/feature-verification/bareum-guidance-ui-final-attachments/49F36DE1-1ED6-450B-BE90-8A077CA342F4.png` — `testGeneratedGuidanceUsesCurrentStageAndLeavesChoicesExplicit`, `guidance-generated` |
| `ai-forms.webp` | 핵심 제품 확인, 토너 선택·사용하지 않기, 저녁 선택과 순서 미리보기 | `/tmp/bareum-guidance-ui-attachments/D449E99A-2E43-4C3E-8BFF-E36C39FF55DE.png` — `testExplicitSelectionReplacementAndSavePayload`, `concern-visible-time-and-skip` |

각 원본 폴더의 `manifest.json`에서 테스트명·첨부 이름·기기·캡처 시각을 확인했다. 구현 대조는 보존된 build 59 소스의 `ConcernTemplateView.swift`, `ConcernTemplatePreview.swift`, `ConcernTemplateUITests.swift`를 기준으로 했다. 세 이미지는 서로 다른 검증 시나리오이며 한 사용자의 연속 사용 기록으로 설명하지 않는다. 성분 근거의 예시 문구를 제품 효능이나 실제 연구 결과의 증빙으로 사용하지 않는다.

기존 순서·선반·트리맵·기록·이동 모식도 자료는 이번에 변경하지 않았다. 기존 `DesignPreview`는 3탭 구조를 사용하므로 단순 재실행으로 4탭 화면이 되지 않는다. 출시 직전 실제 출시 빌드 갱신 시 함께 교체한다.

`social.png`는 2026-09-29 AI 루틴 앵커와 갱신된 소개 문구가 적용된 홈 첫 화면을 1200×630으로 다시 캡처했다. 앱 화면 자체를 합성하거나 수정하지 않았다.

## 기록 안내 문구 갱신 (2026-09-29)

`history.webp`는 무료 기간을 보장하는 문구를 제거한 앱 fixture로 다시 빌드·실행한 실제 데모 화면이다. `Bareum-Free-Copy-Web-20260929` iPhone 18 Pro / iOS 27 시뮬레이터에서 `--design-preview=history`로 캡처했다. 하단 안내는 “이전 달의 기록도 확인할 수 있어요.”이며 가격·무료 기간을 약속하지 않는다.

원본은 `/Users/conny/bareum-backups/20260929-free-copy-web/history.png`에 보존했다. `cwebp -resize 804 1748 -q 90`의 크기·형식 변환만 적용했고 앱 내용은 편집하지 않았다. 합성 fixture 데이터이며 운영 사용자 기록이 아니다.
