const tailwindcss = require("tailwindcss");

module.exports = {
	plugins: [
		require("postcss-easy-import")({prefix: '_'}),
		require("autoprefixer"),
		tailwindcss("./tailwind.config.js"),
		require("@fullhuman/postcss-purgecss")({
			content: ["./pages/*.js", "./components/*.js", "./atoms/*.js", "./molecules/*.js", "./layouts/*.js"],
			defaultExtractor: content =>
				content.match(/[A-Za-z0-9-_:/]+/g) || []
		}),
		require('postcss-preset-env'),
		require("cssnano"),
	]
};
