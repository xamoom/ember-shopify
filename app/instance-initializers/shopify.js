import ENV from '../config/environment';
import initializeShopify from 'ember-shopify/instance-initializers/shopify';

export function initialize(instance) {
  initializeShopify(instance, ENV);
}

export default {
  name: 'ember-shopify',
  initialize
};