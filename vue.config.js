

module.exports = {
  publicPath: 'grcvue',
  chainWebpack: config => {
    config.plugin('define').tap(args => {
      args[0].graphendpoint = JSON.stringify(process.env.graphendpoint)
      return args
    })
  }
}
