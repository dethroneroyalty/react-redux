const Root = require("./controllers/root");

module.exports = function(app) {
	const root = Root(app);

	app.use("*", root.index);
};
