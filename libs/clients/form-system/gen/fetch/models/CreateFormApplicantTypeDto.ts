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
 * @interface CreateFormApplicantTypeDto
 */
export interface CreateFormApplicantTypeDto {
    /**
     * 
     * @type {string}
     * @memberof CreateFormApplicantTypeDto
     */
    formId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateFormApplicantTypeDto
     */
    applicantTypeId: string;
}

export function CreateFormApplicantTypeDtoFromJSON(json: any): CreateFormApplicantTypeDto {
    return CreateFormApplicantTypeDtoFromJSONTyped(json, false);
}

export function CreateFormApplicantTypeDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateFormApplicantTypeDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'formId': json['formId'],
        'applicantTypeId': json['applicantTypeId'],
    };
}

export function CreateFormApplicantTypeDtoToJSON(value?: CreateFormApplicantTypeDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'formId': value.formId,
        'applicantTypeId': value.applicantTypeId,
    };
}


