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
import PersonalCurrentAccountBrand from './PersonalCurrentAccountBrand';

/**
 * The PersonalCurrentAccountData model module.
 * @module model/PersonalCurrentAccountData
 * @version 0.0.161
 */
class PersonalCurrentAccountData {
    /**
     * Constructs a new <code>PersonalCurrentAccountData</code>.
     * @alias module:model/PersonalCurrentAccountData
     */
    constructor() { 
        
        PersonalCurrentAccountData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PersonalCurrentAccountData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PersonalCurrentAccountData} obj Optional instance to populate.
     * @return {module:model/PersonalCurrentAccountData} The populated <code>PersonalCurrentAccountData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PersonalCurrentAccountData();

            if (data.hasOwnProperty('Brand')) {
                obj['Brand'] = ApiClient.convertToType(data['Brand'], [PersonalCurrentAccountBrand]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/PersonalCurrentAccountBrand>} Brand
 */
PersonalCurrentAccountData.prototype['Brand'] = undefined;






export default PersonalCurrentAccountData;

