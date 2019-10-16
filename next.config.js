const withCSS = require("@zeit/next-css");

module.exports = withCSS({
	webpack: (config, options) => {
		// config.module.rules.push({
		// 	test: /\.css$/,
		// 	use: [
		// 		{
		// 			loader: "postcss-loader",
		// 			options: {
		// 				ident: "postcss",
		// 				plugins: [require("tailwindcss"), require("autoprefixer")]
		// 			}
		// 		}
		// 	]
		// }),
		config.node = {
			fs: "empty"
		};
		return config;
	}
});
