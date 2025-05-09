/* tslint:disable */
/* eslint-disable */
/**
 * Þjónustugátt starfskerfa sýslumanna
 * Rafrænn aðgengi að gögnum og aðgerðum starfskerfis sýslumanna
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
 * 
 * @export
 * @interface Eigendur
 */
export interface Eigendur {
    /**
     * 
     * @type {string}
     * @memberof Eigendur
     */
    kennitala?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Eigendur
     */
    nafn?: string | null;
}

export function EigendurFromJSON(json: any): Eigendur {
    return EigendurFromJSONTyped(json, false);
}

export function EigendurFromJSONTyped(json: any, ignoreDiscriminator: boolean): Eigendur {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kennitala': !exists(json, 'kennitala') ? undefined : json['kennitala'],
        'nafn': !exists(json, 'nafn') ? undefined : json['nafn'],
    };
}

export function EigendurToJSON(value?: Eigendur | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kennitala': value.kennitala,
        'nafn': value.nafn,
    };
}


