const html = require("../view/view").default;

module.exports = function Root() {
	return {
		index(req, resp, next) {
			html(req.url, resp.send.bind(resp)).catch(next);
		}
	};
};
