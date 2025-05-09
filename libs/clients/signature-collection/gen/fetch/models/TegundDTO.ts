/* tslint:disable */
/* eslint-disable */
/**
 * MedmaeliRestAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
 * @interface TegundDTO
 */
export interface TegundDTO {
    /**
     * 
     * @type {number}
     * @memberof TegundDTO
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof TegundDTO
     */
    nr?: number;
    /**
     * 
     * @type {string}
     * @memberof TegundDTO
     */
    lysing?: string | null;
}

export function TegundDTOFromJSON(json: any): TegundDTO {
    return TegundDTOFromJSONTyped(json, false);
}

export function TegundDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TegundDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'nr': !exists(json, 'nr') ? undefined : json['nr'],
        'lysing': !exists(json, 'lysing') ? undefined : json['lysing'],
    };
}

export function TegundDTOToJSON(value?: TegundDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'nr': value.nr,
        'lysing': value.lysing,
    };
}


