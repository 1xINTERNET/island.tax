/* tslint:disable */
/* eslint-disable */
/**
 * The Official Journal of Iceland API
 * API for advarts and publication in the Official Journal of Iceland.
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
    Advert,
    AdvertFromJSON,
    AdvertFromJSONTyped,
    AdvertToJSON,
    Paging,
    PagingFromJSON,
    PagingFromJSONTyped,
    PagingToJSON,
} from './';

/**
 * 
 * @export
 * @interface GetAdvertsResponse
 */
export interface GetAdvertsResponse {
    /**
     * List of adverts
     * @type {Array<Advert>}
     * @memberof GetAdvertsResponse
     */
    adverts: Array<Advert>;
    /**
     * Paging info
     * @type {Paging}
     * @memberof GetAdvertsResponse
     */
    paging: Paging;
}

export function GetAdvertsResponseFromJSON(json: any): GetAdvertsResponse {
    return GetAdvertsResponseFromJSONTyped(json, false);
}

export function GetAdvertsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAdvertsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'adverts': ((json['adverts'] as Array<any>).map(AdvertFromJSON)),
        'paging': PagingFromJSON(json['paging']),
    };
}

export function GetAdvertsResponseToJSON(value?: GetAdvertsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'adverts': ((value.adverts as Array<any>).map(AdvertToJSON)),
        'paging': PagingToJSON(value.paging),
    };
}


