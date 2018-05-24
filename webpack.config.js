const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  devtool: 'source-map',
  devServer: {
    contentBase: './src',
    hot: true,
    historyApiFallback: true,
    open: true
  },
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ["react-hot", "babel-loader"]
    }],
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader : 'css-loader',
          options : {
            minimize : true
          }
        }]
      })
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
        {
          loader : 'css-loader',
          options : {
          minimize : true
          }
        },
        'sass-loader'
        ]
      })
    }, {
      test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
      use: [ 'url-loader' ]
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-react']
        }
      }
    }, {
      test: /node_modules[\\\/]vis[\\\/].*\.js$/,
      loader: 'babel-loader',
      query: {
      cacheDirectory: true,
      presets: [ "babel-preset-es2015" ].map(require.resolve),
      plugins: [
        "transform-es3-property-literals", // #2452
        "transform-es3-member-expression-literals", // #2566
        "transform-runtime" // #2566
      ]
      }
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
    new HtmlWebpackPlugin({
      template : 'src/index.html'
    }),
    new CopyWebpackPlugin([{
      from: 'src/assets',
      to: path.join(__dirname, 'dist/assets')
    }]),
    new ExtractTextPlugin({
      filename: 'style.css',
      disable: process.env.NODE_ENV !== 'production'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
