/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.150
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
    define(['ApiClient', 'model/Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.ResponseListMeta = factory(root.YapilyApi.ApiClient, root.YapilyApi.Pagination);
  }
}(this, function(ApiClient, Pagination) {
  'use strict';




  /**
   * The ResponseListMeta model module.
   * @module model/ResponseListMeta
   * @version 0.0.150
   */

  /**
   * Constructs a new <code>ResponseListMeta</code>.
   * @alias module:model/ResponseListMeta
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ResponseListMeta</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseListMeta} obj Optional instance to populate.
   * @return {module:model/ResponseListMeta} The populated <code>ResponseListMeta</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('tracingId')) {
        obj['tracingId'] = ApiClient.convertToType(data['tracingId'], 'String');
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }

  /**
   * @member {String} tracingId
   */
  exports.prototype['tracingId'] = undefined;
  /**
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;



  return exports;
}));


