const withCSS = require("@zeit/next-css");
const withOffline = require('next-offline')
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
const {
  WebpackBundleSizeAnalyzerPlugin
} = require('webpack-bundle-size-analyzer')
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// let networkFirst = workbox.strategies.networkFirst({
//   cacheName: 'cache-pages' 
// });

// const customHandler = async (args) => {
//   try {
//     const response = await networkFirst.handle(args);
//     return response || await caches.match(offlinePage);
//   } catch (error) {
//     return await caches.match(offlinePage);
//   }
// };

const nextConfig = {
	analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html'
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html'
    }
  },
	// manifest,
	target: 'serverless',
	// dontAutoRegisterSw: true,
	// devSwSrc: 'public/service-worker.js',
	// generateInDevMode: true,
	workboxOpts: {
		swDest: 'static/service-worker.js',
		runtimeCaching: [
			// {
			// 	urlPattern: /\//,
			// 	handler: 'NetworkFirst'
			// },
			{
        urlPattern: /^https?.*/,
        handler: "NetworkFirst",
        options: {
          cacheName: "http-calls",
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      },
      {
        urlPattern: /\/images\//,
				handler: 'CacheFirst',
				options: {
					cacheName: "cached-images",
					expiration: {
            maxEntries: 100,
            maxAgeSeconds: 15 * 24 * 60 * 60 // 15 days
          },
				}
			},
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
		config.optimization = {
			minimize: true
		},
		config.plugins.push(
			new WebpackBundleSizeAnalyzerPlugin('stats.txt'),
			new CopyWebpackPlugin([
				{
					from: path.resolve('public'),
					to: path.resolve('.next/static'),
				},
			]),
		)
		config.node = {
			fs: "empty"
		};
		return config;
	}
}

const pipe = (...ops) => ops.reduce((a, b) => (arg) => b(a(arg)));
const wrapper = pipe(withOffline, withCSS, withBundleAnalyzer);

// module.exports = withPlugins([
// 	[withOffline({ dontAutoRegisterSw: true })], //doesnt work so, use pip fn instead
// 	[withCSS],
// 	nextConfig
// ]);

module.exports = wrapper(nextConfig)