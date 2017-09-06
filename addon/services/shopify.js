import Ember from 'ember';

const {
  computed,
  getProperties,
  Service,
} = Ember;

export default Service.extend({

  /**
   * Shopify-buy access token.
   * Should be set via initializer.
   * @property accessToken
   * @type String
   * @default null
   * @tested
   */
  accessToken: null,

  /**
   * Shopify-buy app domain.
   * Should be set via initializer.
   * @property domain
   * @type String
   * @default null
   * @tested
   */
  domain: null,

  /**
   * Shopify-buy app ID.
   * Should be set via initializer.
   * @property appId
   * @type String
   * @default null
   * @tested
   */
  appId: null,

  /**
   * API to the shopify-buy SDK.
   * @property shopClient
   * @type Computed<Object>
   * @tested
   */
  shopClient: computed({
    get() {
      const { accessToken, domain, appId } = getProperties(this, [
        'accessToken',
        'domain',
        'appId',
      ]);

      return window.ShopifyBuy.buildClient({
        accessToken,
        domain,
        appId,
      });
    },
  }),
});
