const path = require('path')

// 配置打包
module.exports = {
  // 入口
  entry: './src/main.js', 

  // 出口
  output: {
    // 路径 __dirname:获取当前文件的绝对路径
    path: path.resolve(__dirname, 'dist'),
    // 文件名
    filename: 'bundle.js'
  },

}