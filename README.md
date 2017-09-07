# Ember-shopify

Ember addon providing a service representing an interface to the [shopify-buy Javascript SDK](http://shopify.github.io/js-buy-sdk/)

## Installation

`ember install ember-shopify`

## Background

This addon inserts `<script src="http://sdks.shopifycdn.com/js-buy-sdk/v0/latest/shopify-buy.umd.polyfilled.min.js"></script>` into your `app/index.html` file during build process. The addon has been provided to satisfy older Ember versions that cannot import scripts from `node_modules` since their dependencies could be installed via bower exclusively [(see the issue on github)](https://github.com/ember-cli/ember-cli/issues/3890). 

## Usage

Update your `config/environment.js` using your shopify-related settings:
```
...
const ENV = {
   ...
   'shopify-buy': {
     enabled: true,
     accessToken: 'your-access-token',
     domain: 'your-shop-subdomain.myshopify.com',
     appId: '6',
   },
   ...
}
```

These values will be set upon the exposed `shopify` service via initializer. 
You can inject the service whereever you need just as usual:

```
import Ember from 'ember';

export default Ember.Route.extend({
  shopify: Ember.inject.service(),
  ...
});
```

The service populates Shopify's primary interface (client) as a computed property `shopClient` [(client reference API)](http://shopify.github.io/js-buy-sdk/api/classes/ShopClient.html):
```
...
  model(){
   const shopifyService = Ember.get(this, 'shopify');
   const shopifyClient = Ember.get(shopifyService, 'shopClient');
   
   // use the populated client as you wish
   return shopifyClient.fetchProduct('8569911558');
  },
...
```

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

## License

MIT License

Copyright (c) 2017 xamoom GmbH

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
