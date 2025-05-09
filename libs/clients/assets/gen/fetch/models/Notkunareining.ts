/* tslint:disable */
/* eslint-disable */
/**
 * Fasteignir-Xroad
 * Uppfletting í fasteignaskrá.
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
    Fasteignamat,
    FasteignamatFromJSON,
    FasteignamatFromJSONTyped,
    FasteignamatToJSON,
    Stadfang,
    StadfangFromJSON,
    StadfangFromJSONTyped,
    StadfangToJSON,
} from './';

/**
 * 
 * @export
 * @interface Notkunareining
 */
export interface Notkunareining {
    /**
     * 
     * @type {string}
     * @memberof Notkunareining
     */
    birtStaerdMaelieining?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Notkunareining
     */
    notkunareininganumer?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Notkunareining
     */
    fasteignanumer?: string | null;
    /**
     * 
     * @type {Stadfang}
     * @memberof Notkunareining
     */
    stadfang?: Stadfang | null;
    /**
     * 
     * @type {string}
     * @memberof Notkunareining
     */
    merking?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Notkunareining
     */
    notkunBirting?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Notkunareining
     */
    skyring?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Notkunareining
     */
    byggingararBirting?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Notkunareining
     */
    birtStaerd?: number;
    /**
     * 
     * @type {Fasteignamat}
     * @memberof Notkunareining
     */
    fasteignamat?: Fasteignamat | null;
    /**
     * 
     * @type {number}
     * @memberof Notkunareining
     */
    brunabotamat?: number;
}

export function NotkunareiningFromJSON(json: any): Notkunareining {
    return NotkunareiningFromJSONTyped(json, false);
}

export function NotkunareiningFromJSONTyped(json: any, ignoreDiscriminator: boolean): Notkunareining {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'birtStaerdMaelieining': !exists(json, 'birtStaerdMaelieining') ? undefined : json['birtStaerdMaelieining'],
        'notkunareininganumer': !exists(json, 'notkunareininganumer') ? undefined : json['notkunareininganumer'],
        'fasteignanumer': !exists(json, 'fasteignanumer') ? undefined : json['fasteignanumer'],
        'stadfang': !exists(json, 'stadfang') ? undefined : StadfangFromJSON(json['stadfang']),
        'merking': !exists(json, 'merking') ? undefined : json['merking'],
        'notkunBirting': !exists(json, 'notkunBirting') ? undefined : json['notkunBirting'],
        'skyring': !exists(json, 'skyring') ? undefined : json['skyring'],
        'byggingararBirting': !exists(json, 'byggingararBirting') ? undefined : json['byggingararBirting'],
        'birtStaerd': !exists(json, 'birtStaerd') ? undefined : json['birtStaerd'],
        'fasteignamat': !exists(json, 'fasteignamat') ? undefined : FasteignamatFromJSON(json['fasteignamat']),
        'brunabotamat': !exists(json, 'brunabotamat') ? undefined : json['brunabotamat'],
    };
}

export function NotkunareiningToJSON(value?: Notkunareining | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'birtStaerdMaelieining': value.birtStaerdMaelieining,
        'notkunareininganumer': value.notkunareininganumer,
        'fasteignanumer': value.fasteignanumer,
        'stadfang': StadfangToJSON(value.stadfang),
        'merking': value.merking,
        'notkunBirting': value.notkunBirting,
        'skyring': value.skyring,
        'byggingararBirting': value.byggingararBirting,
        'birtStaerd': value.birtStaerd,
        'fasteignamat': FasteignamatToJSON(value.fasteignamat),
        'brunabotamat': value.brunabotamat,
    };
}


