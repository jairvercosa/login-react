const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
})

module.exports = {
    entry: './src/index.jsx',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
                include: path.join(__dirname, 'src/'),
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
                include: path.join(__dirname, 'src/'),
            }
        ]
    },
    plugins: [htmlPlugin],
    resolve: {
        unsafeCache: true,
        cacheWithContext: false,
        modules: [
            path.join(__dirname, 'src/'),
            path.join(__dirname, 'node_modules'),
        ],
        extensions: ['.js', '.jsx', '.vue']
    },
};
