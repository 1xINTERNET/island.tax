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
 * @interface MinarsidurAPIModelsAccidentReportsInjuredDTO
 */
export interface MinarsidurAPIModelsAccidentReportsInjuredDTO {
    /**
     * 
     * @type {string}
     * @memberof MinarsidurAPIModelsAccidentReportsInjuredDTO
     */
    nationalId: string | null;
    /**
     * 
     * @type {string}
     * @memberof MinarsidurAPIModelsAccidentReportsInjuredDTO
     */
    name: string | null;
    /**
     * 
     * @type {string}
     * @memberof MinarsidurAPIModelsAccidentReportsInjuredDTO
     */
    occupation?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MinarsidurAPIModelsAccidentReportsInjuredDTO
     */
    email: string | null;
    /**
     * 
     * @type {string}
     * @memberof MinarsidurAPIModelsAccidentReportsInjuredDTO
     */
    phone?: string | null;
}

export function MinarsidurAPIModelsAccidentReportsInjuredDTOFromJSON(json: any): MinarsidurAPIModelsAccidentReportsInjuredDTO {
    return MinarsidurAPIModelsAccidentReportsInjuredDTOFromJSONTyped(json, false);
}

export function MinarsidurAPIModelsAccidentReportsInjuredDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MinarsidurAPIModelsAccidentReportsInjuredDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nationalId': json['nationalId'],
        'name': json['name'],
        'occupation': !exists(json, 'occupation') ? undefined : json['occupation'],
        'email': json['email'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
    };
}

export function MinarsidurAPIModelsAccidentReportsInjuredDTOToJSON(value?: MinarsidurAPIModelsAccidentReportsInjuredDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nationalId': value.nationalId,
        'name': value.name,
        'occupation': value.occupation,
        'email': value.email,
        'phone': value.phone,
    };
}


