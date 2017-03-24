import paths   from './paths';
import config  from './webpack.common';
import webpack from 'webpack';

config.entry.app = [
  // this module is required to make HRM working, it's responsible for all this webpack magic:
  'webpack-hot-middleware/client?reload=true',
].concat(paths.entry.app);

config.output = {
  filename: 'app/[name].bundle.js',
  publicPath: '/',
  path: paths.destPath
};

// config.module.rules.push({
//   test: /\.styl$/,
//   use: [
//     'css-loader',
//     'stylus-loader'
//   ]
// });

config.plugins.push(new webpack.HotModuleReplacementPlugin());

config.plugins.push(new webpack.NoEmitOnErrorsPlugin());

export default config;
