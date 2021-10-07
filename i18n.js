const { I18n } = require('i18n')
const path = require('path');

/**
 * create a new instance with it's configuration
 */
const i18n = new I18n({
  locales: ['zh', 'en'],
  directory: path.join(__dirname, 'locales'),
  defaultLocale: 'zh',
})

module.exports = i18n