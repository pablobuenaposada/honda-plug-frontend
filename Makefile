eslint:
	npx eslint --fix .
	npx stylelint "**/*.css" --fix

eslint-check:
	npm install --force
	npx eslint .
	npx stylelint "**/*.css"