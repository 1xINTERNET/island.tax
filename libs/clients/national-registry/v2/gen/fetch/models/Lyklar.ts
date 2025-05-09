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
import {
    Skilgreining,
    SkilgreiningFromJSON,
    SkilgreiningFromJSONTyped,
    SkilgreiningToJSON,
} from './';

/**
 * 
 * @export
 * @interface Lyklar
 */
export interface Lyklar {
    /**
     * List of all available gender codes and description
     * @type {{ [key: string]: Skilgreining; }}
     * @memberof Lyklar
     */
    kyn: { [key: string]: Skilgreining; };
    /**
     * List of all available Cohabitation codes and descriptions for each gender
     * @type {{ [key: string]: { [key: string]: Skilgreining; }; }}
     * @memberof Lyklar
     */
    hjuskapur: { [key: string]: { [key: string]: Skilgreining; }; };
}

export function LyklarFromJSON(json: any): Lyklar {
    return LyklarFromJSONTyped(json, false);
}

export function LyklarFromJSONTyped(json: any, ignoreDiscriminator: boolean): Lyklar {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kyn': (mapValues(json['kyn'], SkilgreiningFromJSON)),
        'hjuskapur': json['hjuskapur'],
    };
}

export function LyklarToJSON(value?: Lyklar | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kyn': (mapValues(value.kyn, SkilgreiningToJSON)),
        'hjuskapur': value.hjuskapur,
    };
}


