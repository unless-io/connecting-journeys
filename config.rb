activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :sprockets
activate :dato, live_reload: true
activate :i18n, mount_at_root: :nl, langs: [:en, :nl]

configure :development do
  activate :livereload
end

dato.tap do |dato|

  dato.trips.each do |trip|
    proxy "/reizen/#{trip.slug}.html", "/templates/article.html", locals: { trip: trip }
  end
end

ignore "/templates/article.html.erb"

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
