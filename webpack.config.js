const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const RemovePlugin = require("remove-files-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    "admin/assets/js": "./admin/assets/vue/wp-admin-vue.js",
    "public/assets/js": "./public/assets/vue/wp-admin-vue.js",
    admin: "./admin/assets/scss/wp-admin-vue-admin.scss",
    "public": "./public/assets/scss/wp-admin-vue-public.scss"
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js", // Use the full build
    },
  },
  output: {
    filename: "[name]/wp-admin-vue.build.js",
    path: path.resolve(__dirname),
  },
  plugins: [
    new FixStyleOnlyEntriesPlugin(),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },

      {
        test: /\.js$/,
        use: [
          "babel-loader",
          {
            loader: 'standard-loader',
          },
        ],
        exclude: '/node_modules/',
      },
      {
        test: /.(sc|c)ss$/,
        use: [
          "vue-style-loader",
          "style-loader",
          "sass-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.sass$/,
        use: [
          "vue-style-loader",
          "style-loader",
          "css-loader",
          "sass-loader",
          "postcss-loader",
        ],
      },
    ],
  },
};
