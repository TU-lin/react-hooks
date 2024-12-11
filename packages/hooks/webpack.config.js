/*
 * @LastEditors: linxiaotong
 * @Date: 2024-12-09 06:39:38
 * @LastEditTime: 2024-12-11 10:54:02
 * @Description: 
 */
const merge = require('webpack-merge');
const common = require('../../webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  entry: './es/index.js',
  output: {
    filename: 'react-hooks.js',
    library: 'react-hooks',
    path: path.resolve(__dirname, './dist'),
  },
});