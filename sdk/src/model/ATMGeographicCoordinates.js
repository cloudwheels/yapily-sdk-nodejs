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
    root.YapilyApi.ATMGeographicCoordinates = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ATMGeographicCoordinates model module.
   * @module model/ATMGeographicCoordinates
   * @version 0.0.46
   */

  /**
   * Constructs a new <code>ATMGeographicCoordinates</code>.
   * Location on the earth specified by two numbers representing vertical and horizontal position.
   * @alias module:model/ATMGeographicCoordinates
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ATMGeographicCoordinates</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ATMGeographicCoordinates} obj Optional instance to populate.
   * @return {module:model/ATMGeographicCoordinates} The populated <code>ATMGeographicCoordinates</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Latitude')) {
        obj['Latitude'] = ApiClient.convertToType(data['Latitude'], 'String');
      }
      if (data.hasOwnProperty('Longitude')) {
        obj['Longitude'] = ApiClient.convertToType(data['Longitude'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} Latitude
   */
  exports.prototype['Latitude'] = undefined;
  /**
   * @member {String} Longitude
   */
  exports.prototype['Longitude'] = undefined;



  return exports;
}));


