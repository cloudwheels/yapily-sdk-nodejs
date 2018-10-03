/**
 * Yapily API
 * To access endpoints that require authentication, use your Application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.35
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
    root.YapilyApi.FeatureDetails = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FeatureDetails model module.
   * @module model/FeatureDetails
   * @version 0.0.35
   */

  /**
   * Constructs a new <code>FeatureDetails</code>.
   * @alias module:model/FeatureDetails
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>FeatureDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FeatureDetails} obj Optional instance to populate.
   * @return {module:model/FeatureDetails} The populated <code>FeatureDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('feature')) {
        obj['feature'] = ApiClient.convertToType(data['feature'], 'String');
      }
      if (data.hasOwnProperty('endpoint')) {
        obj['endpoint'] = ApiClient.convertToType(data['endpoint'], 'String');
      }
      if (data.hasOwnProperty('documentationUrl')) {
        obj['documentationUrl'] = ApiClient.convertToType(data['documentationUrl'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/FeatureDetails.FeatureEnum} feature
   */
  exports.prototype['feature'] = undefined;
  /**
   * @member {String} endpoint
   */
  exports.prototype['endpoint'] = undefined;
  /**
   * @member {String} documentationUrl
   */
  exports.prototype['documentationUrl'] = undefined;


  /**
   * Allowed values for the <code>feature</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FeatureEnum = {
    /**
     * value: "INITIATE_ACCOUNT_REQUEST"
     * @const
     */
    "INITIATE_ACCOUNT_REQUEST": "INITIATE_ACCOUNT_REQUEST",
    /**
     * value: "ACCOUNT_REQUEST_DETAILS"
     * @const
     */
    "ACCOUNT_REQUEST_DETAILS": "ACCOUNT_REQUEST_DETAILS",
    /**
     * value: "ACCOUNTS"
     * @const
     */
    "ACCOUNTS": "ACCOUNTS",
    /**
     * value: "ACCOUNT"
     * @const
     */
    "ACCOUNT": "ACCOUNT",
    /**
     * value: "ACCOUNT_TRANSACTIONS"
     * @const
     */
    "ACCOUNT_TRANSACTIONS": "ACCOUNT_TRANSACTIONS",
    /**
     * value: "ACCOUNT_TRANSACTIONS_WITH_MERCHANT"
     * @const
     */
    "ACCOUNT_TRANSACTIONS_WITH_MERCHANT": "ACCOUNT_TRANSACTIONS_WITH_MERCHANT",
    /**
     * value: "IDENTITY"
     * @const
     */
    "IDENTITY": "IDENTITY",
    /**
     * value: "INITIATE_SINGLE_PAYMENT_SORTCODE"
     * @const
     */
    "INITIATE_SINGLE_PAYMENT_SORTCODE": "INITIATE_SINGLE_PAYMENT_SORTCODE",
    /**
     * value: "EXISTING_PAYMENT_INITIATION_DETAILS"
     * @const
     */
    "EXISTING_PAYMENT_INITIATION_DETAILS": "EXISTING_PAYMENT_INITIATION_DETAILS",
    /**
     * value: "CREATE_SINGLE_PAYMENT_SORTCODE"
     * @const
     */
    "CREATE_SINGLE_PAYMENT_SORTCODE": "CREATE_SINGLE_PAYMENT_SORTCODE",
    /**
     * value: "EXISTING_PAYMENTS_DETAILS"
     * @const
     */
    "EXISTING_PAYMENTS_DETAILS": "EXISTING_PAYMENTS_DETAILS",
    /**
     * value: "TRANSFER"
     * @const
     */
    "TRANSFER": "TRANSFER",
    /**
     * value: "OPEN_DATA_PERSONAL_CURRENT_ACCOUNTS"
     * @const
     */
    "OPEN_DATA_PERSONAL_CURRENT_ACCOUNTS": "OPEN_DATA_PERSONAL_CURRENT_ACCOUNTS",
    /**
     * value: "OPEN_DATA_ATMS"
     * @const
     */
    "OPEN_DATA_ATMS": "OPEN_DATA_ATMS"  };


  return exports;
}));

