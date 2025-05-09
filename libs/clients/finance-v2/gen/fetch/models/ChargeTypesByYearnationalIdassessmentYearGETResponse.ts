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
    ProblemDetailsDT,
    ProblemDetailsDTFromJSON,
    ProblemDetailsDTFromJSONTyped,
    ProblemDetailsDTToJSON,
    ResultChargetypeByYearDT,
    ResultChargetypeByYearDTFromJSON,
    ResultChargetypeByYearDTFromJSONTyped,
    ResultChargetypeByYearDTToJSON,
} from './';

/**
 * 
 * @export
 * @interface ChargeTypesByYearnationalIdassessmentYearGETResponse
 */
export interface ChargeTypesByYearnationalIdassessmentYearGETResponse {
    /**
     * 
     * @type {ProblemDetailsDT}
     * @memberof ChargeTypesByYearnationalIdassessmentYearGETResponse
     */
    error?: ProblemDetailsDT;
    /**
     * 
     * @type {ResultChargetypeByYearDT}
     * @memberof ChargeTypesByYearnationalIdassessmentYearGETResponse
     */
    resultChargeTypeByYear: ResultChargetypeByYearDT;
}

export function ChargeTypesByYearnationalIdassessmentYearGETResponseFromJSON(json: any): ChargeTypesByYearnationalIdassessmentYearGETResponse {
    return ChargeTypesByYearnationalIdassessmentYearGETResponseFromJSONTyped(json, false);
}

export function ChargeTypesByYearnationalIdassessmentYearGETResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChargeTypesByYearnationalIdassessmentYearGETResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ProblemDetailsDTFromJSON(json['error']),
        'resultChargeTypeByYear': ResultChargetypeByYearDTFromJSON(json['resultChargeTypeByYear']),
    };
}

export function ChargeTypesByYearnationalIdassessmentYearGETResponseToJSON(value?: ChargeTypesByYearnationalIdassessmentYearGETResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ProblemDetailsDTToJSON(value.error),
        'resultChargeTypeByYear': ResultChargetypeByYearDTToJSON(value.resultChargeTypeByYear),
    };
}


