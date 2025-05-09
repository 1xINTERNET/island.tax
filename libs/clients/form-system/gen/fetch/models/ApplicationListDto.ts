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
import {
    ApplicationDto,
    ApplicationDtoFromJSON,
    ApplicationDtoFromJSONTyped,
    ApplicationDtoToJSON,
} from './';

/**
 * 
 * @export
 * @interface ApplicationListDto
 */
export interface ApplicationListDto {
    /**
     * 
     * @type {Array<ApplicationDto>}
     * @memberof ApplicationListDto
     */
    applications?: Array<ApplicationDto>;
    /**
     * 
     * @type {number}
     * @memberof ApplicationListDto
     */
    total?: number;
}

export function ApplicationListDtoFromJSON(json: any): ApplicationListDto {
    return ApplicationListDtoFromJSONTyped(json, false);
}

export function ApplicationListDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationListDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'applications': !exists(json, 'applications') ? undefined : ((json['applications'] as Array<any>).map(ApplicationDtoFromJSON)),
        'total': !exists(json, 'total') ? undefined : json['total'],
    };
}

export function ApplicationListDtoToJSON(value?: ApplicationListDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'applications': value.applications === undefined ? undefined : ((value.applications as Array<any>).map(ApplicationDtoToJSON)),
        'total': value.total,
    };
}


