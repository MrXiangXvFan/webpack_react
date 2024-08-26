const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");


module.exports = {
    entry: "./src/main.tsx", //入口文件
    output: {  //输出路径和文件名
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.html$/, //正则匹配.html结尾的文件
                use: [
                    {
                        loader: "html-loader" //使用html-loader
                    }
                ]
            },
            {
                test: /\.(js|ts|jsx|tsx)$/, //正则匹配js.ts.jsx.tsx结尾的文件
                include: path.appSrc,
                use: [
                    {
                        loader: "esbuild-loader", //使用esbuild-loader将js、ts、jsx、tsx文件内容转换为es2015
                        options: {
                            loader: "tsx", //把tsx文件
                            target: "es2015",  //编译成es2015
                        },
                    }
                ]
            }
        ]
    },
    plugins: [ //使用插件，这里使用了HtmlWebPackPlugin
        new HtmlWebPackPlugin({
            title: "react-ts-project",//react的一个转换插件
            filename: "./index.html",
            template: "./index.html"//当前模板地址
        })
    ]
};


