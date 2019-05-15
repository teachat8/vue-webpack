const WebpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');


module.exports = WebpackMerge(baseConfig, {
  mode: 'development'
});