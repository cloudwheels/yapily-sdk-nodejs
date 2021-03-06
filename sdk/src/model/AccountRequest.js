/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.165
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.2.1
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
   * @version 0.0.165
   */

  /**
   * Constructs a new <code>AccountRequest</code>.
   * @alias module:model/AccountRequest
   * @class
   */
  var exports = function() {
    var _this = this;

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
      if (data.hasOwnProperty('featureScope')) {
        obj['featureScope'] = ApiClient.convertToType(data['featureScope'], ['String']);
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
  /**
   * @member {Array.<module:model/AccountRequest.FeatureScopeEnum>} featureScope
   */
  exports.prototype['featureScope'] = undefined;


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
     * value: "ACCOUNT_STATEMENTS"
     * @const
     */
    "ACCOUNT_STATEMENTS": "ACCOUNT_STATEMENTS",
    /**
     * value: "ACCOUNT_STATEMENT"
     * @const
     */
    "ACCOUNT_STATEMENT": "ACCOUNT_STATEMENT",
    /**
     * value: "ACCOUNT_STATEMENT_FILE"
     * @const
     */
    "ACCOUNT_STATEMENT_FILE": "ACCOUNT_STATEMENT_FILE",
    /**
     * value: "ACCOUNT_SCHEDULED_PAYMENTS"
     * @const
     */
    "ACCOUNT_SCHEDULED_PAYMENTS": "ACCOUNT_SCHEDULED_PAYMENTS",
    /**
     * value: "ACCOUNT_DIRECT_DEBITS"
     * @const
     */
    "ACCOUNT_DIRECT_DEBITS": "ACCOUNT_DIRECT_DEBITS",
    /**
     * value: "ACCOUNT_PERIODIC_PAYMENTS"
     * @const
     */
    "ACCOUNT_PERIODIC_PAYMENTS": "ACCOUNT_PERIODIC_PAYMENTS",
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
     * value: "INITIATE_DOMESTIC_SINGLE_PAYMENT"
     * @const
     */
    "INITIATE_DOMESTIC_SINGLE_PAYMENT": "INITIATE_DOMESTIC_SINGLE_PAYMENT",
    /**
     * value: "CREATE_DOMESTIC_SINGLE_PAYMENT"
     * @const
     */
    "CREATE_DOMESTIC_SINGLE_PAYMENT": "CREATE_DOMESTIC_SINGLE_PAYMENT",
    /**
     * value: "INITIATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT"
     * @const
     */
    "INITIATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT": "INITIATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT",
    /**
     * value: "CREATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT"
     * @const
     */
    "CREATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT": "CREATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT",
    /**
     * value: "INITIATE_DOMESTIC_SCHEDULED_PAYMENT"
     * @const
     */
    "INITIATE_DOMESTIC_SCHEDULED_PAYMENT": "INITIATE_DOMESTIC_SCHEDULED_PAYMENT",
    /**
     * value: "CREATE_DOMESTIC_SCHEDULED_PAYMENT"
     * @const
     */
    "CREATE_DOMESTIC_SCHEDULED_PAYMENT": "CREATE_DOMESTIC_SCHEDULED_PAYMENT",
    /**
     * value: "INITIATE_DOMESTIC_PERIODIC_PAYMENT"
     * @const
     */
    "INITIATE_DOMESTIC_PERIODIC_PAYMENT": "INITIATE_DOMESTIC_PERIODIC_PAYMENT",
    /**
     * value: "CREATE_DOMESTIC_PERIODIC_PAYMENT"
     * @const
     */
    "CREATE_DOMESTIC_PERIODIC_PAYMENT": "CREATE_DOMESTIC_PERIODIC_PAYMENT",
    /**
     * value: "PERIODIC_PAYMENT_FREQUENCY_EXTENDED"
     * @const
     */
    "PERIODIC_PAYMENT_FREQUENCY_EXTENDED": "PERIODIC_PAYMENT_FREQUENCY_EXTENDED",
    /**
     * value: "INITIATE_INTERNATIONAL_VARIABLE_RECURRING_PAYMENT"
     * @const
     */
    "INITIATE_INTERNATIONAL_VARIABLE_RECURRING_PAYMENT": "INITIATE_INTERNATIONAL_VARIABLE_RECURRING_PAYMENT",
    /**
     * value: "CREATE_INTERNATIONAL_VARIABLE_RECURRING_PAYMENT"
     * @const
     */
    "CREATE_INTERNATIONAL_VARIABLE_RECURRING_PAYMENT": "CREATE_INTERNATIONAL_VARIABLE_RECURRING_PAYMENT",
    /**
     * value: "INITIATE_INTERNATIONAL_SCHEDULED_PAYMENT"
     * @const
     */
    "INITIATE_INTERNATIONAL_SCHEDULED_PAYMENT": "INITIATE_INTERNATIONAL_SCHEDULED_PAYMENT",
    /**
     * value: "CREATE_INTERNATIONAL_SCHEDULED_PAYMENT"
     * @const
     */
    "CREATE_INTERNATIONAL_SCHEDULED_PAYMENT": "CREATE_INTERNATIONAL_SCHEDULED_PAYMENT",
    /**
     * value: "INITIATE_INTERNATIONAL_PERIODIC_PAYMENT_ORDER"
     * @const
     */
    "INITIATE_INTERNATIONAL_PERIODIC_PAYMENT_ORDER": "INITIATE_INTERNATIONAL_PERIODIC_PAYMENT_ORDER",
    /**
     * value: "CREATE_INTERNATIONAL_PERIODIC_PAYMENT_ORDER"
     * @const
     */
    "CREATE_INTERNATIONAL_PERIODIC_PAYMENT_ORDER": "CREATE_INTERNATIONAL_PERIODIC_PAYMENT_ORDER",
    /**
     * value: "INITIATE_INTERNATIONAL_SINGLE_PAYMENT"
     * @const
     */
    "INITIATE_INTERNATIONAL_SINGLE_PAYMENT": "INITIATE_INTERNATIONAL_SINGLE_PAYMENT",
    /**
     * value: "CREATE_INTERNATIONAL_SINGLE_PAYMENT"
     * @const
     */
    "CREATE_INTERNATIONAL_SINGLE_PAYMENT": "CREATE_INTERNATIONAL_SINGLE_PAYMENT",
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


