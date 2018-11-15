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
    define(['ApiClient', 'model/ATMBranch', 'model/ATMLocation', 'model/ATMOpenDataOtherATMServices', 'model/ATMOpenDataOtherAccessibility'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ATMBranch'), require('./ATMLocation'), require('./ATMOpenDataOtherATMServices'), require('./ATMOpenDataOtherAccessibility'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.ATMOpenDataATM = factory(root.YapilyApi.ApiClient, root.YapilyApi.ATMBranch, root.YapilyApi.ATMLocation, root.YapilyApi.ATMOpenDataOtherATMServices, root.YapilyApi.ATMOpenDataOtherAccessibility);
  }
}(this, function(ApiClient, ATMBranch, ATMLocation, ATMOpenDataOtherATMServices, ATMOpenDataOtherAccessibility) {
  'use strict';




  /**
   * The ATMOpenDataATM model module.
   * @module model/ATMOpenDataATM
   * @version 0.0.43
   */

  /**
   * Constructs a new <code>ATMOpenDataATM</code>.
   * ATM information.
   * @alias module:model/ATMOpenDataATM
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>ATMOpenDataATM</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ATMOpenDataATM} obj Optional instance to populate.
   * @return {module:model/ATMOpenDataATM} The populated <code>ATMOpenDataATM</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Access24HoursIndicator')) {
        obj['Access24HoursIndicator'] = ApiClient.convertToType(data['Access24HoursIndicator'], 'Boolean');
      }
      if (data.hasOwnProperty('Accessibility')) {
        obj['Accessibility'] = ApiClient.convertToType(data['Accessibility'], ['String']);
      }
      if (data.hasOwnProperty('Branch')) {
        obj['Branch'] = ATMBranch.constructFromObject(data['Branch']);
      }
      if (data.hasOwnProperty('Identification')) {
        obj['Identification'] = ApiClient.convertToType(data['Identification'], 'String');
      }
      if (data.hasOwnProperty('Location')) {
        obj['Location'] = ATMLocation.constructFromObject(data['Location']);
      }
      if (data.hasOwnProperty('MinimumPossibleAmount')) {
        obj['MinimumPossibleAmount'] = ApiClient.convertToType(data['MinimumPossibleAmount'], 'String');
      }
      if (data.hasOwnProperty('Note')) {
        obj['Note'] = ApiClient.convertToType(data['Note'], 'String');
      }
      if (data.hasOwnProperty('OtherATMServices')) {
        obj['OtherATMServices'] = ApiClient.convertToType(data['OtherATMServices'], [ATMOpenDataOtherATMServices]);
      }
      if (data.hasOwnProperty('OtherAccessibility')) {
        obj['OtherAccessibility'] = ApiClient.convertToType(data['OtherAccessibility'], [ATMOpenDataOtherAccessibility]);
      }
      if (data.hasOwnProperty('Services')) {
        obj['Services'] = ApiClient.convertToType(data['Services'], ['String']);
      }
      if (data.hasOwnProperty('SupportedCurrencies')) {
        obj['SupportedCurrencies'] = ApiClient.convertToType(data['SupportedCurrencies'], ['String']);
      }
      if (data.hasOwnProperty('SupportedLanguages')) {
        obj['SupportedLanguages'] = ApiClient.convertToType(data['SupportedLanguages'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} Access24HoursIndicator
   */
  exports.prototype['Access24HoursIndicator'] = undefined;
  /**
   * @member {Array.<module:model/ATMOpenDataATM.AccessibilityEnum>} Accessibility
   */
  exports.prototype['Accessibility'] = undefined;
  /**
   * @member {module:model/ATMBranch} Branch
   */
  exports.prototype['Branch'] = undefined;
  /**
   * @member {String} Identification
   */
  exports.prototype['Identification'] = undefined;
  /**
   * @member {module:model/ATMLocation} Location
   */
  exports.prototype['Location'] = undefined;
  /**
   * @member {String} MinimumPossibleAmount
   */
  exports.prototype['MinimumPossibleAmount'] = undefined;
  /**
   * @member {String} Note
   */
  exports.prototype['Note'] = undefined;
  /**
   * @member {Array.<module:model/ATMOpenDataOtherATMServices>} OtherATMServices
   */
  exports.prototype['OtherATMServices'] = undefined;
  /**
   * @member {Array.<module:model/ATMOpenDataOtherAccessibility>} OtherAccessibility
   */
  exports.prototype['OtherAccessibility'] = undefined;
  /**
   * @member {Array.<module:model/ATMOpenDataATM.ServicesEnum>} Services
   */
  exports.prototype['Services'] = undefined;
  /**
   * @member {Array.<String>} SupportedCurrencies
   */
  exports.prototype['SupportedCurrencies'] = undefined;
  /**
   * @member {Array.<String>} SupportedLanguages
   */
  exports.prototype['SupportedLanguages'] = undefined;


  /**
   * Allowed values for the <code>accessibility</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AccessibilityEnum = {
    /**
     * value: "AudioCashMachine"
     * @const
     */
    "AudioCashMachine": "AudioCashMachine",
    /**
     * value: "AutomaticDoors"
     * @const
     */
    "AutomaticDoors": "AutomaticDoors",
    /**
     * value: "ExternalRamp"
     * @const
     */
    "ExternalRamp": "ExternalRamp",
    /**
     * value: "InductionLoop"
     * @const
     */
    "InductionLoop": "InductionLoop",
    /**
     * value: "InternalRamp"
     * @const
     */
    "InternalRamp": "InternalRamp",
    /**
     * value: "LevelAccess"
     * @const
     */
    "LevelAccess": "LevelAccess",
    /**
     * value: "LowerLevelCounter"
     * @const
     */
    "LowerLevelCounter": "LowerLevelCounter",
    /**
     * value: "Other"
     * @const
     */
    "Other": "Other",
    /**
     * value: "WheelchairAccess"
     * @const
     */
    "WheelchairAccess": "WheelchairAccess"  };

  /**
   * Allowed values for the <code>services</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ServicesEnum = {
    /**
     * value: "Balance"
     * @const
     */
    "Balance": "Balance",
    /**
     * value: "BillPayments"
     * @const
     */
    "BillPayments": "BillPayments",
    /**
     * value: "CashDeposits"
     * @const
     */
    "CashDeposits": "CashDeposits",
    /**
     * value: "CharityDonation"
     * @const
     */
    "CharityDonation": "CharityDonation",
    /**
     * value: "ChequeDeposits"
     * @const
     */
    "ChequeDeposits": "ChequeDeposits",
    /**
     * value: "CashWithdrawal"
     * @const
     */
    "CashWithdrawal": "CashWithdrawal",
    /**
     * value: "EnvelopeDeposit"
     * @const
     */
    "EnvelopeDeposit": "EnvelopeDeposit",
    /**
     * value: "FastCash"
     * @const
     */
    "FastCash": "FastCash",
    /**
     * value: "MobileBankingRegistration"
     * @const
     */
    "MobileBankingRegistration": "MobileBankingRegistration",
    /**
     * value: "MobilePaymentRegistration"
     * @const
     */
    "MobilePaymentRegistration": "MobilePaymentRegistration",
    /**
     * value: "MobilePhoneTopUp"
     * @const
     */
    "MobilePhoneTopUp": "MobilePhoneTopUp",
    /**
     * value: "OrderStatement"
     * @const
     */
    "OrderStatement": "OrderStatement",
    /**
     * value: "Other"
     * @const
     */
    "Other": "Other",
    /**
     * value: "PINActivation"
     * @const
     */
    "PINActivation": "PINActivation",
    /**
     * value: "PINChange"
     * @const
     */
    "PINChange": "PINChange",
    /**
     * value: "PINUnblock"
     * @const
     */
    "PINUnblock": "PINUnblock",
    /**
     * value: "MiniStatement"
     * @const
     */
    "MiniStatement": "MiniStatement"  };


  return exports;
}));

