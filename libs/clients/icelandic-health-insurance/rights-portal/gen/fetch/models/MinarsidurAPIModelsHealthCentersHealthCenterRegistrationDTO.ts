/* tslint:disable */
/* eslint-disable */
/**
 * Minarsidur
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
 * @interface MinarsidurAPIModelsHealthCentersHealthCenterRegistrationDTO
 */
export interface MinarsidurAPIModelsHealthCentersHealthCenterRegistrationDTO {
    /**
     * 
     * @type {string}
     * @memberof MinarsidurAPIModelsHealthCentersHealthCenterRegistrationDTO
     */
    healthCenter?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MinarsidurAPIModelsHealthCentersHealthCenterRegistrationDTO
     */
    url?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MinarsidurAPIModelsHealthCentersHealthCenterRegistrationDTO
     */
    doctor?: string | null;
}

export function MinarsidurAPIModelsHealthCentersHealthCenterRegistrationDTOFromJSON(json: any): MinarsidurAPIModelsHealthCentersHealthCenterRegistrationDTO {
    return MinarsidurAPIModelsHealthCentersHealthCenterRegistrationDTOFromJSONTyped(json, false);
}

export function MinarsidurAPIModelsHealthCentersHealthCenterRegistrationDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MinarsidurAPIModelsHealthCentersHealthCenterRegistrationDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'healthCenter': !exists(json, 'healthCenter') ? undefined : json['healthCenter'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'doctor': !exists(json, 'doctor') ? undefined : json['doctor'],
    };
}

export function MinarsidurAPIModelsHealthCentersHealthCenterRegistrationDTOToJSON(value?: MinarsidurAPIModelsHealthCentersHealthCenterRegistrationDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'healthCenter': value.healthCenter,
        'url': value.url,
        'doctor': value.doctor,
    };
}


