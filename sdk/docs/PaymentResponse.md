# YapilyApi.PaymentResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**institutionConsentId** | **String** |  | [optional] 
**paymentIdempotencyId** | **String** |  | [optional] 
**paymentLifecycleId** | **String** |  | [optional] 
**status** | **String** |  | [optional] 
**statusDetails** | [**PaymentStatusDetails**](PaymentStatusDetails.md) |  | [optional] 
**payeeDetails** | [**Payee**](Payee.md) |  | [optional] 
**reference** | **String** |  | [optional] 
**amount** | **Number** |  | [optional] 
**currency** | **String** |  | [optional] 
**amountDetails** | [**Amount**](Amount.md) |  | [optional] 
**firstPaymentAmount** | [**Amount**](Amount.md) |  | [optional] 
**firstPaymentDateTime** | **Date** |  | [optional] 
**nextPaymentAmount** | [**Amount**](Amount.md) |  | [optional] 
**nextPaymentDateTime** | **Date** |  | [optional] 
**finalPaymentAmount** | [**Amount**](Amount.md) |  | [optional] 
**finalPaymentDateTime** | **Date** |  | [optional] 
**createdAt** | **Date** |  | [optional] 
**numberOfPayments** | **Number** |  | [optional] 
**previousPaymentAmount** | [**Amount**](Amount.md) |  | [optional] 
**previousPaymentDateTime** | **Date** |  | [optional] 
**chargeDetails** | [**[ChargeDetails]**](ChargeDetails.md) |  | [optional] 
**scheduledPaymentType** | **String** |  | [optional] 
**scheduledPaymentDateTime** | **Date** |  | [optional] 
**frequency** | [**FrequencyResponse**](FrequencyResponse.md) |  | [optional] 
**currencyOfTransfer** | **String** |  | [optional] 
**purpose** | **String** |  | [optional] 
**priority** | **String** |  | [optional] 
**exchangeRate** | [**ExchangeRateInformationResponse**](ExchangeRateInformationResponse.md) |  | [optional] 



## Enum: StatusEnum


* `PENDING` (value: `"PENDING"`)

* `FAILED` (value: `"FAILED"`)

* `DECLINED` (value: `"DECLINED"`)

* `COMPLETED` (value: `"COMPLETED"`)

* `EXPIRED` (value: `"EXPIRED"`)

* `UNKNOWN` (value: `"UNKNOWN"`)

* `ACTIVE` (value: `"ACTIVE"`)

* `INACTIVE` (value: `"INACTIVE"`)





## Enum: PriorityEnum


* `NORMAL` (value: `"NORMAL"`)

* `URGENT` (value: `"URGENT"`)




