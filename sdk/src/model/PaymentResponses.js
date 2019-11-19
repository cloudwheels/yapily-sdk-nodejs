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
import PaymentResponse from './PaymentResponse';

/**
 * The PaymentResponses model module.
 * @module model/PaymentResponses
 * @version 0.0.161
 */
class PaymentResponses {
    /**
     * Constructs a new <code>PaymentResponses</code>.
     * @alias module:model/PaymentResponses
     */
    constructor() { 
        
        PaymentResponses.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaymentResponses</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentResponses} obj Optional instance to populate.
     * @return {module:model/PaymentResponses} The populated <code>PaymentResponses</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentResponses();

            if (data.hasOwnProperty('payments')) {
                obj['payments'] = ApiClient.convertToType(data['payments'], [PaymentResponse]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/PaymentResponse>} payments
 */
PaymentResponses.prototype['payments'] = undefined;






export default PaymentResponses;

