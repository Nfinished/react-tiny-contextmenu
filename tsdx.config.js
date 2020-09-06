module.exports = {
  rollup(config, options) {
    config.plugins.push(
      require('rollup-plugin-postcss')({
        plugins: [
          require('autoprefixer'),
          require('cssnano')
        ]
      })
    )
    return config
  },
}
