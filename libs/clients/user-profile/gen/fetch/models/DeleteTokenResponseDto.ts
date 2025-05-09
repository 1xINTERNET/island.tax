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
 * @interface DeleteTokenResponseDto
 */
export interface DeleteTokenResponseDto {
    /**
     * 
     * @type {boolean}
     * @memberof DeleteTokenResponseDto
     */
    success: boolean;
}

export function DeleteTokenResponseDtoFromJSON(json: any): DeleteTokenResponseDto {
    return DeleteTokenResponseDtoFromJSONTyped(json, false);
}

export function DeleteTokenResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteTokenResponseDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': json['success'],
    };
}

export function DeleteTokenResponseDtoToJSON(value?: DeleteTokenResponseDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
    };
}


