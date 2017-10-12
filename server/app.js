const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const winston = require("winston");
const config = require("config");

const { setConfig } = require("./utils");
const setRoutes = require("./routes");
const setSession = require("./session");

module.exports = async function init() {
	const app = express();

	setConfig(app, config);

	const logger = new winston.Logger({
		transports: [
			new winston.transports.Console({ level: process.env.LOGLEVEL || "info" })
		]
	});
	app.set("logger", logger);

	app.use(morgan("dev"));
	app.use(express.static(path.join(__dirname, "../public")));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));

	setSession(app);
	setRoutes(app);

	// catch 404 and forward to error handler
	app.use((req, res, next) => {
		const err = new Error("Not Found");
		err.status = 404;
		next(err);
	});

	return app;
};
