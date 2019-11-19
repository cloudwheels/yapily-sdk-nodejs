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
import AccountStatement from './AccountStatement';
import ResponseListMeta from './ResponseListMeta';

/**
 * The ApiListResponseOfAccountStatement model module.
 * @module model/ApiListResponseOfAccountStatement
 * @version 0.0.161
 */
class ApiListResponseOfAccountStatement {
    /**
     * Constructs a new <code>ApiListResponseOfAccountStatement</code>.
     * @alias module:model/ApiListResponseOfAccountStatement
     */
    constructor() { 
        
        ApiListResponseOfAccountStatement.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiListResponseOfAccountStatement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiListResponseOfAccountStatement} obj Optional instance to populate.
     * @return {module:model/ApiListResponseOfAccountStatement} The populated <code>ApiListResponseOfAccountStatement</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiListResponseOfAccountStatement();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ResponseListMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [AccountStatement]);
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
ApiListResponseOfAccountStatement.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/AccountStatement>} data
 */
ApiListResponseOfAccountStatement.prototype['data'] = undefined;

/**
 * @member {Object.<String, String>} links
 */
ApiListResponseOfAccountStatement.prototype['links'] = undefined;






export default ApiListResponseOfAccountStatement;

