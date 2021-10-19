<<<<<<< HEAD
const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#e30309',
              '@link-color': '#1890ff',
              '@success-color': '#52c41a',
              '@warning-color': '#faad14',
              '@error-color': '#f5222d',
              '@font-size-base': '14px',
              '@heading-color': 'yellow',
              '@text-color': 'rgba(0, 0, 0, 0.65)',
              '@text-color-secondary': 'rgba(0, 0, 0, 0.45)',
              '@disabled-color': 'rgba(0, 0, 0, 0.25)',
              '@border-radius-base': '2px',
              '@border-color-base': '#d9d9d9',
              '@box-shadow-base':
                '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
=======
/* craco.config.js */
module.exports = {
  // ...
>>>>>>> 3892415c5ef2e3fffb6f611a90c0a1f297d27264
}
