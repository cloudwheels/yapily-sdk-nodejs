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
    define(['ApiClient', 'model/AccountAuthorisationRequest', 'model/ApiListResponseOfAccount', 'model/ApiResponseOfAccount', 'model/ApiResponseOfAuthorisationRequestResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AccountAuthorisationRequest'), require('../model/ApiListResponseOfAccount'), require('../model/ApiResponseOfAccount'), require('../model/ApiResponseOfAuthorisationRequestResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.AccountsApi = factory(root.YapilyApi.ApiClient, root.YapilyApi.AccountAuthorisationRequest, root.YapilyApi.ApiListResponseOfAccount, root.YapilyApi.ApiResponseOfAccount, root.YapilyApi.ApiResponseOfAuthorisationRequestResponse);
  }
}(this, function(ApiClient, AccountAuthorisationRequest, ApiListResponseOfAccount, ApiResponseOfAccount, ApiResponseOfAuthorisationRequestResponse) {
  'use strict';

  /**
   * Accounts service.
   * @module api/AccountsApi
   * @version 0.0.35
   */

  /**
   * Constructs a new AccountsApi. 
   * @alias module:api/AccountsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAccountUsingGET operation.
     * @callback module:api/AccountsApi~getAccountUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfAccount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get account
     * @param {String} consent Consent Token
     * @param {String} accountId accountId
     * @param {module:api/AccountsApi~getAccountUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfAccount}
     */
    this.getAccountUsingGET = function(consent, accountId, callback) {
      var postBody = null;

      // verify the required parameter 'consent' is set
      if (consent === undefined || consent === null) {
        throw new Error("Missing the required parameter 'consent' when calling getAccountUsingGET");
      }

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getAccountUsingGET");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'consent': consent
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApiResponseOfAccount;

      return this.apiClient.callApi(
        '/accounts/{accountId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAccountsUsingGET operation.
     * @callback module:api/AccountsApi~getAccountsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiListResponseOfAccount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get accounts
     * @param {String} consent Consent Token
     * @param {module:api/AccountsApi~getAccountsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiListResponseOfAccount}
     */
    this.getAccountsUsingGET = function(consent, callback) {
      var postBody = null;

      // verify the required parameter 'consent' is set
      if (consent === undefined || consent === null) {
        throw new Error("Missing the required parameter 'consent' when calling getAccountsUsingGET");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'consent': consent
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApiListResponseOfAccount;

      return this.apiClient.callApi(
        '/accounts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the initiateAccountRequestUsingPOST operation.
     * @callback module:api/AccountsApi~initiateAccountRequestUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfAuthorisationRequestResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Initiate a new account request for user to authorize
     * @param {module:model/AccountAuthorisationRequest} accountAuthRequest accountAuthRequest
     * @param {module:api/AccountsApi~initiateAccountRequestUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfAuthorisationRequestResponse}
     */
    this.initiateAccountRequestUsingPOST = function(accountAuthRequest, callback) {
      var postBody = accountAuthRequest;

      // verify the required parameter 'accountAuthRequest' is set
      if (accountAuthRequest === undefined || accountAuthRequest === null) {
        throw new Error("Missing the required parameter 'accountAuthRequest' when calling initiateAccountRequestUsingPOST");
      }


      var pathParams = {
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
      var returnType = ApiResponseOfAuthorisationRequestResponse;

      return this.apiClient.callApi(
        '/account-auth-requests', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));