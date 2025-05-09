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
 * Represents a GoPro user. Used for denoting a case responsible worker
 * @export
 * @interface ResponsibleWorker
 */
export interface ResponsibleWorker {
    /**
     * Record ID of the user
     * @type {string}
     * @memberof ResponsibleWorker
     */
    userId?: string;
    /**
     * Flag that shows whether this user is the primary responsible for the case. Can be either false/true or 0/1 or nei/já or no/yes
     * @type {boolean}
     * @memberof ResponsibleWorker
     */
    primary?: boolean;
}

export function ResponsibleWorkerFromJSON(json: any): ResponsibleWorker {
    return ResponsibleWorkerFromJSONTyped(json, false);
}

export function ResponsibleWorkerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponsibleWorker {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'primary': !exists(json, 'primary') ? undefined : json['primary'],
    };
}

export function ResponsibleWorkerToJSON(value?: ResponsibleWorker | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
        'primary': value.primary,
    };
}


