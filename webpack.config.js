const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

module.exports = {
  // other configurations...
  plugins: [
    // other plugins...
    new WorkboxPlugin.InjectManifest({
      swSrc: path.join(process.cwd(), "/app/resources/service-worker.js"),
      swDest: "sw.js",
      exclude: [
        /\.map$/,
        /manifest$/,
        /\.htaccess$/,
        /service-worker\.js$/,
        /sw\.js$/,
      ],
    }),
  ],
};
