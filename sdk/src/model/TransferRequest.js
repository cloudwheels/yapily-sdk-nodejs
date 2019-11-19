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
 * The TransferRequest model module.
 * @module model/TransferRequest
 * @version 0.0.161
 */
class TransferRequest {
    /**
     * Constructs a new <code>TransferRequest</code>.
     * @alias module:model/TransferRequest
     */
    constructor() { 
        
        TransferRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransferRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransferRequest} obj Optional instance to populate.
     * @return {module:model/TransferRequest} The populated <code>TransferRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransferRequest();

            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('reference')) {
                obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
            }
            if (data.hasOwnProperty('transferReferenceId')) {
                obj['transferReferenceId'] = ApiClient.convertToType(data['transferReferenceId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} accountId
 */
TransferRequest.prototype['accountId'] = undefined;

/**
 * @member {Number} amount
 */
TransferRequest.prototype['amount'] = undefined;

/**
 * @member {String} currency
 */
TransferRequest.prototype['currency'] = undefined;

/**
 * @member {String} reference
 */
TransferRequest.prototype['reference'] = undefined;

/**
 * @member {String} transferReferenceId
 */
TransferRequest.prototype['transferReferenceId'] = undefined;






export default TransferRequest;

