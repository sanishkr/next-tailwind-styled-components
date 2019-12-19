/* eslint-disable no-unused-expressions */
const withCSS = require('@zeit/next-css');
const withOffline = require('next-offline');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const {
  WebpackBundleSizeAnalyzerPlugin,
} = require('webpack-bundle-size-analyzer');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const configs = require('./config');
const ENV = process.env.ENV || 'development';
const NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = NODE_ENV === 'development';
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const tailwindcss = require("tailwindcss");
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
// class ServerMiniCssExtractPlugin extends MiniCssExtractPlugin {
//   getCssChunkObject(mainChunk) {
//     return {};
//   }
// }
const nextConfig = {
  serverRuntimeConfig: {
    isServer: true,
  },
  publicRuntimeConfig: {
    env: ENV,
    configs: configs[ENV],
  },
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html',
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html',
    },
  },
  // manifest,
  // target: 'serverless',
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
        urlPattern: /\.css$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'cached-css',
          expiration: {
            maxEntries: 20,
            maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
          },
        },
      },
      {
        urlPattern: /\.(png|svg|jpg|jpeg|ico)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'cached-images',
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 15 * 24 * 60 * 60, // 15 days
          },
        },
      },
      {
        urlPattern: /https:\/\/jsonplaceholder.typicode.com/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'cached-apis',
          expiration: {
            maxEntries: 2,
            maxAgeSeconds: 1 * 24 * 60 * 60, // 1 day
          },
        },
      },
      {
        urlPattern: /\//,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
  // cssModules: true,
  // cssLoaderOptions: {
  //   importLoaders: 1,
  //   localIdentName: "[local]___[hash:base64:5]",
  // },
  webpack: (config, options) => {
    config.module.rules.push(
      // {
      // 	test: /\.css$/,
      // 	loader: 'emit-file-loader',
      // 	options: {
      // 		name: 'dist/[path][name].[ext]'
      // 	}
      // },
      {
        test: /\.css$/,
        use: [
          // {
          // 	loader: ServerMiniCssExtractPlugin.loader
          // },
          // 'isomorphic-style-loader',
          // {
          // 	loader: 'css-loader',
          // 	options: {
          // 		modules: true,
          // 		sourceMap: true,
          // 		localIdentName: '[name]-[local]-[hash:base64:5]',
          // 	},
          // },
          // {
          //   loader: 'postcss-loader',
          //   options: {
          // 		plugins: [
          // 			require("postcss-easy-import"),
          // 			tailwindcss("./tailwind.config.js"),
          // 			require("@fullhuman/postcss-purgecss")({
          // 				content: ["./pages/*.js", "./components/*.js", "./atoms/*.js", "./molecules/*.js", "./layouts/*.js"],
          // 				defaultExtractor: content =>
          // 					content.match(/[A-Za-z0-9-_:/]+/g) || []
          // 			}),
          // 			require('postcss-preset-env'),
          // 			require("autoprefixer"),
          // 			require("cssnano"),
          // 		]
          // 	}
          // }
          // 'extracted-loader',
          // 'babel-loader',
          // 'raw-loader',
          // 'postcss-loader',
          // 'style-loader',
          // {
          // 	loader: 'css-loader',
          // 	options: {
          // 		url: true,
          // 		minimize: false,
          // 		sourceMap: true,
          // 		importLoaders: 2
          // 	}
          // },
          // {
          // 	loader: 'postcss-loader',
          // 	options: {
          // 		ident: "postcss",
          // 		plugins: [require("tailwindcss"), require("autoprefixer")]
          // 	}
          // },
          // ]
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
        ],
      },
    ),
      /** #TODO Use below only in production - it disables hmr */
      // config.optimization = {
      // 	minimize: true
      // },
      config.plugins.push(
        new WebpackBundleSizeAnalyzerPlugin('stats.txt'),
        // new ExtractTextPlugin({
        //   filename: path.join(__dirname, './assets/css/pages/page2.css'),
        //   allChunks: true
        // }),
        new CopyWebpackPlugin([
          {
            from: path.resolve('public'),
            to: path.resolve('.next/static'),
          },
        ]),
      );
    // config.watchOptions = {
    //   ignored: [
    //     /\.git\//,
    //     /\.next\//,
    //     /node_modules/
    //   ]
    // }
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    config.node = {
      fs: 'empty',
    };
    return config;
  },
};

const pipe = (...ops) => ops.reduce((a, b) => arg => b(a(arg)));
const wrapper = pipe(withOffline, withCSS, withBundleAnalyzer);

// module.exports = withPlugins([
// 	[withOffline({ dontAutoRegisterSw: true })], //doesnt work so, use pip fn instead
// 	[withCSS],
// 	nextConfig
// ]);

module.exports = wrapper(nextConfig);
