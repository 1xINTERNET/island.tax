const { composePlugins, withNx } = require('@nx/webpack')

// Nx plugins for webpack.
// Nx plugins for webpack.
module.exports = composePlugins(withNx(), (config) => {
  // Disable caching
  config.cache = false

  return config
})
