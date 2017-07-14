var path=require('path');
var webpack=require('webpack');
var HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={

    entry:['./app.js'],
    output:{
        filename:"bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    {loader:"style-loader"},
                    {loader:"css-loader"},
                ]
            }
        ]
    },
    watch:true
}