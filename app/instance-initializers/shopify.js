import initializeShopify from 'ember-shopify/instance-initializers/shopify';
import ENV from '../config/environment';

export function initialize(instance) {
  initializeShopify(instance, ENV);
}

export default {
  name: 'ember-shopify',
  initialize,
};
