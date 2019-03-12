const path = require('path')

// Theme API.
module.exports = (options, ctx) => ({
  globalLayout: './layouts/GlobalLayout.vue',
  alias () {
    const { themeConfig, siteConfig } = ctx
    // resolve algolia
    const isAlgoliaSearch = (
      themeConfig.algolia
      || Object.keys(siteConfig.locales && themeConfig.locales || {})
        .some(base => themeConfig.locales[base].algolia)
    )
    return {
      '@AlgoliaSearchBox': isAlgoliaSearch
        ? path.resolve(__dirname, 'components/AlgoliaSearchBox.vue')
        : path.resolve(__dirname, 'noopModule.js')
    }
  },
  plugins: [
    ['@vuepress/search', { searchMaxSuggestions: 10 }],
    '@vuepress/plugin-nprogress',
    ['@vuepress/container', { type: 'tip' }],
    ['@vuepress/container', { type: 'warning' }],
    ['@vuepress/container', { type: 'danger' }]
  ]
})
