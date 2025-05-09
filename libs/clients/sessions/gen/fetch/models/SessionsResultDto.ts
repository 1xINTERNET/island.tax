/* tslint:disable */
/* eslint-disable */
/**
 * Session log API
 * Session log to track user sessions.   The swagger document can be downloaded by appending `-json` to the last path segment.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    PageInfoDto,
    PageInfoDtoFromJSON,
    PageInfoDtoFromJSONTyped,
    PageInfoDtoToJSON,
    Session,
    SessionFromJSON,
    SessionFromJSONTyped,
    SessionToJSON,
} from './';

/**
 * 
 * @export
 * @interface SessionsResultDto
 */
export interface SessionsResultDto {
    /**
     * 
     * @type {number}
     * @memberof SessionsResultDto
     */
    totalCount: number;
    /**
     * 
     * @type {Array<Session>}
     * @memberof SessionsResultDto
     */
    data: Array<Session>;
    /**
     * 
     * @type {PageInfoDto}
     * @memberof SessionsResultDto
     */
    pageInfo: PageInfoDto;
}

export function SessionsResultDtoFromJSON(json: any): SessionsResultDto {
    return SessionsResultDtoFromJSONTyped(json, false);
}

export function SessionsResultDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionsResultDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalCount': json['totalCount'],
        'data': ((json['data'] as Array<any>).map(SessionFromJSON)),
        'pageInfo': PageInfoDtoFromJSON(json['pageInfo']),
    };
}

export function SessionsResultDtoToJSON(value?: SessionsResultDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'totalCount': value.totalCount,
        'data': ((value.data as Array<any>).map(SessionToJSON)),
        'pageInfo': PageInfoDtoToJSON(value.pageInfo),
    };
}


