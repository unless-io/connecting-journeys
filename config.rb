config[:sass_assets_paths] << File.join(root, 'node_modules')

set :css_dir,    'stylesheets'
set :images_dir, 'images'
set :js_dir,     'javascripts'


activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :external_pipeline,
         name: :webpack,
         command: build? ? 'yarn run build' : 'yarn run start',
         source: 'dist',
         latency: 1

activate :dato
activate :i18n, mount_at_root: :nl, langs: [:en, :nl]

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
  ignore   File.join(config[:js_dir], '*') # handled by webpack
  set :relative_links, true
  activate :asset_hash
  activate :gzip
  activate :minify_css
  activate :relative_assets
end

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.deploy_method = :git
end
