

module.exports = {
  chainWebpack: config => {
    config.plugin('define').tap(args => {
      args[0].graphendpoint = JSON.stringify('https://demo.viosystems.com/grcapi/')
      return args
    })
  }
}
