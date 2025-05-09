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
    AdvertType,
    AdvertTypeFromJSON,
    AdvertTypeFromJSONTyped,
    AdvertTypeToJSON,
    Department,
    DepartmentFromJSON,
    DepartmentFromJSONTyped,
    DepartmentToJSON,
} from './';

/**
 * 
 * @export
 * @interface AdvertMainType
 */
export interface AdvertMainType {
    /**
     * The id of the main advert type
     * @type {string}
     * @memberof AdvertMainType
     */
    id: string;
    /**
     * The title of the main advert type
     * @type {string}
     * @memberof AdvertMainType
     */
    title: string;
    /**
     * The slug of the main advert type
     * @type {string}
     * @memberof AdvertMainType
     */
    slug: string;
    /**
     * The department this main type belongs to
     * @type {Department}
     * @memberof AdvertMainType
     */
    department: Department;
    /**
     * All types under this main type
     * @type {Array<AdvertType>}
     * @memberof AdvertMainType
     */
    types: Array<AdvertType>;
}

export function AdvertMainTypeFromJSON(json: any): AdvertMainType {
    return AdvertMainTypeFromJSONTyped(json, false);
}

export function AdvertMainTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdvertMainType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'title': json['title'],
        'slug': json['slug'],
        'department': DepartmentFromJSON(json['department']),
        'types': ((json['types'] as Array<any>).map(AdvertTypeFromJSON)),
    };
}

export function AdvertMainTypeToJSON(value?: AdvertMainType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'title': value.title,
        'slug': value.slug,
        'department': DepartmentToJSON(value.department),
        'types': ((value.types as Array<any>).map(AdvertTypeToJSON)),
    };
}


