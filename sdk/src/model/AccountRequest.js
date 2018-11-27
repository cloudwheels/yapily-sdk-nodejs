/**
 * Yapily API
 * To access endpoints that require authentication, use your Application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.46
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.AccountRequest = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AccountRequest model module.
   * @module model/AccountRequest
   * @version 0.0.46
   */

  /**
   * Constructs a new <code>AccountRequest</code>.
   * @alias module:model/AccountRequest
   * @class
   * @param transactionFrom {Date} 
   * @param transactionTo {Date} 
   * @param expiresAt {Date} 
   */
  var exports = function(transactionFrom, transactionTo, expiresAt) {
    var _this = this;

    _this['transactionFrom'] = transactionFrom;
    _this['transactionTo'] = transactionTo;
    _this['expiresAt'] = expiresAt;
  };

  /**
   * Constructs a <code>AccountRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountRequest} obj Optional instance to populate.
   * @return {module:model/AccountRequest} The populated <code>AccountRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('transactionFrom')) {
        obj['transactionFrom'] = ApiClient.convertToType(data['transactionFrom'], 'Date');
      }
      if (data.hasOwnProperty('transactionTo')) {
        obj['transactionTo'] = ApiClient.convertToType(data['transactionTo'], 'Date');
      }
      if (data.hasOwnProperty('expiresAt')) {
        obj['expiresAt'] = ApiClient.convertToType(data['expiresAt'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {Date} transactionFrom
   */
  exports.prototype['transactionFrom'] = undefined;
  /**
   * @member {Date} transactionTo
   */
  exports.prototype['transactionTo'] = undefined;
  /**
   * @member {Date} expiresAt
   */
  exports.prototype['expiresAt'] = undefined;



  return exports;
}));


