/* tslint:disable */
/* eslint-disable */
/**
 * MMS Island.is application API
 * API for Island.is
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 
 * @export
 * @enum {string}
 */
export enum CurrentApplicantStatus {
    Neither = 'Neither',
    InSchoolOnHighSchoolLevel = 'InSchoolOnHighSchoolLevel',
    RegisteredWithLabourInstitute = 'RegisteredWithLabourInstitute'
}

export function CurrentApplicantStatusFromJSON(json: any): CurrentApplicantStatus {
    return CurrentApplicantStatusFromJSONTyped(json, false);
}

export function CurrentApplicantStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurrentApplicantStatus {
    return json as CurrentApplicantStatus;
}

export function CurrentApplicantStatusToJSON(value?: CurrentApplicantStatus | null): any {
    return value as any;
}

