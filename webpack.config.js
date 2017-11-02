var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './entry.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js'
  },
  module: {
  loaders: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015','react']
      }
    },
    {//背景图片
        	test:/\.(jpg|png|gif)$/,
        	loader:"url-loader?limit=1024"
        },
        {//字体文件
        	test:/\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
        	loader:'file-loader?name=[name].[ext]'
        },
    
    {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          {
            loader: 'css-loader'
          }
        ]
      }
  ]
},
	plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};