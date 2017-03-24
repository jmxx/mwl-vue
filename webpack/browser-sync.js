import browserSync          from 'browser-sync';
import colorsSupported      from 'supports-color';
import webpack              from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
// Require ./webpack.config.js and make a bundler from it
import webpackConfig        from './config/webpack.dev.babel';
import paths                from './config/paths';

let bundler = webpack(webpackConfig, (err = null, stats = {}) => {
  // console.log(err, stats);
});


/**
 * Run Browsersync and use middleware for Hot Module Replacement
 */
browserSync.init({
  port: 3000,
  host: 'localhost',
  open: 'external',
  server: {
    baseDir: paths.destPath
  },
  middleware: [
    webpackDevMiddleware(bundler, {
      stats: { colors: true },
      publicPath: webpackConfig.output.publicPath,
    }),
    webpackHotMiddleware(bundler)
  ]
  // server: {
  //   baseDir: 'app',
  //   middleware: [
  //   webpackDevMiddleware(bundler, {
  //     // IMPORTANT: dev middleware can't access config, so we should
  //       // provide publicPath by ourselves
  //       publicPath: webpackConfig.output.publicPath,
  //
  //       // pretty colored output
  //       stats: { colors: true }
  //
  //       // for other settings see
  //       // http://webpack.github.io/docs/webpack-dev-middleware.html
  //     }),
  //
  //     // bundler should be the same as above
  //     webpackHotMiddleware(bundler)
  //   ]
  // },
  //
  // // no need to watch '*.js' here, webpack will take care of it for us,
  // // including full page reloads if HMR won't work
  // files: [
  //   'app/css/*.css',
  //   'app/*.html'
  // ]
}, () => {
  console.log('Serving...');
});
