/* tslint:disable */
/* eslint-disable */
/**
 * Gagnaveita Fiskistofu
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * Contact: olafur.palmi.gudnason@fiskistofa.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SkipGrunnupplysingarDTO
 */
export interface SkipGrunnupplysingarDTO {
    /**
     * Skipanúmer
     * @type {number}
     * @memberof SkipGrunnupplysingarDTO
     */
    skipNumer?: number;
    /**
     * Heiti skips.
     * @type {string}
     * @memberof SkipGrunnupplysingarDTO
     */
    heiti?: string | null;
    /**
     * Kennitala eiganda skips.
     * @type {string}
     * @memberof SkipGrunnupplysingarDTO
     */
    eigandiKennitala?: string | null;
    /**
     * Kennitala útgerðaraðila skips.
     * @type {string}
     * @memberof SkipGrunnupplysingarDTO
     */
    rekstraradiliKennitala?: string | null;
    /**
     * Útgerðaflokkur í skipaskrá
     * @type {string}
     * @memberof SkipGrunnupplysingarDTO
     */
    veidikerfi?: string | null;
}

export function SkipGrunnupplysingarDTOFromJSON(json: any): SkipGrunnupplysingarDTO {
    return SkipGrunnupplysingarDTOFromJSONTyped(json, false);
}

export function SkipGrunnupplysingarDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SkipGrunnupplysingarDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'skipNumer': !exists(json, 'skipNumer') ? undefined : json['skipNumer'],
        'heiti': !exists(json, 'heiti') ? undefined : json['heiti'],
        'eigandiKennitala': !exists(json, 'eigandiKennitala') ? undefined : json['eigandiKennitala'],
        'rekstraradiliKennitala': !exists(json, 'rekstraradiliKennitala') ? undefined : json['rekstraradiliKennitala'],
        'veidikerfi': !exists(json, 'veidikerfi') ? undefined : json['veidikerfi'],
    };
}

export function SkipGrunnupplysingarDTOToJSON(value?: SkipGrunnupplysingarDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'skipNumer': value.skipNumer,
        'heiti': value.heiti,
        'eigandiKennitala': value.eigandiKennitala,
        'rekstraradiliKennitala': value.rekstraradiliKennitala,
        'veidikerfi': value.veidikerfi,
    };
}


