install:
	gem install bundler
	bundle install

run:
	bundle exec compass compile -c config.rb --force
	cd website && \
	python -m http.server
