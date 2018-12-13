/**
 * Yapily API
 * To access endpoints that require authentication, use your Application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.50
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
    define(['ApiClient', 'model/ApiResponseOfAuthorisationRequestResponse', 'model/ApiResponseOfPaymentResponse', 'model/SortCodePaymentAuthRequest', 'model/SortCodePaymentRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponseOfAuthorisationRequestResponse'), require('../model/ApiResponseOfPaymentResponse'), require('../model/SortCodePaymentAuthRequest'), require('../model/SortCodePaymentRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.PaymentsApi = factory(root.YapilyApi.ApiClient, root.YapilyApi.ApiResponseOfAuthorisationRequestResponse, root.YapilyApi.ApiResponseOfPaymentResponse, root.YapilyApi.SortCodePaymentAuthRequest, root.YapilyApi.SortCodePaymentRequest);
  }
}(this, function(ApiClient, ApiResponseOfAuthorisationRequestResponse, ApiResponseOfPaymentResponse, SortCodePaymentAuthRequest, SortCodePaymentRequest) {
  'use strict';

  /**
   * Payments service.
   * @module api/PaymentsApi
   * @version 0.0.50
   */

  /**
   * Constructs a new PaymentsApi. 
   * @alias module:api/PaymentsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createPaymentInitiationUsingPOST operation.
     * @callback module:api/PaymentsApi~createPaymentInitiationUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfAuthorisationRequestResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Initiate a new single payment for user to authorise
     * @param {Object} opts Optional parameters
     * @param {module:model/SortCodePaymentAuthRequest} opts.paymentAuthRequest paymentAuthRequest
     * @param {module:api/PaymentsApi~createPaymentInitiationUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfAuthorisationRequestResponse}
     */
    this.createPaymentInitiationUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['paymentAuthRequest'];


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
      var contentTypes = ['application/json;charset=UTF-8'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApiResponseOfAuthorisationRequestResponse;

      return this.apiClient.callApi(
        '/payment-sortcode-auth-requests', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createPaymentUsingPOST operation.
     * @callback module:api/PaymentsApi~createPaymentUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfPaymentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new single payment
     * @param {String} consent Consent Token
     * @param {Object} opts Optional parameters
     * @param {module:model/SortCodePaymentRequest} opts.paymentRequest paymentRequest
     * @param {module:api/PaymentsApi~createPaymentUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfPaymentResponse}
     */
    this.createPaymentUsingPOST = function(consent, opts, callback) {
      opts = opts || {};
      var postBody = opts['paymentRequest'];

      // verify the required parameter 'consent' is set
      if (consent === undefined || consent === null) {
        throw new Error("Missing the required parameter 'consent' when calling createPaymentUsingPOST");
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
      var contentTypes = ['application/json;charset=UTF-8'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApiResponseOfPaymentResponse;

      return this.apiClient.callApi(
        '/payment-sortcode', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPaymentStatusUsingGET operation.
     * @callback module:api/PaymentsApi~getPaymentStatusUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfPaymentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get status of a payment
     * @param {String} paymentId paymentId
     * @param {String} consent Consent Token
     * @param {module:api/PaymentsApi~getPaymentStatusUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfPaymentResponse}
     */
    this.getPaymentStatusUsingGET = function(paymentId, consent, callback) {
      var postBody = null;

      // verify the required parameter 'paymentId' is set
      if (paymentId === undefined || paymentId === null) {
        throw new Error("Missing the required parameter 'paymentId' when calling getPaymentStatusUsingGET");
      }

      // verify the required parameter 'consent' is set
      if (consent === undefined || consent === null) {
        throw new Error("Missing the required parameter 'consent' when calling getPaymentStatusUsingGET");
      }


      var pathParams = {
        'paymentId': paymentId
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
      var returnType = ApiResponseOfPaymentResponse;

      return this.apiClient.callApi(
        '/payments/{paymentId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
