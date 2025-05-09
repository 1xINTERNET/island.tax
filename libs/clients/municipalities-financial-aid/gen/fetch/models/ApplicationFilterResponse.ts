/* tslint:disable */
/* eslint-disable */
/**
 * Financial Aid Backend
 * This is the backend for the financial aid.
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
 * @interface ApplicationFilterResponse
 */
export interface ApplicationFilterResponse {
    /**
     * 
     * @type {number}
     * @memberof ApplicationFilterResponse
     */
    _new: number;
    /**
     * 
     * @type {number}
     * @memberof ApplicationFilterResponse
     */
    inProgress: number;
    /**
     * 
     * @type {number}
     * @memberof ApplicationFilterResponse
     */
    dataNeeded: number;
    /**
     * 
     * @type {number}
     * @memberof ApplicationFilterResponse
     */
    rejected: number;
    /**
     * 
     * @type {number}
     * @memberof ApplicationFilterResponse
     */
    approved: number;
    /**
     * 
     * @type {number}
     * @memberof ApplicationFilterResponse
     */
    myCases: number;
}

export function ApplicationFilterResponseFromJSON(json: any): ApplicationFilterResponse {
    return ApplicationFilterResponseFromJSONTyped(json, false);
}

export function ApplicationFilterResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationFilterResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        '_new': json['New'],
        'inProgress': json['InProgress'],
        'dataNeeded': json['DataNeeded'],
        'rejected': json['Rejected'],
        'approved': json['Approved'],
        'myCases': json['MyCases'],
    };
}

export function ApplicationFilterResponseToJSON(value?: ApplicationFilterResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'New': value._new,
        'InProgress': value.inProgress,
        'DataNeeded': value.dataNeeded,
        'Rejected': value.rejected,
        'Approved': value.approved,
        'MyCases': value.myCases,
    };
}


