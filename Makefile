eslint:
	npx eslint --fix .
	npx stylelint "**/*.css" --fix

eslint-check:
	npm install --force
	npx eslint .
	npx stylelint "**/*.css"

local/run:
	npm start
	open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security http://localhost:3000

docker/run/prod:
	docker build . -t honda-plug-react
	docker create --name dummy-container honda-plug-react
	docker cp dummy-container:/app/build ./build
	docker rm dummy-container
	docker restart $(docker ps -qf ancestor=honda-plug-nginx)