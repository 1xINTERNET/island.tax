/* tslint:disable */
/* eslint-disable */
/**
 * MedmaeliRestAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
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
 * @interface KosningBaseDTO
 */
export interface KosningBaseDTO {
    /**
     * 
     * @type {number}
     * @memberof KosningBaseDTO
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof KosningBaseDTO
     */
    nafn: string;
    /**
     * 
     * @type {string}
     * @memberof KosningBaseDTO
     */
    kosningTegund: string;
    /**
     * 
     * @type {number}
     * @memberof KosningBaseDTO
     */
    kosningTegundNr: number;
    /**
     * 
     * @type {boolean}
     * @memberof KosningBaseDTO
     */
    erMedmaelakosning?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof KosningBaseDTO
     */
    vidmidunardags?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof KosningBaseDTO
     */
    kjordagur?: Date | null;
}

export function KosningBaseDTOFromJSON(json: any): KosningBaseDTO {
    return KosningBaseDTOFromJSONTyped(json, false);
}

export function KosningBaseDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): KosningBaseDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'nafn': json['nafn'],
        'kosningTegund': json['kosningTegund'],
        'kosningTegundNr': json['kosningTegundNr'],
        'erMedmaelakosning': !exists(json, 'erMedmaelakosning') ? undefined : json['erMedmaelakosning'],
        'vidmidunardags': !exists(json, 'vidmidunardags') ? undefined : (json['vidmidunardags'] === null ? null : new Date(json['vidmidunardags'])),
        'kjordagur': !exists(json, 'kjordagur') ? undefined : (json['kjordagur'] === null ? null : new Date(json['kjordagur'])),
    };
}

export function KosningBaseDTOToJSON(value?: KosningBaseDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'nafn': value.nafn,
        'kosningTegund': value.kosningTegund,
        'kosningTegundNr': value.kosningTegundNr,
        'erMedmaelakosning': value.erMedmaelakosning,
        'vidmidunardags': value.vidmidunardags === undefined ? undefined : (value.vidmidunardags === null ? null : value.vidmidunardags.toISOString()),
        'kjordagur': value.kjordagur === undefined ? undefined : (value.kjordagur === null ? null : value.kjordagur.toISOString()),
    };
}


