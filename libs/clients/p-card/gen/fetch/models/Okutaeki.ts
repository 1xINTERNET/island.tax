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
 * @interface Okutaeki
 */
export interface Okutaeki {
    /**
     * 
     * @type {string}
     * @memberof Okutaeki
     */
    numerOkutaekis?: string;
    /**
     * 
     * @type {string}
     * @memberof Okutaeki
     */
    fastanumerOkutaekis?: string;
    /**
     * 
     * @type {string}
     * @memberof Okutaeki
     */
    framleidandi?: string;
    /**
     * 
     * @type {string}
     * @memberof Okutaeki
     */
    framleidandaGerd?: string;
    /**
     * 
     * @type {string}
     * @memberof Okutaeki
     */
    litur?: string;
    /**
     * 
     * @type {string}
     * @memberof Okutaeki
     */
    skraning?: string;
    /**
     * 
     * @type {string}
     * @memberof Okutaeki
     */
    nafnEiganda?: string;
    /**
     * 
     * @type {string}
     * @memberof Okutaeki
     */
    kennitalaEiganda?: string;
    /**
     * 
     * @type {string}
     * @memberof Okutaeki
     */
    heimilisfangEiganda?: string;
    /**
     * 
     * @type {Date}
     * @memberof Okutaeki
     */
    skraningardagur: Date;
    /**
     * 
     * @type {Date}
     * @memberof Okutaeki
     */
    skraningardagurEiganda: Date;
}

export function OkutaekiFromJSON(json: any): Okutaeki {
    return OkutaekiFromJSONTyped(json, false);
}

export function OkutaekiFromJSONTyped(json: any, ignoreDiscriminator: boolean): Okutaeki {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'numerOkutaekis': !exists(json, 'numerOkutaekis') ? undefined : json['numerOkutaekis'],
        'fastanumerOkutaekis': !exists(json, 'fastanumerOkutaekis') ? undefined : json['fastanumerOkutaekis'],
        'framleidandi': !exists(json, 'framleidandi') ? undefined : json['framleidandi'],
        'framleidandaGerd': !exists(json, 'framleidandaGerd') ? undefined : json['framleidandaGerd'],
        'litur': !exists(json, 'litur') ? undefined : json['litur'],
        'skraning': !exists(json, 'skraning') ? undefined : json['skraning'],
        'nafnEiganda': !exists(json, 'nafnEiganda') ? undefined : json['nafnEiganda'],
        'kennitalaEiganda': !exists(json, 'kennitalaEiganda') ? undefined : json['kennitalaEiganda'],
        'heimilisfangEiganda': !exists(json, 'heimilisfangEiganda') ? undefined : json['heimilisfangEiganda'],
        'skraningardagur': (new Date(json['skraningardagur'])),
        'skraningardagurEiganda': (new Date(json['skraningardagurEiganda'])),
    };
}

export function OkutaekiToJSON(value?: Okutaeki | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'numerOkutaekis': value.numerOkutaekis,
        'fastanumerOkutaekis': value.fastanumerOkutaekis,
        'framleidandi': value.framleidandi,
        'framleidandaGerd': value.framleidandaGerd,
        'litur': value.litur,
        'skraning': value.skraning,
        'nafnEiganda': value.nafnEiganda,
        'kennitalaEiganda': value.kennitalaEiganda,
        'heimilisfangEiganda': value.heimilisfangEiganda,
        'skraningardagur': (value.skraningardagur.toISOString()),
        'skraningardagurEiganda': (value.skraningardagurEiganda.toISOString()),
    };
}


