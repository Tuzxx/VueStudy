const path = require('path')

// 配置打包
module.exports = {
  // 入口
  entry: './src/main.js', 

  // 出口
  output: {
    // 路径 __dirname:获取当前文件的绝对路径
    path: path.resolve(__dirname, 'dist'),
    // 加了公共路径 页面才能从dist文件夹找到对应图片
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
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 限制图片大小
              // 小于该值 则将图片直接转换为base64字符串格式上传到浏览器
              // 大于该值 则将图片交给file-loader进行加载
              // file-loader会将图片打包到dist文件夹下并改名为哈希值
              limit: 8192,

              // 自定义图片名称
              // img/cat/ dist下存放路径
              // [name] 原来的名字
              // [hash:8] 只获取8位哈希值
              // [ext] 原来的文件格式
              name: 'img/cat/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  }
}