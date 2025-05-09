/* tslint:disable */
/* eslint-disable */
/**
 * Application backend
 * This is provided as a reference to implement other backends.
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
 * @interface DataProviderDto
 */
export interface DataProviderDto {
    /**
     * 
     * @type {string}
     * @memberof DataProviderDto
     */
    actionId: string;
    /**
     * 
     * @type {number}
     * @memberof DataProviderDto
     */
    order?: number;
}

export function DataProviderDtoFromJSON(json: any): DataProviderDto {
    return DataProviderDtoFromJSONTyped(json, false);
}

export function DataProviderDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataProviderDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actionId': json['actionId'],
        'order': !exists(json, 'order') ? undefined : json['order'],
    };
}

export function DataProviderDtoToJSON(value?: DataProviderDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actionId': value.actionId,
        'order': value.order,
    };
}


