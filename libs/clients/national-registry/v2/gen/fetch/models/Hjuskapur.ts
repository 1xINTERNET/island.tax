/* tslint:disable */
/* eslint-disable */
/**
 * Einstaklingur
 * The API retrieves information about individuals stored in the Icelandic registry.
 *
 * The version of the OpenAPI document: v1
 * Contact: skra@skra.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Hjuskapur
 */
export interface Hjuskapur {
    /**
     * National id of spouse
     * @type {string}
     * @memberof Hjuskapur
     */
    kennitalaMaka?: string | null;
    /**
     * Name of spouse
     * @type {string}
     * @memberof Hjuskapur
     */
    nafnMaka?: string | null;
    /**
     * Cohabitation code - definition can be looked up using resources in "Lyklar"
     * @type {string}
     * @memberof Hjuskapur
     */
    hjuskaparkodi?: string | null;
    /**
     * Last modified date
     * @type {string}
     * @memberof Hjuskapur
     */
    breytt?: string | null;
}

export function HjuskapurFromJSON(json: any): Hjuskapur {
    return HjuskapurFromJSONTyped(json, false);
}

export function HjuskapurFromJSONTyped(json: any, ignoreDiscriminator: boolean): Hjuskapur {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kennitalaMaka': !exists(json, 'kennitalaMaka') ? undefined : json['kennitalaMaka'],
        'nafnMaka': !exists(json, 'nafnMaka') ? undefined : json['nafnMaka'],
        'hjuskaparkodi': !exists(json, 'hjuskaparkodi') ? undefined : json['hjuskaparkodi'],
        'breytt': !exists(json, 'breytt') ? undefined : json['breytt'],
    };
}

export function HjuskapurToJSON(value?: Hjuskapur | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kennitalaMaka': value.kennitalaMaka,
        'nafnMaka': value.nafnMaka,
        'hjuskaparkodi': value.hjuskaparkodi,
        'breytt': value.breytt,
    };
}


