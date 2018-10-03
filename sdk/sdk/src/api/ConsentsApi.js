/**
 * Yapily API
 * To access endpoints that require authentication, use your Application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.35
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
    define(['ApiClient', 'model/ApiResponseOfConsent', 'model/Consent', 'model/CreateConsentAccessToken'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponseOfConsent'), require('../model/Consent'), require('../model/CreateConsentAccessToken'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.ConsentsApi = factory(root.YapilyApi.ApiClient, root.YapilyApi.ApiResponseOfConsent, root.YapilyApi.Consent, root.YapilyApi.CreateConsentAccessToken);
  }
}(this, function(ApiClient, ApiResponseOfConsent, Consent, CreateConsentAccessToken) {
  'use strict';

  /**
   * Consents service.
   * @module api/ConsentsApi
   * @version 0.0.35
   */

  /**
   * Constructs a new ConsentsApi. 
   * @alias module:api/ConsentsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addConsentUsingPOST operation.
     * @callback module:api/ConsentsApi~addConsentUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Consent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post consent
     * @param {String} userUuid userUuid
     * @param {module:model/CreateConsentAccessToken} createConsentAccessToken createConsentAccessToken
     * @param {module:api/ConsentsApi~addConsentUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Consent}
     */
    this.addConsentUsingPOST = function(userUuid, createConsentAccessToken, callback) {
      var postBody = createConsentAccessToken;

      // verify the required parameter 'userUuid' is set
      if (userUuid === undefined || userUuid === null) {
        throw new Error("Missing the required parameter 'userUuid' when calling addConsentUsingPOST");
      }

      // verify the required parameter 'createConsentAccessToken' is set
      if (createConsentAccessToken === undefined || createConsentAccessToken === null) {
        throw new Error("Missing the required parameter 'createConsentAccessToken' when calling addConsentUsingPOST");
      }


      var pathParams = {
        'userUuid': userUuid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = Consent;

      return this.apiClient.callApi(
        '/users/{userUuid}/consents', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUsingDELETE operation.
     * @callback module:api/ConsentsApi~deleteUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete consent
     * @param {String} consentId consentId
     * @param {module:api/ConsentsApi~deleteUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.deleteUsingDELETE = function(consentId, callback) {
      var postBody = null;

      // verify the required parameter 'consentId' is set
      if (consentId === undefined || consentId === null) {
        throw new Error("Missing the required parameter 'consentId' when calling deleteUsingDELETE");
      }


      var pathParams = {
        'consentId': consentId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/consents/{consentId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getConsentByIdUsingGET operation.
     * @callback module:api/ConsentsApi~getConsentByIdUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfConsent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get consent
     * @param {String} consentId consentId
     * @param {module:api/ConsentsApi~getConsentByIdUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfConsent}
     */
    this.getConsentByIdUsingGET = function(consentId, callback) {
      var postBody = null;

      // verify the required parameter 'consentId' is set
      if (consentId === undefined || consentId === null) {
        throw new Error("Missing the required parameter 'consentId' when calling getConsentByIdUsingGET");
      }


      var pathParams = {
        'consentId': consentId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApiResponseOfConsent;

      return this.apiClient.callApi(
        '/consents/{consentId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserConsentsUsingGET operation.
     * @callback module:api/ConsentsApi~getUserConsentsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Consent>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user consents
     * @param {String} userUuid userUuid
     * @param {Object} opts Optional parameters
     * @param {String} opts.institutionId institutionId
     * @param {module:api/ConsentsApi~getUserConsentsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Consent>}
     */
    this.getUserConsentsUsingGET = function(userUuid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userUuid' is set
      if (userUuid === undefined || userUuid === null) {
        throw new Error("Missing the required parameter 'userUuid' when calling getUserConsentsUsingGET");
      }


      var pathParams = {
        'userUuid': userUuid
      };
      var queryParams = {
        'institutionId': opts['institutionId'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = [Consent];

      return this.apiClient.callApi(
        '/users/{userUuid}/consents', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));