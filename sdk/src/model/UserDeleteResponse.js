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
import ConsentDeleteResponse from './ConsentDeleteResponse';

/**
 * The UserDeleteResponse model module.
 * @module model/UserDeleteResponse
 * @version 0.0.161
 */
class UserDeleteResponse {
    /**
     * Constructs a new <code>UserDeleteResponse</code>.
     * @alias module:model/UserDeleteResponse
     */
    constructor() { 
        
        UserDeleteResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserDeleteResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserDeleteResponse} obj Optional instance to populate.
     * @return {module:model/UserDeleteResponse} The populated <code>UserDeleteResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserDeleteResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('deleteStatus')) {
                obj['deleteStatus'] = ApiClient.convertToType(data['deleteStatus'], 'String');
            }
            if (data.hasOwnProperty('creationDate')) {
                obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
            }
            if (data.hasOwnProperty('userConsents')) {
                obj['userConsents'] = ApiClient.convertToType(data['userConsents'], [ConsentDeleteResponse]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
UserDeleteResponse.prototype['id'] = undefined;

/**
 * @member {module:model/UserDeleteResponse.DeleteStatusEnum} deleteStatus
 */
UserDeleteResponse.prototype['deleteStatus'] = undefined;

/**
 * @member {Date} creationDate
 */
UserDeleteResponse.prototype['creationDate'] = undefined;

/**
 * @member {Array.<module:model/ConsentDeleteResponse>} userConsents
 */
UserDeleteResponse.prototype['userConsents'] = undefined;





/**
 * Allowed values for the <code>deleteStatus</code> property.
 * @enum {String}
 * @readonly
 */
UserDeleteResponse['DeleteStatusEnum'] = {

    /**
     * value: "SUCCESS"
     * @const
     */
    "SUCCESS": "SUCCESS",

    /**
     * value: "FAILED"
     * @const
     */
    "FAILED": "FAILED"
};



export default UserDeleteResponse;

