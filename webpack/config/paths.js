'use strict';

import path from 'path';

let rootPath    = path.resolve(process.cwd())
  , srcPath     = path.resolve(process.cwd(), 'src')
  , appPath     = path.resolve(process.cwd(), 'src/app')
  , destPath    = path.resolve(process.cwd(), 'dist');

export default {
  rootPath,
  srcPath,
  appPath,
  destPath,
  entry: {
    app: [
      path.join(srcPath, 'styl/app.styl'),
      path.join(srcPath, 'app/app.js')
    ]
  }
};
