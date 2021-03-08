const path = require('path')

// 配置打包
module.exports = {
  // 入口
  entry: './src/main.js', 

  // 出口
  output: {
    // 路径 __dirname:获取当前文件的绝对路径
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/',
    // 文件名
    filename: 'bundle.js'
  },
  /* webpack不可以直接打包CSS */
  /* 需要下载对应loader */
  /* 并配置相应的文件 */
  /* css-loader只负责加载 */
  /* style-loader负责添加样式 */
  module: {
    rules: [
      {
        test: /\.css$/,
        // 加载顺序从右向左
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}