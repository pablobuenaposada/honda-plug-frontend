eslint:
	npx eslint --fix .
	npx stylelint "**/*.css" --fix

eslint-check:
	npm install --force
	npx eslint .
	npx stylelint "**/*.css"

docker/run/prod:
	docker build . -t honda-plug-react
	docker create --name dummy-container honda-plug-react
	docker cp dummy-container:/app/build ./build
	docker rm dummy-container