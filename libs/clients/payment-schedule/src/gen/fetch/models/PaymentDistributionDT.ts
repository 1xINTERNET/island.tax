/* tslint:disable */
/* eslint-disable */
/**
 * Payment schedule 1.1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    PaymentsDT,
    PaymentsDTFromJSON,
    PaymentsDTFromJSONTyped,
    PaymentsDTToJSON,
} from './';

/**
 * 
 * @export
 * @interface PaymentDistributionDT
 */
export interface PaymentDistributionDT {
    /**
     * National identifier
     * @type {string}
     * @memberof PaymentDistributionDT
     */
    nationalId: string;
    /**
     * schedule type
     * @type {string}
     * @memberof PaymentDistributionDT
     */
    scheduleType: string;
    /**
     * 
     * @type {Array<PaymentsDT>}
     * @memberof PaymentDistributionDT
     */
    payments: Array<PaymentsDT>;
}

export function PaymentDistributionDTFromJSON(json: any): PaymentDistributionDT {
    return PaymentDistributionDTFromJSONTyped(json, false);
}

export function PaymentDistributionDTFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentDistributionDT {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nationalId': json['nationalId'],
        'scheduleType': json['scheduleType'],
        'payments': ((json['payments'] as Array<any>).map(PaymentsDTFromJSON)),
    };
}

export function PaymentDistributionDTToJSON(value?: PaymentDistributionDT | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nationalId': value.nationalId,
        'scheduleType': value.scheduleType,
        'payments': ((value.payments as Array<any>).map(PaymentsDTToJSON)),
    };
}


