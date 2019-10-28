/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.159
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
    instance = new YapilyApi.AccountsApi();
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

  describe('AccountsApi', function() {
    describe('getAccountDirectDebitsUsingGET', function() {
      it('should call getAccountDirectDebitsUsingGET successfully', function(done) {
        //uncomment below and update the code to test getAccountDirectDebitsUsingGET
        //instance.getAccountDirectDebitsUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccountPeriodicPaymentsUsingGET', function() {
      it('should call getAccountPeriodicPaymentsUsingGET successfully', function(done) {
        //uncomment below and update the code to test getAccountPeriodicPaymentsUsingGET
        //instance.getAccountPeriodicPaymentsUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccountScheduledPaymentsUsingGET', function() {
      it('should call getAccountScheduledPaymentsUsingGET successfully', function(done) {
        //uncomment below and update the code to test getAccountScheduledPaymentsUsingGET
        //instance.getAccountScheduledPaymentsUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccountUsingGET', function() {
      it('should call getAccountUsingGET successfully', function(done) {
        //uncomment below and update the code to test getAccountUsingGET
        //instance.getAccountUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccountsUsingGET', function() {
      it('should call getAccountsUsingGET successfully', function(done) {
        //uncomment below and update the code to test getAccountsUsingGET
        //instance.getAccountsUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('initiateAccountRequestUsingPOST', function() {
      it('should call initiateAccountRequestUsingPOST successfully', function(done) {
        //uncomment below and update the code to test initiateAccountRequestUsingPOST
        //instance.initiateAccountRequestUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('reAuthoriseAccountUsingPATCH', function() {
      it('should call reAuthoriseAccountUsingPATCH successfully', function(done) {
        //uncomment below and update the code to test reAuthoriseAccountUsingPATCH
        //instance.reAuthoriseAccountUsingPATCH(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
