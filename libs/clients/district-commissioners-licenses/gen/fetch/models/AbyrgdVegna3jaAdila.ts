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
 * @interface AbyrgdVegna3jaAdila
 */
export interface AbyrgdVegna3jaAdila {
    /**
     * 
     * @type {string}
     * @memberof AbyrgdVegna3jaAdila
     */
    audkenni?: string;
    /**
     * 
     * @type {number}
     * @memberof AbyrgdVegna3jaAdila
     */
    tegund: number;
    /**
     * 
     * @type {number}
     * @memberof AbyrgdVegna3jaAdila
     */
    stadaISK: number;
    /**
     * 
     * @type {string}
     * @memberof AbyrgdVegna3jaAdila
     */
    mynt?: string;
}

export function AbyrgdVegna3jaAdilaFromJSON(json: any): AbyrgdVegna3jaAdila {
    return AbyrgdVegna3jaAdilaFromJSONTyped(json, false);
}

export function AbyrgdVegna3jaAdilaFromJSONTyped(json: any, ignoreDiscriminator: boolean): AbyrgdVegna3jaAdila {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'audkenni': !exists(json, 'audkenni') ? undefined : json['audkenni'],
        'tegund': json['tegund'],
        'stadaISK': json['stadaISK'],
        'mynt': !exists(json, 'mynt') ? undefined : json['mynt'],
    };
}

export function AbyrgdVegna3jaAdilaToJSON(value?: AbyrgdVegna3jaAdila | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'audkenni': value.audkenni,
        'tegund': value.tegund,
        'stadaISK': value.stadaISK,
        'mynt': value.mynt,
    };
}


