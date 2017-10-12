const http = require("http");
const init = require("./app");

init().then(app => {
	const server = http.createServer(app);
	const port = app.get("port");
	const logger = app.get("logger");

	server.listen(port);

	server.on("error", onError);
	server.on("listening", onListening);

	process.on("unhandledRejection", e => {
		logger.error(e.toString());
	});

	function onError(error) {
		if (error.syscall !== "listen") {
			throw error;
		}

		var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

		// handle specific listen errors with friendly messages
		switch (error.code) {
			case "EACCES":
				logger.error(bind + " requires elevated privileges");
				process.exit(1);
				break;
			case "EADDRINUSE":
				logger.error(bind + " is already in use");
				process.exit(1);
				break;
			default:
				throw error;
		}
	}

	function onListening() {
		var addr = server.address();
		var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
		logger.debug("Listening on " + bind);
	}
});
