/* tslint:disable */
/* eslint-disable */
/**
 * LibraAPI
 * LibraAPI gives information about loans in HMS.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Information about the co-payer of loan.
 * @export
 * @interface CoPayerReturnModel
 */
export interface CoPayerReturnModel {
    /**
     * Name of co-payer on loan.
     * @type {string}
     * @memberof CoPayerReturnModel
     */
    coPayerName?: string | null;
    /**
     * National Id of co-payer.
     * @type {string}
     * @memberof CoPayerReturnModel
     */
    coPayerNationalId?: string | null;
}

export function CoPayerReturnModelFromJSON(json: any): CoPayerReturnModel {
    return CoPayerReturnModelFromJSONTyped(json, false);
}

export function CoPayerReturnModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoPayerReturnModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'coPayerName': !exists(json, 'coPayerName') ? undefined : json['coPayerName'],
        'coPayerNationalId': !exists(json, 'coPayerNationalId') ? undefined : json['coPayerNationalId'],
    };
}

export function CoPayerReturnModelToJSON(value?: CoPayerReturnModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'coPayerName': value.coPayerName,
        'coPayerNationalId': value.coPayerNationalId,
    };
}


