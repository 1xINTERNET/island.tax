/* tslint:disable */
/* eslint-disable */
/**
 * ST2-api
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
 * 
 * @export
 * @interface EmployerViewModel
 */
export interface EmployerViewModel {
    /**
     * 
     * @type {string}
     * @memberof EmployerViewModel
     */
    companyName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof EmployerViewModel
     */
    countryId?: number | null;
    /**
     * 
     * @type {Date}
     * @memberof EmployerViewModel
     */
    dateFrom?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof EmployerViewModel
     */
    dateTo?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof EmployerViewModel
     */
    icelandicIDNO?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmployerViewModel
     */
    employerid?: string | null;
}

export function EmployerViewModelFromJSON(json: any): EmployerViewModel {
    return EmployerViewModelFromJSONTyped(json, false);
}

export function EmployerViewModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmployerViewModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'companyName': !exists(json, 'companyName') ? undefined : json['companyName'],
        'countryId': !exists(json, 'countryId') ? undefined : json['countryId'],
        'dateFrom': !exists(json, 'dateFrom') ? undefined : (json['dateFrom'] === null ? null : new Date(json['dateFrom'])),
        'dateTo': !exists(json, 'dateTo') ? undefined : (json['dateTo'] === null ? null : new Date(json['dateTo'])),
        'icelandicIDNO': !exists(json, 'icelandicIDNO') ? undefined : json['icelandicIDNO'],
        'employerid': !exists(json, 'employerid') ? undefined : json['employerid'],
    };
}

export function EmployerViewModelToJSON(value?: EmployerViewModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'companyName': value.companyName,
        'countryId': value.countryId,
        'dateFrom': value.dateFrom === undefined ? undefined : (value.dateFrom === null ? null : value.dateFrom.toISOString()),
        'dateTo': value.dateTo === undefined ? undefined : (value.dateTo === null ? null : value.dateTo.toISOString()),
        'icelandicIDNO': value.icelandicIDNO,
        'employerid': value.employerid,
    };
}


