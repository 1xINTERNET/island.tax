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
 * @interface VirkarHeimagistingar
 */
export interface VirkarHeimagistingar {
    /**
     * 
     * @type {string}
     * @memberof VirkarHeimagistingar
     */
    skraningarnumer?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VirkarHeimagistingar
     */
    heitiHeimagistingar?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VirkarHeimagistingar
     */
    heimilisfang?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VirkarHeimagistingar
     */
    abyrgdarmadur?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VirkarHeimagistingar
     */
    umsoknarAr?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VirkarHeimagistingar
     */
    sveitarfelag?: string | null;
    /**
     * 
     * @type {number}
     * @memberof VirkarHeimagistingar
     */
    gestafjoldi?: number | null;
    /**
     * 
     * @type {number}
     * @memberof VirkarHeimagistingar
     */
    fjoldiHerbergja?: number | null;
    /**
     * 
     * @type {string}
     * @memberof VirkarHeimagistingar
     */
    fastanumer?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VirkarHeimagistingar
     */
    ibudanumer?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VirkarHeimagistingar
     */
    postnumer?: string | null;
}

export function VirkarHeimagistingarFromJSON(json: any): VirkarHeimagistingar {
    return VirkarHeimagistingarFromJSONTyped(json, false);
}

export function VirkarHeimagistingarFromJSONTyped(json: any, ignoreDiscriminator: boolean): VirkarHeimagistingar {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'skraningarnumer': !exists(json, 'skraningarnumer') ? undefined : json['skraningarnumer'],
        'heitiHeimagistingar': !exists(json, 'heitiHeimagistingar') ? undefined : json['heitiHeimagistingar'],
        'heimilisfang': !exists(json, 'heimilisfang') ? undefined : json['heimilisfang'],
        'abyrgdarmadur': !exists(json, 'abyrgdarmadur') ? undefined : json['abyrgdarmadur'],
        'umsoknarAr': !exists(json, 'umsoknarAr') ? undefined : json['umsoknarAr'],
        'sveitarfelag': !exists(json, 'sveitarfelag') ? undefined : json['sveitarfelag'],
        'gestafjoldi': !exists(json, 'gestafjoldi') ? undefined : json['gestafjoldi'],
        'fjoldiHerbergja': !exists(json, 'fjoldiHerbergja') ? undefined : json['fjoldiHerbergja'],
        'fastanumer': !exists(json, 'fastanumer') ? undefined : json['fastanumer'],
        'ibudanumer': !exists(json, 'ibudanumer') ? undefined : json['ibudanumer'],
        'postnumer': !exists(json, 'postnumer') ? undefined : json['postnumer'],
    };
}

export function VirkarHeimagistingarToJSON(value?: VirkarHeimagistingar | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'skraningarnumer': value.skraningarnumer,
        'heitiHeimagistingar': value.heitiHeimagistingar,
        'heimilisfang': value.heimilisfang,
        'abyrgdarmadur': value.abyrgdarmadur,
        'umsoknarAr': value.umsoknarAr,
        'sveitarfelag': value.sveitarfelag,
        'gestafjoldi': value.gestafjoldi,
        'fjoldiHerbergja': value.fjoldiHerbergja,
        'fastanumer': value.fastanumer,
        'ibudanumer': value.ibudanumer,
        'postnumer': value.postnumer,
    };
}


