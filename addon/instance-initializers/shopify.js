import Ember from 'ember';

const {
  isEmpty,
  getProperties,
  setProperties,
} = Ember;

export default function initializeShopify(appInstance, ENV) {
  const shopifyService = appInstance.lookup('service:shopify');

  const shopifyBuyConfig = ENV['shopify-buy'];

  if (isEmpty(shopifyBuyConfig)) {
    console.error("No configuration for 'shopify-buy' found! Update your config file, please.");
    return;
  }

  if (isEmpty(shopifyBuyConfig.accessToken)) {
    console.error("'accessToken' for shopify-buy missing in the config!");
    return;
  }

  if (isEmpty(shopifyBuyConfig.domain)) {
    console.error("'domain' for shopify-buy missing in the config!");
    return;
  }

  if (isEmpty(shopifyBuyConfig.appId)) {
    console.error("'appId' for shopify-buy missing in the config!");
    return;
  }

  setProperties(
    shopifyService,
    getProperties(shopifyBuyConfig, [
      'accessToken',
      'domain',
      'appId',
    ]),
  );
}
