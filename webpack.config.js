const path = require("path");
const webpack = require("webpack");
const WebpackPwaManifest = require("webpack-pwa-manifest");

module.exports = {
    entry: {
        //not sure what files to include
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'bundle.js'
    },
    mode: 'development'
};
