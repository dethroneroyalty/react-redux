// const nodeExternals = require("webpack-node-externals");

module.exports = [
	{
		name: "client",
		entry: "./client/index.js",
		output: {
			path: __dirname + "/public",
			filename: "client.js"
		},
		devtool: "cheap-module-source-map",
		resolve: {
			alias: {
				react: "preact-compat",
				"react-dom": "preact-compat"
			}
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					loader: "babel-loader",
					exclude: /node_modules/,
					query: {
						presets: [
							[
								"env",
								{
									targets: {
										browsers: ">1%"
									},
									useBuiltIns: true
								}
							]
						],
						plugins: [
							"transform-class-properties",
							"transform-object-rest-spread",
							["transform-react-jsx", { pragma: "h" }]
						]
					}
				}
			]
		}
	},
	{
		name: "ssr",
		entry: "./server/view/index.js",
		output: {
			path: __dirname + "/server/view",
			filename: "view.js",
			libraryTarget: "commonjs2"
		},
		resolve: {
			alias: {
				react: "preact-compat",
				"react-dom": "preact-compat"
			}
		},
		devtool: "cheap-module-source-map",
		target: "node",
		//  externals: nodeExternals({
		//    whitelist: ["react-router-dom", "react-router"]
		//  }),
		module: {
			rules: [
				{
					test: /\.js$/,
					loader: "babel-loader",
					exclude: /node_modules/,
					query: {
						presets: [
							[
								"env",
								{
									targets: {
										node: "8.6"
									},
									useBuiltIns: true
								}
							]
						],
						plugins: [
							"transform-class-properties",
							"transform-object-rest-spread",
							["transform-react-jsx", { pragma: "h" }]
						]
					}
				}
			]
		}
	}
];
