/* tslint:disable */
/* eslint-disable */
/**
 * TachoNet API
 * Vefþjónustur fyrir umsóknir um ökuritakort hjá island.is
 *
 * The version of the OpenAPI document: 1.2.4
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
export enum IsActiveEnum {
    Yes = 'Yes',
    No = 'No'
}

export function IsActiveEnumFromJSON(json: any): IsActiveEnum {
    return IsActiveEnumFromJSONTyped(json, false);
}

export function IsActiveEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): IsActiveEnum {
    return json as IsActiveEnum;
}

export function IsActiveEnumToJSON(value?: IsActiveEnum | null): any {
    return value as any;
}

