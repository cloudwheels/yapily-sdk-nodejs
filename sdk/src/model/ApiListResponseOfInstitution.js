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
import Institution from './Institution';
import ResponseListMeta from './ResponseListMeta';

/**
 * The ApiListResponseOfInstitution model module.
 * @module model/ApiListResponseOfInstitution
 * @version 0.0.161
 */
class ApiListResponseOfInstitution {
    /**
     * Constructs a new <code>ApiListResponseOfInstitution</code>.
     * @alias module:model/ApiListResponseOfInstitution
     */
    constructor() { 
        
        ApiListResponseOfInstitution.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiListResponseOfInstitution</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiListResponseOfInstitution} obj Optional instance to populate.
     * @return {module:model/ApiListResponseOfInstitution} The populated <code>ApiListResponseOfInstitution</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiListResponseOfInstitution();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ResponseListMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Institution]);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], {'String': 'String'});
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ResponseListMeta} meta
 */
ApiListResponseOfInstitution.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/Institution>} data
 */
ApiListResponseOfInstitution.prototype['data'] = undefined;

/**
 * @member {Object.<String, String>} links
 */
ApiListResponseOfInstitution.prototype['links'] = undefined;






export default ApiListResponseOfInstitution;

