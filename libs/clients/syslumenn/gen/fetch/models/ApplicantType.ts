/* tslint:disable */
/* eslint-disable */
/**
 * Þjónustugátt starfskerfa sýslumanna
 * Rafrænn aðgengi að gögnum og aðgerðum starfskerfis sýslumanna
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 0 = Auðkenndur
 * 1 = Einstaklingur
 * 2 = Lögaðili
 * -2 = Umboð
 * @export
 * @enum {string}
 */
export enum ApplicantType {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_MINUS_2 = -2
}

export function ApplicantTypeFromJSON(json: any): ApplicantType {
    return ApplicantTypeFromJSONTyped(json, false);
}

export function ApplicantTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicantType {
    return json as ApplicantType;
}

export function ApplicantTypeToJSON(value?: ApplicantType | null): any {
    return value as any;
}

