

module.exports = {
  publicPath: '/grcvue',
  chainWebpack: config => {
    config.plugin('define').tap(args => {
      args[0].graphendpoint = 'https://demo.viosystems.com/grcapi/'
      return args
    })
  }
}
