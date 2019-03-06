const htmlWebpackPlugin = require("html-webpack-plugin")
const miniCssExtractPlugin = require("mini-css-extract-plugin")



module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.(css|scss)$/,
            use: [
                // {
                //     loader: "style-loader"
                // },
                {
                    loader: miniCssExtractPlugin.loader
                },
                {
                    loader: "css-loader"
                },
                {
                    loader: "sass-loader"
                }
            ]
        }]
    },

    devServer: {
        port: 3000
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new miniCssExtractPlugin({
            filename: "bundle.css"
        })
    ]
}