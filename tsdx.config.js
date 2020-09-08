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

    if (options.env === 'production') {
      config.plugins.push(
        require('rollup-plugin-filesize')()
        )
      }
    return config
  },
}
