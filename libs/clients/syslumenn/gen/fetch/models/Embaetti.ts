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
 * @interface Embaetti
 */
export interface Embaetti {
    /**
     * 
     * @type {number}
     * @memberof Embaetti
     */
    numer?: number;
    /**
     * 
     * @type {string}
     * @memberof Embaetti
     */
    heiti?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Embaetti
     */
    kennitala?: string | null;
}

export function EmbaettiFromJSON(json: any): Embaetti {
    return EmbaettiFromJSONTyped(json, false);
}

export function EmbaettiFromJSONTyped(json: any, ignoreDiscriminator: boolean): Embaetti {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'numer': !exists(json, 'numer') ? undefined : json['numer'],
        'heiti': !exists(json, 'heiti') ? undefined : json['heiti'],
        'kennitala': !exists(json, 'kennitala') ? undefined : json['kennitala'],
    };
}

export function EmbaettiToJSON(value?: Embaetti | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'numer': value.numer,
        'heiti': value.heiti,
        'kennitala': value.kennitala,
    };
}


