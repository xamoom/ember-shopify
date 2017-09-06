/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-shopify',

  contentFor(type, config) {

    if (type !== 'head') {
      return;
    }
    
    if (!config['shopify-buy']) {
      return;
    }
    
    if (!config['shopify-buy'].enabled) {
      return;
    }

    return `<script src="http://sdks.shopifycdn.com/js-buy-sdk/v0/latest/shopify-buy.umd.polyfilled.min.js"></script>`;
  }

};
