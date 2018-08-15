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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PaymentResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.ApiResponseOfPaymentResponse = factory(root.YapilyApi.ApiClient, root.YapilyApi.PaymentResponse);
  }
}(this, function(ApiClient, PaymentResponse) {
  'use strict';




  /**
   * The ApiResponseOfPaymentResponse model module.
   * @module model/ApiResponseOfPaymentResponse
   * @version 0.0.28
   */

  /**
   * Constructs a new <code>ApiResponseOfPaymentResponse</code>.
   * @alias module:model/ApiResponseOfPaymentResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ApiResponseOfPaymentResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseOfPaymentResponse} obj Optional instance to populate.
   * @return {module:model/ApiResponseOfPaymentResponse} The populated <code>ApiResponseOfPaymentResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = PaymentResponse.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PaymentResponse} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));

