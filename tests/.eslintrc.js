module.exports = {
  env: {
    embertest: true
  },
  rules: {
    "no-console": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "ember/named-functions-in-promises": "off"
  },
  settings: {
    'import/core-modules': [
      'ember',
      'ember-load-initializers',
      'ember-resolver',
      'qunit',
      'ember-qunit',
      'ember-shopify/instance-initializers/shopify',
    ]
  },
};
