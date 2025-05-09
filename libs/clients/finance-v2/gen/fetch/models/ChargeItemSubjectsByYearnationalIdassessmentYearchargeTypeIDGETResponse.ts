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
    ResultChargeTypeByYearItemSubjectDT,
    ResultChargeTypeByYearItemSubjectDTFromJSON,
    ResultChargeTypeByYearItemSubjectDTFromJSONTyped,
    ResultChargeTypeByYearItemSubjectDTToJSON,
} from './';

/**
 * 
 * @export
 * @interface ChargeItemSubjectsByYearnationalIdassessmentYearchargeTypeIDGETResponse
 */
export interface ChargeItemSubjectsByYearnationalIdassessmentYearchargeTypeIDGETResponse {
    /**
     * 
     * @type {ProblemDetailsDT}
     * @memberof ChargeItemSubjectsByYearnationalIdassessmentYearchargeTypeIDGETResponse
     */
    error?: ProblemDetailsDT;
    /**
     * 
     * @type {ResultChargeTypeByYearItemSubjectDT}
     * @memberof ChargeItemSubjectsByYearnationalIdassessmentYearchargeTypeIDGETResponse
     */
    resultSubjectsByYearChargeType: ResultChargeTypeByYearItemSubjectDT;
}

export function ChargeItemSubjectsByYearnationalIdassessmentYearchargeTypeIDGETResponseFromJSON(json: any): ChargeItemSubjectsByYearnationalIdassessmentYearchargeTypeIDGETResponse {
    return ChargeItemSubjectsByYearnationalIdassessmentYearchargeTypeIDGETResponseFromJSONTyped(json, false);
}

export function ChargeItemSubjectsByYearnationalIdassessmentYearchargeTypeIDGETResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChargeItemSubjectsByYearnationalIdassessmentYearchargeTypeIDGETResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ProblemDetailsDTFromJSON(json['error']),
        'resultSubjectsByYearChargeType': ResultChargeTypeByYearItemSubjectDTFromJSON(json['resultSubjectsByYearChargeType']),
    };
}

export function ChargeItemSubjectsByYearnationalIdassessmentYearchargeTypeIDGETResponseToJSON(value?: ChargeItemSubjectsByYearnationalIdassessmentYearchargeTypeIDGETResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ProblemDetailsDTToJSON(value.error),
        'resultSubjectsByYearChargeType': ResultChargeTypeByYearItemSubjectDTToJSON(value.resultSubjectsByYearChargeType),
    };
}


