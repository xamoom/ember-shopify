import { get } from '@ember/object';
import { moduleFor, test } from 'ember-qunit';
import sinonTest from 'ember-sinon-qunit/test-support/test';

moduleFor('service:shopify', 'Unit | Service | shopify', {

  beforeEach() {
    if (!window.ShopifyBuy) {
      window.ShopifyBuy = {
        buildClient() {},
      };
    }
  },

});

test('should have correct property values by default', function (assert) {
  const service = this.subject();

  assert.equal(get(service, 'accessToken'), null, 'accessToken is null by default');
  assert.equal(get(service, 'domain'), null, 'domain is null by default');
  assert.equal(get(service, 'appId'), null, 'appId is null by default');
});

sinonTest("should instantiate shopify-buy client on first get(service, 'shopClient') call", function (assert) {
  const accessToken = 'accessToken';
  const domain = 'domain';
  const appId = 'appId';

  const service = this.subject({
    accessToken,
    domain,
    appId,
  });


  const stubShopifyBuy = this.stub(window.ShopifyBuy, 'buildClient');

  get(service, 'shopClient');

  assert.ok(
    stubShopifyBuy.called,
    "get(service, 'shopClient') instantiates shopify-buy client delegating to ShopifyBuy.buildClient()",
  );

  assert.ok(
    stubShopifyBuy.calledWith({
      accessToken,
      domain,
      appId,
    }),
    'the arguments passed to ShopifyBuy.buildClient() are correct',
  );

  stubShopifyBuy.restore(); // probably not necessary since we mock it anyway
});
