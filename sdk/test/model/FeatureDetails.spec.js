/**
 * Yapily API
 * To access endpoints that require authentication, use your Application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.28
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.YapilyApi);
  }
}(this, function(expect, YapilyApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new YapilyApi.FeatureDetails();
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

  describe('FeatureDetails', function() {
    it('should create an instance of FeatureDetails', function() {
      // uncomment below and update the code to test FeatureDetails
      //var instane = new YapilyApi.FeatureDetails();
      //expect(instance).to.be.a(YapilyApi.FeatureDetails);
    });

    it('should have the property documentationUrl (base name: "documentationUrl")', function() {
      // uncomment below and update the code to test the property documentationUrl
      //var instane = new YapilyApi.FeatureDetails();
      //expect(instance).to.be();
    });

    it('should have the property endpoint (base name: "endpoint")', function() {
      // uncomment below and update the code to test the property endpoint
      //var instane = new YapilyApi.FeatureDetails();
      //expect(instance).to.be();
    });

    it('should have the property feature (base name: "feature")', function() {
      // uncomment below and update the code to test the property feature
      //var instane = new YapilyApi.FeatureDetails();
      //expect(instance).to.be();
    });

  });

}));
