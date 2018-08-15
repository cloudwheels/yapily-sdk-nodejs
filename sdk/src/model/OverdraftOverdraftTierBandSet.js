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
    define(['ApiClient', 'model/OverdraftOverdraftFeesCharges1', 'model/OverdraftOverdraftTierBand'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OverdraftOverdraftFeesCharges1'), require('./OverdraftOverdraftTierBand'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.OverdraftOverdraftTierBandSet = factory(root.YapilyApi.ApiClient, root.YapilyApi.OverdraftOverdraftFeesCharges1, root.YapilyApi.OverdraftOverdraftTierBand);
  }
}(this, function(ApiClient, OverdraftOverdraftFeesCharges1, OverdraftOverdraftTierBand) {
  'use strict';




  /**
   * The OverdraftOverdraftTierBandSet model module.
   * @module model/OverdraftOverdraftTierBandSet
   * @version 0.0.28
   */

  /**
   * Constructs a new <code>OverdraftOverdraftTierBandSet</code>.
   * Tier band set details
   * @alias module:model/OverdraftOverdraftTierBandSet
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>OverdraftOverdraftTierBandSet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OverdraftOverdraftTierBandSet} obj Optional instance to populate.
   * @return {module:model/OverdraftOverdraftTierBandSet} The populated <code>OverdraftOverdraftTierBandSet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('AuthorisedIndicator')) {
        obj['AuthorisedIndicator'] = ApiClient.convertToType(data['AuthorisedIndicator'], 'Boolean');
      }
      if (data.hasOwnProperty('BufferAmount')) {
        obj['BufferAmount'] = ApiClient.convertToType(data['BufferAmount'], 'String');
      }
      if (data.hasOwnProperty('Identification')) {
        obj['Identification'] = ApiClient.convertToType(data['Identification'], 'String');
      }
      if (data.hasOwnProperty('Notes')) {
        obj['Notes'] = ApiClient.convertToType(data['Notes'], ['String']);
      }
      if (data.hasOwnProperty('OverdraftFeesCharges')) {
        obj['OverdraftFeesCharges'] = ApiClient.convertToType(data['OverdraftFeesCharges'], [OverdraftOverdraftFeesCharges1]);
      }
      if (data.hasOwnProperty('OverdraftTierBand')) {
        obj['OverdraftTierBand'] = ApiClient.convertToType(data['OverdraftTierBand'], [OverdraftOverdraftTierBand]);
      }
      if (data.hasOwnProperty('OverdraftType')) {
        obj['OverdraftType'] = ApiClient.convertToType(data['OverdraftType'], 'String');
      }
      if (data.hasOwnProperty('TierBandMethod')) {
        obj['TierBandMethod'] = ApiClient.convertToType(data['TierBandMethod'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} AuthorisedIndicator
   */
  exports.prototype['AuthorisedIndicator'] = undefined;
  /**
   * @member {String} BufferAmount
   */
  exports.prototype['BufferAmount'] = undefined;
  /**
   * @member {String} Identification
   */
  exports.prototype['Identification'] = undefined;
  /**
   * @member {Array.<String>} Notes
   */
  exports.prototype['Notes'] = undefined;
  /**
   * @member {Array.<module:model/OverdraftOverdraftFeesCharges1>} OverdraftFeesCharges
   */
  exports.prototype['OverdraftFeesCharges'] = undefined;
  /**
   * @member {Array.<module:model/OverdraftOverdraftTierBand>} OverdraftTierBand
   */
  exports.prototype['OverdraftTierBand'] = undefined;
  /**
   * @member {module:model/OverdraftOverdraftTierBandSet.OverdraftTypeEnum} OverdraftType
   */
  exports.prototype['OverdraftType'] = undefined;
  /**
   * @member {module:model/OverdraftOverdraftTierBandSet.TierBandMethodEnum} TierBandMethod
   */
  exports.prototype['TierBandMethod'] = undefined;


  /**
   * Allowed values for the <code>OverdraftType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OverdraftTypeEnum = {
    /**
     * value: "Committed"
     * @const
     */
    "Committed": "Committed",
    /**
     * value: "OnDemand"
     * @const
     */
    "OnDemand": "OnDemand",
    /**
     * value: "Other"
     * @const
     */
    "Other": "Other"  };

  /**
   * Allowed values for the <code>TierBandMethod</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TierBandMethodEnum = {
    /**
     * value: "Tiered"
     * @const
     */
    "Tiered": "Tiered",
    /**
     * value: "Whole"
     * @const
     */
    "Whole": "Whole"  };


  return exports;
}));

