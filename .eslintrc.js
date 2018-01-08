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
    "prefer-rest-params": "off",
    "import/no-unresolved": "off",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "ember/named-functions-in-promises": "off",
  },
  settings: {
    'import/core-modules': [
      'ember',
      'ember-shopify/services/shopify',
      'ember-shopify/instance-initializers/shopify',
    ]
  },
};
