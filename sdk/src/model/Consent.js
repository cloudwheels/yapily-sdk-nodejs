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
    root.YapilyApi.Consent = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Consent model module.
   * @module model/Consent
   * @version 0.0.46
   */

  /**
   * Constructs a new <code>Consent</code>.
   * @alias module:model/Consent
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>Consent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Consent} obj Optional instance to populate.
   * @return {module:model/Consent} The populated <code>Consent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('userUuid')) {
        obj['userUuid'] = ApiClient.convertToType(data['userUuid'], 'String');
      }
      if (data.hasOwnProperty('institutionId')) {
        obj['institutionId'] = ApiClient.convertToType(data['institutionId'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
      if (data.hasOwnProperty('expiresAt')) {
        obj['expiresAt'] = ApiClient.convertToType(data['expiresAt'], 'Date');
      }
      if (data.hasOwnProperty('timeToExpireInMillis')) {
        obj['timeToExpireInMillis'] = ApiClient.convertToType(data['timeToExpireInMillis'], 'Number');
      }
      if (data.hasOwnProperty('featureScope')) {
        obj['featureScope'] = ApiClient.convertToType(data['featureScope'], ['String']);
      }
      if (data.hasOwnProperty('consentToken')) {
        obj['consentToken'] = ApiClient.convertToType(data['consentToken'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} userUuid
   */
  exports.prototype['userUuid'] = undefined;
  /**
   * @member {String} institutionId
   */
  exports.prototype['institutionId'] = undefined;
  /**
   * @member {module:model/Consent.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;
  /**
   * @member {Date} expiresAt
   */
  exports.prototype['expiresAt'] = undefined;
  /**
   * @member {Number} timeToExpireInMillis
   */
  exports.prototype['timeToExpireInMillis'] = undefined;
  /**
   * @member {Array.<module:model/Consent.FeatureScopeEnum>} featureScope
   */
  exports.prototype['featureScope'] = undefined;
  /**
   * @member {String} consentToken
   */
  exports.prototype['consentToken'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "AWAITING_AUTHORIZATION"
     * @const
     */
    "AWAITING_AUTHORIZATION": "AWAITING_AUTHORIZATION",
    /**
     * value: "AUTHORIZED"
     * @const
     */
    "AUTHORIZED": "AUTHORIZED",
    /**
     * value: "REJECTED"
     * @const
     */
    "REJECTED": "REJECTED",
    /**
     * value: "REVOKED"
     * @const
     */
    "REVOKED": "REVOKED",
    /**
     * value: "FAILED"
     * @const
     */
    "FAILED": "FAILED",
    /**
     * value: "EXPIRED"
     * @const
     */
    "EXPIRED": "EXPIRED",
    /**
     * value: "UNKNOWN"
     * @const
     */
    "UNKNOWN": "UNKNOWN"  };

  /**
   * Allowed values for the <code>featureScope</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FeatureScopeEnum = {
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


