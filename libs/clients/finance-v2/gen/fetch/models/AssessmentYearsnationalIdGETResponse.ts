/* tslint:disable */
/* eslint-disable */
/**
 * Finance Services v2
 * Finance services verison 2 ,   services for  working with a assessment Year,
 *
 * The version of the OpenAPI document: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    GetAssessmentYearsDT,
    GetAssessmentYearsDTFromJSON,
    GetAssessmentYearsDTFromJSONTyped,
    GetAssessmentYearsDTToJSON,
    ProblemDetailsDT,
    ProblemDetailsDTFromJSON,
    ProblemDetailsDTFromJSONTyped,
    ProblemDetailsDTToJSON,
} from './';

/**
 * 
 * @export
 * @interface AssessmentYearsnationalIdGETResponse
 */
export interface AssessmentYearsnationalIdGETResponse {
    /**
     * 
     * @type {ProblemDetailsDT}
     * @memberof AssessmentYearsnationalIdGETResponse
     */
    error?: ProblemDetailsDT;
    /**
     * 
     * @type {GetAssessmentYearsDT}
     * @memberof AssessmentYearsnationalIdGETResponse
     */
    resultYears: GetAssessmentYearsDT;
}

export function AssessmentYearsnationalIdGETResponseFromJSON(json: any): AssessmentYearsnationalIdGETResponse {
    return AssessmentYearsnationalIdGETResponseFromJSONTyped(json, false);
}

export function AssessmentYearsnationalIdGETResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssessmentYearsnationalIdGETResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ProblemDetailsDTFromJSON(json['error']),
        'resultYears': GetAssessmentYearsDTFromJSON(json['ResultYears']),
    };
}

export function AssessmentYearsnationalIdGETResponseToJSON(value?: AssessmentYearsnationalIdGETResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ProblemDetailsDTToJSON(value.error),
        'ResultYears': GetAssessmentYearsDTToJSON(value.resultYears),
    };
}


