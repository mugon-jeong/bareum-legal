# 앱 소개 화면 자료

- 캡처일: 2026-09-28.
- `order.webp`, `history.webp`, `shelf.webp`: 설치된 Bareum Debug 앱을 별도 `Bareum Website Capture` iPhone 18 Pro / iOS 27 시뮬레이터에서 실행해 캡처. 각각 `--design-preview=tabs`, `history`, `shelf`를 사용했다. 데모 데이터이며 운영 사용자 자료가 아니다. 804×1748 크기 축소와 WebP 변환 외에 앱 내용은 수정하지 않았다.
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

독립 관계 그래프 소개와 `graph.webp`, `graph-selected.webp` 자료는 제거했다. 첫 화면의 보조 iPhone은 내 선반을 표시한다. 현재 앱의 순서·성분·선반 3개 탭과 일치하도록 순서·트리맵 화면을 갱신했다. 선반·기록·이동 모식도도 같은 Debug 빌드로 다시 캡처했다. 공유 이미지 `social.png`는 새 화면 자료가 적용된 웹 첫 화면 캡처다. 관련 연구·근거는 성분 상세 맥락에서 설명한다.
