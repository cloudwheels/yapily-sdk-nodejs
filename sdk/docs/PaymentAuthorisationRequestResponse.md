# YapilyApi.PaymentAuthorisationRequestResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**userUuid** | **String** |  | [optional] 
**applicationUserId** | **String** |  | [optional] 
**referenceId** | **String** |  | [optional] 
**institutionId** | **String** |  | [optional] 
**status** | **String** |  | [optional] 
**createdAt** | **Date** |  | [optional] 
**transactionFrom** | **Date** |  | [optional] 
**transactionTo** | **Date** |  | [optional] 
**expiresAt** | **Date** |  | [optional] 
**timeToExpireInMillis** | **Number** | Deprecated. Use &#x60;timeToExpire&#x60; instead. | [optional] 
**timeToExpire** | **String** | ISO 8601 duration | [optional] 
**featureScope** | **[String]** |  | [optional] 
**startsAt** | **Date** |  | [optional] 
**totalMaxAmount** | **Number** |  | [optional] 
**maxAmountPerRequest** | **Number** |  | [optional] 
**allowOverdraft** | **Boolean** |  | [optional] 
**consentToken** | **String** |  | [optional] 
**authorisationUrl** | **String** |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `AWAITING_AUTHORIZATION` (value: `"AWAITING_AUTHORIZATION"`)

* `AWAITING_FURTHER_AUTHORIZATION` (value: `"AWAITING_FURTHER_AUTHORIZATION"`)

* `AWAITING_RE_AUTHORIZATION` (value: `"AWAITING_RE_AUTHORIZATION"`)

* `AUTHORIZED` (value: `"AUTHORIZED"`)

* `CONSUMED` (value: `"CONSUMED"`)

* `REJECTED` (value: `"REJECTED"`)

* `REVOKED` (value: `"REVOKED"`)

* `FAILED` (value: `"FAILED"`)

* `EXPIRED` (value: `"EXPIRED"`)

* `UNKNOWN` (value: `"UNKNOWN"`)

* `INVALID` (value: `"INVALID"`)




<a name="[FeatureScopeEnum]"></a>
## Enum: [FeatureScopeEnum]


* `INITIATE_ACCOUNT_REQUEST` (value: `"INITIATE_ACCOUNT_REQUEST"`)

* `ACCOUNT_REQUEST_DETAILS` (value: `"ACCOUNT_REQUEST_DETAILS"`)

* `ACCOUNTS` (value: `"ACCOUNTS"`)

* `ACCOUNT` (value: `"ACCOUNT"`)

* `ACCOUNT_TRANSACTIONS` (value: `"ACCOUNT_TRANSACTIONS"`)

* `ACCOUNT_STATEMENTS` (value: `"ACCOUNT_STATEMENTS"`)

* `ACCOUNT_STATEMENT` (value: `"ACCOUNT_STATEMENT"`)

* `ACCOUNT_STATEMENT_FILE` (value: `"ACCOUNT_STATEMENT_FILE"`)

* `ACCOUNT_SCHEDULED_PAYMENTS` (value: `"ACCOUNT_SCHEDULED_PAYMENTS"`)

* `ACCOUNT_DIRECT_DEBITS` (value: `"ACCOUNT_DIRECT_DEBITS"`)

* `ACCOUNT_PERIODIC_PAYMENTS` (value: `"ACCOUNT_PERIODIC_PAYMENTS"`)

* `ACCOUNT_TRANSACTIONS_WITH_MERCHANT` (value: `"ACCOUNT_TRANSACTIONS_WITH_MERCHANT"`)

* `IDENTITY` (value: `"IDENTITY"`)

* `INITIATE_SINGLE_PAYMENT_SORTCODE` (value: `"INITIATE_SINGLE_PAYMENT_SORTCODE"`)

* `EXISTING_PAYMENT_INITIATION_DETAILS` (value: `"EXISTING_PAYMENT_INITIATION_DETAILS"`)

* `CREATE_SINGLE_PAYMENT_SORTCODE` (value: `"CREATE_SINGLE_PAYMENT_SORTCODE"`)

* `EXISTING_PAYMENTS_DETAILS` (value: `"EXISTING_PAYMENTS_DETAILS"`)

* `INITIATE_PAYMENT` (value: `"INITIATE_PAYMENT"`)

* `CREATE_PAYMENT` (value: `"CREATE_PAYMENT"`)

* `INITIATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT` (value: `"INITIATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT"`)

* `CREATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT` (value: `"CREATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT"`)

* `INITIATE_DOMESTIC_SCHEDULED_PAYMENT` (value: `"INITIATE_DOMESTIC_SCHEDULED_PAYMENT"`)

* `CREATE_DOMESTIC_SCHEDULED_PAYMENT` (value: `"CREATE_DOMESTIC_SCHEDULED_PAYMENT"`)

* `INITIATE_DOMESTIC_PERIODIC_PAYMENT` (value: `"INITIATE_DOMESTIC_PERIODIC_PAYMENT"`)

* `CREATE_DOMESTIC_PERIODIC_PAYMENT` (value: `"CREATE_DOMESTIC_PERIODIC_PAYMENT"`)

* `PERIODIC_PAYMENT_FREQUENCY_EXTENDED` (value: `"PERIODIC_PAYMENT_FREQUENCY_EXTENDED"`)

* `INITIATE_INTERNATIONAL_VARIABLE_RECURRING_PAYMENT` (value: `"INITIATE_INTERNATIONAL_VARIABLE_RECURRING_PAYMENT"`)

* `CREATE_INTERNATIONAL_VARIABLE_RECURRING_PAYMENT` (value: `"CREATE_INTERNATIONAL_VARIABLE_RECURRING_PAYMENT"`)

* `INITIATE_INTERNATIONAL_SCHEDULED_PAYMENT` (value: `"INITIATE_INTERNATIONAL_SCHEDULED_PAYMENT"`)

* `CREATE_INTERNATIONAL_SCHEDULED_PAYMENT` (value: `"CREATE_INTERNATIONAL_SCHEDULED_PAYMENT"`)

* `INITIATE_INTERNATIONAL_PERIODIC_PAYMENT_ORDER` (value: `"INITIATE_INTERNATIONAL_PERIODIC_PAYMENT_ORDER"`)

* `CREATE_INTERNATIONAL_PERIODIC_PAYMENT_ORDER` (value: `"CREATE_INTERNATIONAL_PERIODIC_PAYMENT_ORDER"`)

* `INITIATE_INTERNATIONAL_PAYMENT` (value: `"INITIATE_INTERNATIONAL_PAYMENT"`)

* `CREATE_INTERNATIONAL_PAYMENT` (value: `"CREATE_INTERNATIONAL_PAYMENT"`)

* `TRANSFER` (value: `"TRANSFER"`)

* `OPEN_DATA_PERSONAL_CURRENT_ACCOUNTS` (value: `"OPEN_DATA_PERSONAL_CURRENT_ACCOUNTS"`)

* `OPEN_DATA_ATMS` (value: `"OPEN_DATA_ATMS"`)



