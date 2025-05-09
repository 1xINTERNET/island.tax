/* tslint:disable */
/* eslint-disable */
/**
 * Digital DrivingLicenceBook API
 * Vefþjónusta fyrir rafræna ökunámsbók - f9a51338fc6bb51bf829cfc1123ddd104a8439cd-20240530.1
 *
 * The version of the OpenAPI document: v1
 * Contact: samgongustofa@samgongustofa.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Represents the data related to the created exemption in the response.
 * @export
 * @interface ExemptionCreateResponseData
 */
export interface ExemptionCreateResponseData {
    /**
     * Gets or sets the unique id for the application.
     * @type {string}
     * @memberof ExemptionCreateResponseData
     */
    id?: string | null;
}

export function ExemptionCreateResponseDataFromJSON(json: any): ExemptionCreateResponseData {
    return ExemptionCreateResponseDataFromJSONTyped(json, false);
}

export function ExemptionCreateResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExemptionCreateResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function ExemptionCreateResponseDataToJSON(value?: ExemptionCreateResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
    };
}


