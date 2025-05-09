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
import {
    AflamarkSkipsUpplDTO,
    AflamarkSkipsUpplDTOFromJSON,
    AflamarkSkipsUpplDTOFromJSONTyped,
    AflamarkSkipsUpplDTOToJSON,
    AflamarkTegundirBreyttDTO,
    AflamarkTegundirBreyttDTOFromJSON,
    AflamarkTegundirBreyttDTOFromJSONTyped,
    AflamarkTegundirBreyttDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface AflamarkSkipsBreyttDTO
 */
export interface AflamarkSkipsBreyttDTO {
    /**
     * 
     * @type {AflamarkSkipsUpplDTO}
     * @memberof AflamarkSkipsBreyttDTO
     */
    skipUppl?: AflamarkSkipsUpplDTO;
    /**
     * Listi aflamarkstegunda eftir beytta stöðu.
     * @type {Array<AflamarkTegundirBreyttDTO>}
     * @memberof AflamarkSkipsBreyttDTO
     */
    aflamarkstegundir?: Array<AflamarkTegundirBreyttDTO> | null;
}

export function AflamarkSkipsBreyttDTOFromJSON(json: any): AflamarkSkipsBreyttDTO {
    return AflamarkSkipsBreyttDTOFromJSONTyped(json, false);
}

export function AflamarkSkipsBreyttDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AflamarkSkipsBreyttDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'skipUppl': !exists(json, 'skipUppl') ? undefined : AflamarkSkipsUpplDTOFromJSON(json['skipUppl']),
        'aflamarkstegundir': !exists(json, 'aflamarkstegundir') ? undefined : (json['aflamarkstegundir'] === null ? null : (json['aflamarkstegundir'] as Array<any>).map(AflamarkTegundirBreyttDTOFromJSON)),
    };
}

export function AflamarkSkipsBreyttDTOToJSON(value?: AflamarkSkipsBreyttDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'skipUppl': AflamarkSkipsUpplDTOToJSON(value.skipUppl),
        'aflamarkstegundir': value.aflamarkstegundir === undefined ? undefined : (value.aflamarkstegundir === null ? null : (value.aflamarkstegundir as Array<any>).map(AflamarkTegundirBreyttDTOToJSON)),
    };
}


