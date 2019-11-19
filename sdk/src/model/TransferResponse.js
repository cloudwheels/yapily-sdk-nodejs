/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.160
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The TransferResponse model module.
 * @module model/TransferResponse
 * @version 0.0.161
 */
class TransferResponse {
    /**
     * Constructs a new <code>TransferResponse</code>.
     * @alias module:model/TransferResponse
     */
    constructor() { 
        
        TransferResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransferResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransferResponse} obj Optional instance to populate.
     * @return {module:model/TransferResponse} The populated <code>TransferResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransferResponse();

            if (data.hasOwnProperty('fromAccountId')) {
                obj['fromAccountId'] = ApiClient.convertToType(data['fromAccountId'], 'String');
            }
            if (data.hasOwnProperty('toAccountId')) {
                obj['toAccountId'] = ApiClient.convertToType(data['toAccountId'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('reference')) {
                obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} fromAccountId
 */
TransferResponse.prototype['fromAccountId'] = undefined;

/**
 * @member {String} toAccountId
 */
TransferResponse.prototype['toAccountId'] = undefined;

/**
 * @member {module:model/TransferResponse.StatusEnum} status
 */
TransferResponse.prototype['status'] = undefined;

/**
 * @member {Date} createdAt
 */
TransferResponse.prototype['createdAt'] = undefined;

/**
 * @member {String} reference
 */
TransferResponse.prototype['reference'] = undefined;

/**
 * @member {Number} balance
 */
TransferResponse.prototype['balance'] = undefined;

/**
 * @member {String} currency
 */
TransferResponse.prototype['currency'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
TransferResponse['StatusEnum'] = {

    /**
     * value: "PENDING"
     * @const
     */
    "PENDING": "PENDING",

    /**
     * value: "FAILED"
     * @const
     */
    "FAILED": "FAILED",

    /**
     * value: "DECLINED"
     * @const
     */
    "DECLINED": "DECLINED",

    /**
     * value: "COMPLETED"
     * @const
     */
    "COMPLETED": "COMPLETED",

    /**
     * value: "UNKNOWN"
     * @const
     */
    "UNKNOWN": "UNKNOWN"
};



export default TransferResponse;

