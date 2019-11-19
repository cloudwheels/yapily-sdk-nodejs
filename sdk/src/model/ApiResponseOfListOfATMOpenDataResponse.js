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
import ATMOpenDataResponse from './ATMOpenDataResponse';
import ResponseMeta from './ResponseMeta';

/**
 * The ApiResponseOfListOfATMOpenDataResponse model module.
 * @module model/ApiResponseOfListOfATMOpenDataResponse
 * @version 0.0.161
 */
class ApiResponseOfListOfATMOpenDataResponse {
    /**
     * Constructs a new <code>ApiResponseOfListOfATMOpenDataResponse</code>.
     * @alias module:model/ApiResponseOfListOfATMOpenDataResponse
     */
    constructor() { 
        
        ApiResponseOfListOfATMOpenDataResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiResponseOfListOfATMOpenDataResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiResponseOfListOfATMOpenDataResponse} obj Optional instance to populate.
     * @return {module:model/ApiResponseOfListOfATMOpenDataResponse} The populated <code>ApiResponseOfListOfATMOpenDataResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiResponseOfListOfATMOpenDataResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ResponseMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ATMOpenDataResponse]);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], {'String': 'String'});
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ResponseMeta} meta
 */
ApiResponseOfListOfATMOpenDataResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/ATMOpenDataResponse>} data
 */
ApiResponseOfListOfATMOpenDataResponse.prototype['data'] = undefined;

/**
 * @member {Object.<String, String>} links
 */
ApiResponseOfListOfATMOpenDataResponse.prototype['links'] = undefined;






export default ApiResponseOfListOfATMOpenDataResponse;

