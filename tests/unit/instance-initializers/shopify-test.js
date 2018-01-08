import Application from '@ember/application';
import { run } from '@ember/runloop';
import EmberObject, { getProperties } from '@ember/object';
import initializeShopify from 'ember-shopify/instance-initializers/shopify';
import { module } from 'qunit';
import sinonTest from 'ember-sinon-qunit/test-support/test';
import destroyApp from '../../helpers/destroy-app';
import ENV from '../../../config/environment';

module('Unit | Instance Initializer | shopify', {
  needs: ['service:shopify'],
  beforeEach() {
    run(() => {
      this.application = Application.create();
      this.appInstance = this.application.buildInstance();
    });
  },
  afterEach() {
    run(this.appInstance, 'destroy');
    destroyApp(this.application);
  },
});

sinonTest('sets up shopify-service properties taking their values from the config file', function (assert) {
  const shopifyMock = EmberObject.create();
  const stubAplicationInstance = this.stub(this.appInstance, 'lookup');

  stubAplicationInstance.withArgs('service:shopify').returns(shopifyMock);

  initializeShopify(this.appInstance, ENV);

  const { accessToken, domain, appId } = getProperties(shopifyMock, [
    'accessToken',
    'domain',
    'appId',
  ]);

  assert.equal(
    accessToken,
    ENV['shopify-buy'].accessToken,
    'accessToken gets set using the respective value from the config file',
  );

  assert.equal(
    domain,
    ENV['shopify-buy'].domain,
    'domain gets set using the respective value from the config file',
  );

  assert.equal(
    appId,
    ENV['shopify-buy'].appId,
    'appId gets set using the respective value from the config file',
  );
});
