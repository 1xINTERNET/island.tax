/* tslint:disable */
/* eslint-disable */
/**
 * Payments API
 * This service handles and encapsulates all lgoic related to payment flows, from creation to payment. It handles communication with FJS for the payments.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CreateInvoiceInput
 */
export interface CreateInvoiceInput {
    /**
     * Id of the related payment flow being paid later with an invoice
     * @type {string}
     * @memberof CreateInvoiceInput
     */
    paymentFlowId: string;
}

export function CreateInvoiceInputFromJSON(json: any): CreateInvoiceInput {
    return CreateInvoiceInputFromJSONTyped(json, false);
}

export function CreateInvoiceInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateInvoiceInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'paymentFlowId': json['paymentFlowId'],
    };
}

export function CreateInvoiceInputToJSON(value?: CreateInvoiceInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'paymentFlowId': value.paymentFlowId,
    };
}


