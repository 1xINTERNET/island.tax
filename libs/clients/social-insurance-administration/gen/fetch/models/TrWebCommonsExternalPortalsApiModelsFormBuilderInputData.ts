/* tslint:disable */
/* eslint-disable */
/**
 * TR Portal API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Data entered by the applicant (Notandagogn)
 * @export
 * @interface TrWebCommonsExternalPortalsApiModelsFormBuilderInputData
 */
export interface TrWebCommonsExternalPortalsApiModelsFormBuilderInputData {
    /**
     * 
     * @type {string}
     * @memberof TrWebCommonsExternalPortalsApiModelsFormBuilderInputData
     */
    guid?: string | null;
    /**
     * Group name
     * @type {string}
     * @memberof TrWebCommonsExternalPortalsApiModelsFormBuilderInputData
     */
    flokkur?: string | null;
    /**
     * Name of the variable
     * @type {string}
     * @memberof TrWebCommonsExternalPortalsApiModelsFormBuilderInputData
     */
    heiti?: string | null;
    /**
     * Type of variable
     * @type {string}
     * @memberof TrWebCommonsExternalPortalsApiModelsFormBuilderInputData
     */
    tegund?: string | null;
    /**
     * Value for inspection
     * @type {string}
     * @memberof TrWebCommonsExternalPortalsApiModelsFormBuilderInputData
     */
    gildi?: string | null;
    /**
     * if tegund is "landalisti" then the countryCode is included.
     * This is a two letter countryCode, i.e. "DK" for Denmark
     * @type {string}
     * @memberof TrWebCommonsExternalPortalsApiModelsFormBuilderInputData
     */
    countryCode?: string | null;
    /**
     * If tegund is "kennitala" then the name of the payer is included
     * @type {string}
     * @memberof TrWebCommonsExternalPortalsApiModelsFormBuilderInputData
     */
    nafn?: string | null;
}

export function TrWebCommonsExternalPortalsApiModelsFormBuilderInputDataFromJSON(json: any): TrWebCommonsExternalPortalsApiModelsFormBuilderInputData {
    return TrWebCommonsExternalPortalsApiModelsFormBuilderInputDataFromJSONTyped(json, false);
}

export function TrWebCommonsExternalPortalsApiModelsFormBuilderInputDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrWebCommonsExternalPortalsApiModelsFormBuilderInputData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'guid': !exists(json, 'guid') ? undefined : json['guid'],
        'flokkur': !exists(json, 'flokkur') ? undefined : json['flokkur'],
        'heiti': !exists(json, 'heiti') ? undefined : json['heiti'],
        'tegund': !exists(json, 'tegund') ? undefined : json['tegund'],
        'gildi': !exists(json, 'gildi') ? undefined : json['gildi'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'nafn': !exists(json, 'nafn') ? undefined : json['nafn'],
    };
}

export function TrWebCommonsExternalPortalsApiModelsFormBuilderInputDataToJSON(value?: TrWebCommonsExternalPortalsApiModelsFormBuilderInputData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'guid': value.guid,
        'flokkur': value.flokkur,
        'heiti': value.heiti,
        'tegund': value.tegund,
        'gildi': value.gildi,
        'countryCode': value.countryCode,
        'nafn': value.nafn,
    };
}


