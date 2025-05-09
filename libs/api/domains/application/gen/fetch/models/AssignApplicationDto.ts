/* tslint:disable */
/* eslint-disable */
/**
 * Application backend
 * This is provided as a reference to implement other backends.
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
 * @interface AssignApplicationDto
 */
export interface AssignApplicationDto {
    /**
     * 
     * @type {string}
     * @memberof AssignApplicationDto
     */
    token: string;
}

export function AssignApplicationDtoFromJSON(json: any): AssignApplicationDto {
    return AssignApplicationDtoFromJSONTyped(json, false);
}

export function AssignApplicationDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssignApplicationDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'token': json['token'],
    };
}

export function AssignApplicationDtoToJSON(value?: AssignApplicationDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'token': value.token,
    };
}


