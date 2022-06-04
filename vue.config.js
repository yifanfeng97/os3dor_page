const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: "/os3dor/",

  devServer: {
    port: 53113,
    allowedHosts: 'all',
  }
})
