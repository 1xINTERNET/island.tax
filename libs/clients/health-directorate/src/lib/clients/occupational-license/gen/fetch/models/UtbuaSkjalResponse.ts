/* tslint:disable */
/* eslint-disable */
/**
 * Landlæknir API
 * Vefþjónustur á vegum Landlæknis.
 *
 * The version of the OpenAPI document: 1.0.1
 * Contact: holmfridur.palsdottir@landlaeknir.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UtbuaSkjalResponse
 */
export interface UtbuaSkjalResponse {
    /**
     * Base64 strengur
     * @type {string}
     * @memberof UtbuaSkjalResponse
     */
    base64String?: string | null;
}

export function UtbuaSkjalResponseFromJSON(json: any): UtbuaSkjalResponse {
    return UtbuaSkjalResponseFromJSONTyped(json, false);
}

export function UtbuaSkjalResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UtbuaSkjalResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'base64String': !exists(json, 'base64String') ? undefined : json['base64String'],
    };
}

export function UtbuaSkjalResponseToJSON(value?: UtbuaSkjalResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'base64String': value.base64String,
    };
}


