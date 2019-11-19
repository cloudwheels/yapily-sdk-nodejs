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
 * The ResponseMeta model module.
 * @module model/ResponseMeta
 * @version 0.0.161
 */
class ResponseMeta {
    /**
     * Constructs a new <code>ResponseMeta</code>.
     * @alias module:model/ResponseMeta
     */
    constructor() { 
        
        ResponseMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResponseMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseMeta} obj Optional instance to populate.
     * @return {module:model/ResponseMeta} The populated <code>ResponseMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResponseMeta();

            if (data.hasOwnProperty('tracingId')) {
                obj['tracingId'] = ApiClient.convertToType(data['tracingId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} tracingId
 */
ResponseMeta.prototype['tracingId'] = undefined;






export default ResponseMeta;

