const path = require('path');

module.exports = {
    mode: 'development',
    entry: "./src/index.ts",
    devServer: {
        contentBase: './dist',
    },
    output: {
        filename: 'main.ts',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: "source-map",
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.js$/, loader: "source-map-loader" },
        ],
    },
};
