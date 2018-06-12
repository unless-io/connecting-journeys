activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :sprockets
activate :dato, live_reload: true
activate :i18n, mount_at_root: :nl, langs: [:en, :nl]

configure :development do
  activate :livereload
end

# dato.tap do |dato|

  # iterate over the "Blog post" records...
  # dato.blog_posts.each do |article|
  [1,2,3].each do |item|
    # ...and create a page for each article starting from a template!
    proxy "/reizen/#{item}.html", "/templates/article.html", locals: { article: item }
  end   
  # end
# end

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
  activate :relative_assets
  set :relative_links, true
end

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.deploy_method = :git
end
