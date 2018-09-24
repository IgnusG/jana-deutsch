install:
	gem install bundler
	bundle install

run:
	bundle exec compass compile -c config.rb --force
	cd website && \
	python -m http.server

deploy:
	make install
	bundle exec compass compile -c config-prod.rb --force
	npx firebase deploy
