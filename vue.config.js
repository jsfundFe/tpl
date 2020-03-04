const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './', // TODO 线上访问路径
  outputDir: './dist', // TODO 打包后的输出目录
  assetsDir: 'static', // 静态资源目录 默认为空即直接将assets里的目录结构放在dist下 现在修改为static
  indexPath: 'index.html', // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  filenameHashing: true, // 生成带hash的静态资源
  pages: undefined, // 多页模式配置 默认值为undefined
  lintOnSave: process.env.NODE_ENV !== 'production', // 开发期间校验eslint build时不校验
  runtimeCompiler: false, // Vue组件中使用template选项
  transpileDependencies: [], // babel-loader 默认忽略node_modules
  productionSourceMap: false, // 生成生产环境的sourcemap 关闭以加快构建速度
  crossorigin: undefined, // 设置vue注入的link和script的crossorigin属性
  integrity: false, // 设置vue注入的link和script的integrity属性
  configureWebpack: {}, // webpack额外配置项 对象或函数
  chainWebpack: (config) => { // 对内部的webpack配置进行更细粒度的修改
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
  },
  css: {
    extract: process.env.NODE_ENV === 'production', // 提取css 开发时和热重载不兼容故关闭
    sourceMap: false, // 是否为CSS开启sourcemap
    loaderOptions: {} // 将选项传递给与CSS相关的加载器 修改css相关加载器配置 css-loader postcss-loader sass-loader less-loader stylus-loader
  },
  devServer: { // 支持webpack-dev-server的所有选项
    host: 'localhost',
    port: '80'
  },
  parallel: require('os').cpus().length > 1, // 是否使用线程加载器进行Babel或TypeScript转换 仅作用于生产构建
  pwa: {}, // pwa设置
  pluginOptions: {} // 给插件传值
}
