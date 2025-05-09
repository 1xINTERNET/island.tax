/* tslint:disable */
/* eslint-disable */
/**
 * Judicial System xRoad robot API
 * This is the xRoad robot API for the judicial system.
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
 * @interface AlertMessage
 */
export interface AlertMessage {
    /**
     * 
     * @type {string}
     * @memberof AlertMessage
     */
    type: AlertMessageTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AlertMessage
     */
    message: string;
}

export function AlertMessageFromJSON(json: any): AlertMessage {
    return AlertMessageFromJSONTyped(json, false);
}

export function AlertMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlertMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'message': json['message'],
    };
}

export function AlertMessageToJSON(value?: AlertMessage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'message': value.message,
    };
}

/**
* @export
* @enum {string}
*/
export enum AlertMessageTypeEnum {
    Error = 'error',
    Info = 'info',
    Success = 'success',
    Warning = 'warning',
    Default = 'default'
}


