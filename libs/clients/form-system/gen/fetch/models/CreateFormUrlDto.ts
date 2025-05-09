/* tslint:disable */
/* eslint-disable */
/**
 * Form System API
 * This is an API for formbuilder and form-rendering (application) system
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
 * @interface CreateFormUrlDto
 */
export interface CreateFormUrlDto {
    /**
     * 
     * @type {string}
     * @memberof CreateFormUrlDto
     */
    formId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateFormUrlDto
     */
    organizationUrlId: string;
}

export function CreateFormUrlDtoFromJSON(json: any): CreateFormUrlDto {
    return CreateFormUrlDtoFromJSONTyped(json, false);
}

export function CreateFormUrlDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateFormUrlDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'formId': json['formId'],
        'organizationUrlId': json['organizationUrlId'],
    };
}

export function CreateFormUrlDtoToJSON(value?: CreateFormUrlDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'formId': value.formId,
        'organizationUrlId': value.organizationUrlId,
    };
}


