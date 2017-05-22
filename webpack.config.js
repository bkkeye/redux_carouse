/**
 * Created by u on 2017/5/15.
 */


var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: "eval-source-map",//配置生成Source Maps,选择合适的选项
    entry : [
       // "webpack-dev-server/client?http://0.0.0.0:3000",
      //  "webpack/hot/only-dev-server",
        "./src/index.js" //已多次提及的唯一入口文件 __dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
    ],

    output: {
        path: __dirname+ "/public/",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名

    },
    module: {
        loaders:[
            {
                test:/\.json$/,
                loader:"json-loader"
            },
            {
                test:/\.js$/,
                loader : "babel-loader",
                exclude:/node_modules/
            },
            {
                test:/\.jsx$/,
                loader : ["babel-loader"],
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                loader : ["style-loader","css-loader",'sass-loader']
            }
        ]
    },
    plugins: [

        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        })
        //,
       // new webpack.HotModuleReplacementPlugin()//热加载插件
    ]
    /*,
    devServer: {
        contentBase: './src/',
        historyApiFallback: true,
        // hot: true,
        // port: defaultSettings.port,
        publicPath: "/public",
        noInfo: false
    },*/
    ,
    devServer: {
        contentBase :"./public", //本地服务器所加载的页面路径
        inline : true,
        historyApiFallback : true //不跳转
    }
}
