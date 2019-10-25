const withCSS = require("@zeit/next-css");
const withOffline = require('next-offline')
// const path = require('path');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

const nextConfig = {
	// manifest,
	target: 'serverless',
	// dontAutoRegisterSw: true,
	// swDest: 'static/service-worker.js',
	// devSwSrc: 'public/service-worker.js',
	// generateInDevMode: true,
	workboxOpts: {
		runtimeCaching: [
      {
        urlPattern: 'https://tailwindcss.com/img/card-top.jpg',
        handler: 'CacheFirst'
      }
    ]
  },
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.css$/,
			use: [
				{
					loader: "postcss-loader",
					options: {
						ident: "postcss",
						plugins: [require("tailwindcss"), require("autoprefixer")]
					}
				}
			]
		// },
		// {
		// 	test: /\.(jpe?g|png|gif|ico|webp)$/,
		// 	use: [
		// 		{
		// 			loader: 'url-loader',
		// 			options: {
		// 				limit: 10000,
		// 				fallback: 'file-loader',
		// 				publicPath: '/_next/static/images/',
		// 				outputPath: `${options.isServer ? '../' : ''}static/images/`,
		// 				name: '[name].[ext]',
		// 			},
		// 		},
		// 	],
		}),
		// config.plugins.push(
		// 	new CopyWebpackPlugin([
		// 		{
		// 			from: path.resolve('public/manifest.json'),
		// 			to: path.resolve('.next/static'),
		// 		},
		// 	]),
		// )
		config.node = {
			fs: "empty"
		};
		return config;
	}
}

const pipe = (...ops) => ops.reduce((a, b) => (arg) => b(a(arg)));
const wrapper = pipe(withOffline, withCSS);

// module.exports = withPlugins([
// 	[withOffline({ dontAutoRegisterSw: true })], //doesnt work so, use pip fn instead
// 	[withCSS],
// 	nextConfig
// ]);

module.exports = wrapper(nextConfig)