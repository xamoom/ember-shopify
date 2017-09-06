module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: [
    'airbnb-base',
    'plugin:ember/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    "no-console": "off",
    "import/no-unresolved": "off",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "import/extensions": "off",
  },
  settings: {
    'import/core-modules': [
      'ember',
      'ember-shopify/services/shopify',
      'ember-shopify/instance-initializers/shopify',
    ]
  },
};
