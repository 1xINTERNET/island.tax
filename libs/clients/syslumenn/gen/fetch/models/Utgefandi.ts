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
 * @interface Utgefandi
 */
export interface Utgefandi {
    /**
     * 
     * @type {string}
     * @memberof Utgefandi
     */
    audkenni?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Utgefandi
     */
    titill?: string | null;
}

export function UtgefandiFromJSON(json: any): Utgefandi {
    return UtgefandiFromJSONTyped(json, false);
}

export function UtgefandiFromJSONTyped(json: any, ignoreDiscriminator: boolean): Utgefandi {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'audkenni': !exists(json, 'audkenni') ? undefined : json['audkenni'],
        'titill': !exists(json, 'titill') ? undefined : json['titill'],
    };
}

export function UtgefandiToJSON(value?: Utgefandi | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'audkenni': value.audkenni,
        'titill': value.titill,
    };
}


