/* tslint:disable */
/* eslint-disable */
/**
 * Application backend
 * This is provided as a reference to implement other backends.
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
 * @interface PaymentStatusResponseDto
 */
export interface PaymentStatusResponseDto {
    /**
     * 
     * @type {boolean}
     * @memberof PaymentStatusResponseDto
     */
    fulfilled: boolean;
    /**
     * 
     * @type {string}
     * @memberof PaymentStatusResponseDto
     */
    paymentUrl: string;
}

export function PaymentStatusResponseDtoFromJSON(json: any): PaymentStatusResponseDto {
    return PaymentStatusResponseDtoFromJSONTyped(json, false);
}

export function PaymentStatusResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentStatusResponseDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fulfilled': json['fulfilled'],
        'paymentUrl': json['paymentUrl'],
    };
}

export function PaymentStatusResponseDtoToJSON(value?: PaymentStatusResponseDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fulfilled': value.fulfilled,
        'paymentUrl': value.paymentUrl,
    };
}


