const path = require('path')
module.exports = {
  trailingSlash: true,
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
    }
    return config
  },
  images: {
    domains: ['willowstudio.be', 'playasone.willowstudio.be'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}
