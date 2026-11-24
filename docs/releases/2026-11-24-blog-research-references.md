# 성분 페이지 「다른 성분과 함께 다룬 연구」 절 (2026-11-24)

- 근거: 바름 설계 `2026-10-20-ingredient-blog-design.md` §5.3 4항 개정(2026-11-24 소유자 승인).
- 스냅숏 `as_of` 2026-11-24. 성분 51, 근거 51(변경 없음). 연구 참고 26건이 성분 15개 페이지에 붙는다(관계 13건).
- 범위: 관계의 `reference.ingredient_ids`에 이름이 오른 성분 전부. 앱의 연구 참고 매칭과 같다.
- 질병·치료 낱말이 든 관계 8335(나이아신아마이드·트라넥사믹애씨드, 기미 환자 연구)는 싣지 않았다. `check-blog`가 생성 페이지의 이 절에서 금지어를 다시 확인한다.
- 배포: `wrangler deploy`, Version ID `efdde369-1666-40b9-a4af-b76a0992b2d6`.
- 운영 확인: glycerin·retinol·homosalate 성분 페이지·`/blog/`·`/sitemap.xml` 200, niacinamide 페이지 `기미` 0건.
- 남은 것: 관계 8333 DB 문구의 "페룰릭애씨드을"(→를)이 bmdbm·ehmc 페이지에 그대로 실렸다. `reference.summary`를 고치는 RPC가 없어 보류했다.
