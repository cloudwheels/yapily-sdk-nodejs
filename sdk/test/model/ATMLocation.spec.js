/**
 * Yapily API
 * To access endpoints that require authentication, use your Application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.43
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
    instance = new YapilyApi.ATMLocation();
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

  describe('ATMLocation', function() {
    it('should create an instance of ATMLocation', function() {
      // uncomment below and update the code to test ATMLocation
      //var instane = new YapilyApi.ATMLocation();
      //expect(instance).to.be.a(YapilyApi.ATMLocation);
    });

    it('should have the property locationCategory (base name: "LocationCategory")', function() {
      // uncomment below and update the code to test the property locationCategory
      //var instane = new YapilyApi.ATMLocation();
      //expect(instance).to.be();
    });

    it('should have the property otherLocationCategory (base name: "OtherLocationCategory")', function() {
      // uncomment below and update the code to test the property otherLocationCategory
      //var instane = new YapilyApi.ATMLocation();
      //expect(instance).to.be();
    });

    it('should have the property postalAddress (base name: "PostalAddress")', function() {
      // uncomment below and update the code to test the property postalAddress
      //var instane = new YapilyApi.ATMLocation();
      //expect(instance).to.be();
    });

    it('should have the property site (base name: "Site")', function() {
      // uncomment below and update the code to test the property site
      //var instane = new YapilyApi.ATMLocation();
      //expect(instance).to.be();
    });

    it('should have the property mapServiceLinks (base name: "mapServiceLinks")', function() {
      // uncomment below and update the code to test the property mapServiceLinks
      //var instane = new YapilyApi.ATMLocation();
      //expect(instance).to.be();
    });

  });

}));
