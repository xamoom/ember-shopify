import Ember from 'ember';
import initializeShopify from 'ember-shopify/instance-initializers/shopify';
import { module } from 'qunit';
import sinonTest from 'ember-sinon-qunit/test-support/test';
import destroyApp from '../../helpers/destroy-app';
import ENV from '../../../config/environment';

const {
  getProperties,
} = Ember;

module('Unit | Instance Initializer | shopify', {
  needs: ['service:shopify'],
  beforeEach() {
    Ember.run(() => {
      this.application = Ember.Application.create();
      this.appInstance = this.application.buildInstance();
    });
  },
  afterEach() {
    Ember.run(this.appInstance, 'destroy');
    destroyApp(this.application);
  },
});

sinonTest('sets up shopify-service properties taking their values from the config file', function(assert) {
  const shopifyMock = Ember.Object.create();
  const stubAplicationInstance = this.stub(this.appInstance, 'lookup');

  stubAplicationInstance.withArgs('service:shopify').returns(shopifyMock);

  initializeShopify(this.appInstance, ENV);

  const { accessToken, domain, appId } = getProperties(shopifyMock, [
    'accessToken',
    'domain',
    'appId',
  ]);

  assert.equal(
    accessToken, ENV['shopify-buy'].accessToken, 'accessToken gets set using the respective value from the config file',
  );

  assert.equal(
    domain, ENV['shopify-buy'].domain, 'domain gets set using the respective value from the config file',
  );

  assert.equal(
    appId, ENV['shopify-buy'].appId, 'appId gets set using the respective value from the config file',
  );
});
