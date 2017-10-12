module.exports = {
	env: {
		es6: true,
		node: true,
		browser: true,
		"jest/globals": true
	},
	extends: [
		"eslint:recommended",
		"prettier",
		"prettier/react",
		"plugin:jest/recommended"
	],
	settings: {
		react: {
			createClass: "createReactClass",
			pragma: "React"
		},
		// The names of any functions used to wrap the propTypes object,
		// such as `forbidExtraProps`. If this isn't set, any propTypes wrapped
		// in a function will be skipped.
		propWrapperFunctions: ["forbidExtraProps"]
	},
	plugins: ["prettier", "react", "mocha", "jest"],
	parser: "babel-eslint",
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true
		}
	},
	rules: {
		"prettier/prettier": "error",
		"mocha/no-exclusive-tests": "error",
		"react/jsx-uses-react": "error",
		"react/jsx-uses-vars": "error",
		"jest/no-disabled-tests": "warn",
		"jest/no-focused-tests": "error",
		"jest/no-identical-title": "error",
		"jest/valid-expect": "error"
	}
};
