/* tslint:disable */
/* eslint-disable */
/**
 * GoPro External Integration REST Services - API version 1.0
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Metadata value
 * @export
 * @interface MetaValue
 */
export interface MetaValue {
    /**
     * Name of the metadata
     * @type {string}
     * @memberof MetaValue
     */
    name?: string;
    /**
     * String representation of metadata value
     * @type {string}
     * @memberof MetaValue
     */
    value?: string;
    /**
     * Data type of the metadata (0: String (default), 1: Guid; 2: Integer; 3: DateTime; 4: Boolean; 5: Decimal (currency))
     * @type {number}
     * @memberof MetaValue
     */
    valueType?: number;
}

export function MetaValueFromJSON(json: any): MetaValue {
    return MetaValueFromJSONTyped(json, false);
}

export function MetaValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetaValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'valueType': !exists(json, 'valueType') ? undefined : json['valueType'],
    };
}

export function MetaValueToJSON(value?: MetaValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'value': value.value,
        'valueType': value.valueType,
    };
}


