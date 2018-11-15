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
    define(['ApiClient', 'model/ATMGeoLocation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ATMGeoLocation'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.ATMPostalAddress = factory(root.YapilyApi.ApiClient, root.YapilyApi.ATMGeoLocation);
  }
}(this, function(ApiClient, ATMGeoLocation) {
  'use strict';




  /**
   * The ATMPostalAddress model module.
   * @module model/ATMPostalAddress
   * @version 0.0.43
   */

  /**
   * Constructs a new <code>ATMPostalAddress</code>.
   * Information that locates and identifies a specific address, as defined by postal services or in free format text.
   * @alias module:model/ATMPostalAddress
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>ATMPostalAddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ATMPostalAddress} obj Optional instance to populate.
   * @return {module:model/ATMPostalAddress} The populated <code>ATMPostalAddress</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('AddressLine')) {
        obj['AddressLine'] = ApiClient.convertToType(data['AddressLine'], ['String']);
      }
      if (data.hasOwnProperty('BuildingNumber')) {
        obj['BuildingNumber'] = ApiClient.convertToType(data['BuildingNumber'], 'String');
      }
      if (data.hasOwnProperty('Country')) {
        obj['Country'] = ApiClient.convertToType(data['Country'], 'String');
      }
      if (data.hasOwnProperty('CountrySubDivision')) {
        obj['CountrySubDivision'] = ApiClient.convertToType(data['CountrySubDivision'], ['String']);
      }
      if (data.hasOwnProperty('GeoLocation')) {
        obj['GeoLocation'] = ATMGeoLocation.constructFromObject(data['GeoLocation']);
      }
      if (data.hasOwnProperty('PostCode')) {
        obj['PostCode'] = ApiClient.convertToType(data['PostCode'], 'String');
      }
      if (data.hasOwnProperty('StreetName')) {
        obj['StreetName'] = ApiClient.convertToType(data['StreetName'], 'String');
      }
      if (data.hasOwnProperty('TownName')) {
        obj['TownName'] = ApiClient.convertToType(data['TownName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} AddressLine
   */
  exports.prototype['AddressLine'] = undefined;
  /**
   * @member {String} BuildingNumber
   */
  exports.prototype['BuildingNumber'] = undefined;
  /**
   * @member {String} Country
   */
  exports.prototype['Country'] = undefined;
  /**
   * @member {Array.<String>} CountrySubDivision
   */
  exports.prototype['CountrySubDivision'] = undefined;
  /**
   * @member {module:model/ATMGeoLocation} GeoLocation
   */
  exports.prototype['GeoLocation'] = undefined;
  /**
   * @member {String} PostCode
   */
  exports.prototype['PostCode'] = undefined;
  /**
   * @member {String} StreetName
   */
  exports.prototype['StreetName'] = undefined;
  /**
   * @member {String} TownName
   */
  exports.prototype['TownName'] = undefined;



  return exports;
}));

