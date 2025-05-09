/* tslint:disable */
/* eslint-disable */
/**
 * FOS - Parental Leaves API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
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
 * @interface ApplicationPeriod
 */
export interface ApplicationPeriod {
    /**
     * 
     * @type {string}
     * @memberof ApplicationPeriod
     */
    from: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationPeriod
     */
    to: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationPeriod
     */
    ratio: string;
    /**
     * 
     * @type {boolean}
     * @memberof ApplicationPeriod
     */
    approved: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ApplicationPeriod
     */
    paid: boolean;
    /**
     * 
     * @type {string}
     * @memberof ApplicationPeriod
     */
    rightsCodePeriod: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationPeriod
     */
    firstPeriodStart: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationPeriod
     */
    days?: string;
}

export function ApplicationPeriodFromJSON(json: any): ApplicationPeriod {
    return ApplicationPeriodFromJSONTyped(json, false);
}

export function ApplicationPeriodFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationPeriod {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'from': json['from'],
        'to': json['to'],
        'ratio': json['ratio'],
        'approved': json['approved'],
        'paid': json['paid'],
        'rightsCodePeriod': json['rightsCodePeriod'],
        'firstPeriodStart': json['firstPeriodStart'],
        'days': !exists(json, 'days') ? undefined : json['days'],
    };
}

export function ApplicationPeriodToJSON(value?: ApplicationPeriod | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'from': value.from,
        'to': value.to,
        'ratio': value.ratio,
        'approved': value.approved,
        'paid': value.paid,
        'rightsCodePeriod': value.rightsCodePeriod,
        'firstPeriodStart': value.firstPeriodStart,
        'days': value.days,
    };
}


