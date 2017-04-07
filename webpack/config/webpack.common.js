import path               from 'path';
import HtmlWebpackPlugin  from 'html-webpack-plugin';
import ExtractTextPlugin  from 'extract-text-webpack-plugin';

import paths from './paths';

export default {
  entry: paths.entry,
  resolve: {
    alias: {
      'vue$': path.resolve(paths.rootPath, 'node_modules/vue/dist/vue.esm.js'),
      '@': path.resolve(paths.srcPath, 'app')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: [ path.resolve(paths.srcPath, 'app') ]
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'stylus-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: true
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      hash: true,
      // chunks: ['vendors', 'app']
    }),
  ]
};
