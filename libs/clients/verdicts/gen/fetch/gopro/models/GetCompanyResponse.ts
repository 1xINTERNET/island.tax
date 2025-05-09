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
import {
    Company,
    CompanyFromJSON,
    CompanyFromJSONTyped,
    CompanyToJSON,
} from './';

/**
 * GetCompany method response structure
 * @export
 * @interface GetCompanyResponse
 */
export interface GetCompanyResponse {
    /**
     * 
     * @type {Company}
     * @memberof GetCompanyResponse
     */
    company?: Company;
    /**
     * General success indicator
     * @type {boolean}
     * @memberof GetCompanyResponse
     */
    succeeded?: boolean;
    /**
     * HTTP response status code
     * @type {number}
     * @memberof GetCompanyResponse
     */
    returnCode?: number;
    /**
     * Additional message containing information or error message
     * @type {string}
     * @memberof GetCompanyResponse
     */
    message?: string;
}

export function GetCompanyResponseFromJSON(json: any): GetCompanyResponse {
    return GetCompanyResponseFromJSONTyped(json, false);
}

export function GetCompanyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCompanyResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'company': !exists(json, 'company') ? undefined : CompanyFromJSON(json['company']),
        'succeeded': !exists(json, 'succeeded') ? undefined : json['succeeded'],
        'returnCode': !exists(json, 'returnCode') ? undefined : json['returnCode'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function GetCompanyResponseToJSON(value?: GetCompanyResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'company': CompanyToJSON(value.company),
        'succeeded': value.succeeded,
        'returnCode': value.returnCode,
        'message': value.message,
    };
}


