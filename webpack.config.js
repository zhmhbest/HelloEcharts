const path = require("path");
const root = path.resolve(__dirname);
const prod = "production" === process.env["NODE_ENV"] ? true : false;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: prod ? "production" : "development",
    entry: {
        index: "./src/index.js"
    },
    output: {
        path: path.resolve(root, "dist"),
        filename: prod ? "static/js/[name].js" : "static/js/[name]-[hash].js"
    },
    devServer: {
        port: 9000,
        progress: true,
        contentBase: path.join(root, "src"),
        compress: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html", // 模板HTML文件路径
            filename: "index.html",     // 打包后HTML文件名称
            minify: {                   // 优化操作
                removeAttributeQuotes: prod,    // 删除多余的双引号
                collapseWhitespace: prod,       // 删除换行
                hash: true
            }
        }),
    ],
};