const session = require("express-session");
const connectRedis = require("connect-redis");

const RedisStore = connectRedis(session);

module.exports = function setSession(app) {
	const { error } = app.get("logger");

	const store = new RedisStore({
		host: app.get("redis_host"),
		port: 6379
	});

	store.on("disconnect", err => {
		error(err.toString());
	});

	const config = {
		secret: app.get("session_secret"),
		resave: false,
		rolling: true,
		saveUninitialized: false,
		store
	};

	if (app.get("env") === "production") {
		app.set("trust proxy", 1);
		config.cookie = { secure: true };
		config.proxy = true;
	}

	app.use(session(config));
};
