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
/**
 * 
 * @export
 * @interface Fasteignamat
 */
export interface Fasteignamat {
    /**
     * 
     * @type {number}
     * @memberof Fasteignamat
     */
    gildandiFasteignamat?: number;
    /**
     * 
     * @type {number}
     * @memberof Fasteignamat
     */
    fyrirhugadFasteignamat?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Fasteignamat
     */
    gildandiMannvirkjamat?: number;
    /**
     * 
     * @type {number}
     * @memberof Fasteignamat
     */
    fyrirhugadMannvirkjamat?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Fasteignamat
     */
    gildandiLodarhlutamat?: number;
    /**
     * 
     * @type {number}
     * @memberof Fasteignamat
     */
    fyrirhugadLodarhlutamat?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Fasteignamat
     */
    gildandiAr?: number;
    /**
     * 
     * @type {number}
     * @memberof Fasteignamat
     */
    fyrirhugadAr?: number;
}

export function FasteignamatFromJSON(json: any): Fasteignamat {
    return FasteignamatFromJSONTyped(json, false);
}

export function FasteignamatFromJSONTyped(json: any, ignoreDiscriminator: boolean): Fasteignamat {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gildandiFasteignamat': !exists(json, 'gildandiFasteignamat') ? undefined : json['gildandiFasteignamat'],
        'fyrirhugadFasteignamat': !exists(json, 'fyrirhugadFasteignamat') ? undefined : json['fyrirhugadFasteignamat'],
        'gildandiMannvirkjamat': !exists(json, 'gildandiMannvirkjamat') ? undefined : json['gildandiMannvirkjamat'],
        'fyrirhugadMannvirkjamat': !exists(json, 'fyrirhugadMannvirkjamat') ? undefined : json['fyrirhugadMannvirkjamat'],
        'gildandiLodarhlutamat': !exists(json, 'gildandiLodarhlutamat') ? undefined : json['gildandiLodarhlutamat'],
        'fyrirhugadLodarhlutamat': !exists(json, 'fyrirhugadLodarhlutamat') ? undefined : json['fyrirhugadLodarhlutamat'],
        'gildandiAr': !exists(json, 'gildandiAr') ? undefined : json['gildandiAr'],
        'fyrirhugadAr': !exists(json, 'fyrirhugadAr') ? undefined : json['fyrirhugadAr'],
    };
}

export function FasteignamatToJSON(value?: Fasteignamat | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'gildandiFasteignamat': value.gildandiFasteignamat,
        'fyrirhugadFasteignamat': value.fyrirhugadFasteignamat,
        'gildandiMannvirkjamat': value.gildandiMannvirkjamat,
        'fyrirhugadMannvirkjamat': value.fyrirhugadMannvirkjamat,
        'gildandiLodarhlutamat': value.gildandiLodarhlutamat,
        'fyrirhugadLodarhlutamat': value.fyrirhugadLodarhlutamat,
        'gildandiAr': value.gildandiAr,
        'fyrirhugadAr': value.fyrirhugadAr,
    };
}


