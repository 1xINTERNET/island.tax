/* tslint:disable */
/* eslint-disable */
/**
 * User Profile backend
 * Backend providing user profiles for Island.is
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
 * @interface PatchActorProfileDto
 */
export interface PatchActorProfileDto {
    /**
     * 
     * @type {boolean}
     * @memberof PatchActorProfileDto
     */
    emailNotifications: boolean;
}

export function PatchActorProfileDtoFromJSON(json: any): PatchActorProfileDto {
    return PatchActorProfileDtoFromJSONTyped(json, false);
}

export function PatchActorProfileDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchActorProfileDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'emailNotifications': json['emailNotifications'],
    };
}

export function PatchActorProfileDtoToJSON(value?: PatchActorProfileDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'emailNotifications': value.emailNotifications,
    };
}


