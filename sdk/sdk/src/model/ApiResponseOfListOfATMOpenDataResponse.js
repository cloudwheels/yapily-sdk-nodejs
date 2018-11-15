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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ATMOpenDataResponse', 'model/ResponseMeta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ATMOpenDataResponse'), require('./ResponseMeta'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.ApiResponseOfListOfATMOpenDataResponse = factory(root.YapilyApi.ApiClient, root.YapilyApi.ATMOpenDataResponse, root.YapilyApi.ResponseMeta);
  }
}(this, function(ApiClient, ATMOpenDataResponse, ResponseMeta) {
  'use strict';




  /**
   * The ApiResponseOfListOfATMOpenDataResponse model module.
   * @module model/ApiResponseOfListOfATMOpenDataResponse
   * @version 0.0.43
   */

  /**
   * Constructs a new <code>ApiResponseOfListOfATMOpenDataResponse</code>.
   * @alias module:model/ApiResponseOfListOfATMOpenDataResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ApiResponseOfListOfATMOpenDataResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseOfListOfATMOpenDataResponse} obj Optional instance to populate.
   * @return {module:model/ApiResponseOfListOfATMOpenDataResponse} The populated <code>ApiResponseOfListOfATMOpenDataResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('meta')) {
        obj['meta'] = ResponseMeta.constructFromObject(data['meta']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [ATMOpenDataResponse]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ResponseMeta} meta
   */
  exports.prototype['meta'] = undefined;
  /**
   * @member {Array.<module:model/ATMOpenDataResponse>} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));

