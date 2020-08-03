const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
    mode: "development",
    entry: {
        app: "./public/index.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "app.bundle.js"
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules)/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"]
              }
            }
          }
        ]
      },
      plugins: [
        new WebpackPwaManifest({
          name: "Budget Tracker app",
          short_name: "Budget-Tracker",
          description: "An application that aides in tracking and maintaining within a budget.",
          background_color: "#01579b",
          theme_color: "#ffffff",
          "theme-color": "#ffffff",
          start_url: "/index.html",
          icons: [{
            src: path.resolve("public/icons/icon-192x192.png"),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join("public", "icons")
          }]
        })
      ]
};

module.exports = config;