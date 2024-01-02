/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production'? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production'? 'warn' : 'off',
    'vue/no-unused-components': 'off',
    'vue/no-unused-vars': 'off',
    'vue/require-default-prop': 'off',
    "vue/multi-word-component-names": "off",
    // "vue/multi-word-component-names": ["error", {
    //   "ignores": ["Layout", "Sidebar",]
    // }]
  },
  overrides: [
    {
      files: [
        'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'
      ],
      'extends': [
        'plugin:cypress/recommended'
      ]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
