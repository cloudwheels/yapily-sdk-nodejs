/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.162
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.2.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.YapilyApi);
  }
}(this, function(expect, YapilyApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new YapilyApi.YapilyAccessToken();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('YapilyAccessToken', function() {
    it('should create an instance of YapilyAccessToken', function() {
      // uncomment below and update the code to test YapilyAccessToken
      //var instance = new YapilyApi.YapilyAccessToken();
      //expect(instance).to.be.a(YapilyApi.YapilyAccessToken);
    });

    it('should have the property accessToken (base name: "access_token")', function() {
      // uncomment below and update the code to test the property accessToken
      //var instance = new YapilyApi.YapilyAccessToken();
      //expect(instance).to.be();
    });

    it('should have the property expiresIn (base name: "expires_in")', function() {
      // uncomment below and update the code to test the property expiresIn
      //var instance = new YapilyApi.YapilyAccessToken();
      //expect(instance).to.be();
    });

    it('should have the property jti (base name: "jti")', function() {
      // uncomment below and update the code to test the property jti
      //var instance = new YapilyApi.YapilyAccessToken();
      //expect(instance).to.be();
    });

    it('should have the property scope (base name: "scope")', function() {
      // uncomment below and update the code to test the property scope
      //var instance = new YapilyApi.YapilyAccessToken();
      //expect(instance).to.be();
    });

    it('should have the property tokenType (base name: "token_type")', function() {
      // uncomment below and update the code to test the property tokenType
      //var instance = new YapilyApi.YapilyAccessToken();
      //expect(instance).to.be();
    });

  });

}));
