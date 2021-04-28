const path = require('path')
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin
module.exports = {
  devServer: {
    // https: true,
    disableHostCheck: true,
    port: 8080,
    host: 'localhost',
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/variables.scss";`,
      },
    },
  },
  pwa: {
    workboxPluginMode: 'InjectManifest',
    // workboxPluginMode: 'generateSW',
    workboxOptions: {
      // skipWaiting: true,
      // clientsClaim: true,
      swSrc: 'src/service-worker.js',
    },
  },
  configureWebpack: {
    plugins: [
      new ServiceWorkerWebpackPlugin({
        entry: path.join(__dirname, './src/service-worker.js'),
      }),
      // new BundleAnalyzerPlugin(),
    ],
  },
}
