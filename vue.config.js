const path = require('path')

module.exports = {
  transpileDependencies: ['vuetify'],
  devServer: {
    disableHostCheck: true
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/_global.scss";'
      }
    }
  },
  chainWebpack: config => {
    // this path is specific to my project
    config.resolve.alias.set('styles', path.resolve('src/styles'))
  }
}
