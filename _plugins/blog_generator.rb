# 성분 블로그 페이지 생성기. _data/blog.json(바름 저장소 scripts/blog-snapshot 산출물)과
# _data/blog_concerns.json 으로 /blog/ingredients/<id>/, /blog/concerns/<code>/ 페이지를 만든다.
module Bareum
  class BlogGenerator < Jekyll::Generator
    safe true
    priority :high

    def generate(site)
      snapshot = site.data["blog"]
      return unless snapshot

      concerns = site.data["blog_concerns"] || []
      linking_posts = posts_by_ingredient(site)
      snapshot["ingredients"].each do |ingredient|
        effects = ingredient["claims"].map { |claim| claim["effect_name"] }.uniq.join("·")
        sources = ingredient["claims"].map { |claim| claim["source_type"] }.uniq.join("·")
        add_page(site, "blog/ingredients/#{ingredient['id']}", {
          "layout" => "blog-ingredient",
          "title" => "#{ingredient['name_kr']} 효과·효능 근거",
          "description" => "#{ingredient['name_kr']}의 #{effects} 효과 근거를 #{sources} 원문 조건과 함께 확인하세요.",
          "ingredient" => ingredient,
          "linking_posts" => linking_posts.fetch(ingredient["id"], []),
          "campaign" => "blog-ingredient",
        })
      end
      concerns.each do |concern|
        add_page(site, "blog/concerns/#{concern['code']}", {
          "layout" => "blog-concern",
          "title" => "#{concern['title']}에 근거가 있는 성분",
          "description" => "#{concern['title']} 고민과 관련해 고시·문헌 근거가 있는 성분을 조건과 함께 정리했습니다.",
          "concern" => concern,
          "campaign" => "blog-concern",
        })
      end
    end

    private

    # 대표 글 본문의 /blog/ingredients/<id>/ 링크를 모아 성분 페이지에 역링크로 보여 준다. 제목 가나다순.
    def posts_by_ingredient(site)
      index = Hash.new { |h, k| h[k] = [] }
      site.posts.docs.each do |post|
        post.content.scan(%r{/blog/ingredients/([a-z0-9_]+)/}).flatten.uniq.each { |id| index[id] << post }
      end
      index.transform_values { |posts| posts.sort_by { |post| post.data["title"].to_s } }
    end

    def add_page(site, dir, data)
      page = Jekyll::PageWithoutAFile.new(site, site.source, dir, "index.html")
      page.content = ""
      page.data.merge!(data)
      site.pages << page
    end
  end
end
