/* tslint:disable */
/* eslint-disable */
/**
 * SamgÃ¶ngustofa
 * Leitar eftir Ã¶kutÃ¦kjum Ãºt frÃ¡ fastanÃºmeri, skrï¿½ningarnÃºmeri eÃ°a verksmiÃ°junÃºmeri - Release-46 : 20241106.1
 *
 * The version of the OpenAPI document: v1
 * Contact: samgongustofa@samgongustofa.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface VehicleSearchOperatorDto
 */
export interface VehicleSearchOperatorDto {
    /**
     * 
     * @type {boolean}
     * @memberof VehicleSearchOperatorDto
     */
    mainoperator?: boolean | null;
    /**
     * 
     * @type {Date}
     * @memberof VehicleSearchOperatorDto
     */
    startdate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof VehicleSearchOperatorDto
     */
    enddate?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof VehicleSearchOperatorDto
     */
    persidno?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VehicleSearchOperatorDto
     */
    fullname?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VehicleSearchOperatorDto
     */
    address?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VehicleSearchOperatorDto
     */
    postalcode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VehicleSearchOperatorDto
     */
    city?: string | null;
}

export function VehicleSearchOperatorDtoFromJSON(json: any): VehicleSearchOperatorDto {
    return VehicleSearchOperatorDtoFromJSONTyped(json, false);
}

export function VehicleSearchOperatorDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): VehicleSearchOperatorDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mainoperator': !exists(json, 'mainoperator') ? undefined : json['mainoperator'],
        'startdate': !exists(json, 'startdate') ? undefined : (new Date(json['startdate'])),
        'enddate': !exists(json, 'enddate') ? undefined : (json['enddate'] === null ? null : new Date(json['enddate'])),
        'persidno': !exists(json, 'persidno') ? undefined : json['persidno'],
        'fullname': !exists(json, 'fullname') ? undefined : json['fullname'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'postalcode': !exists(json, 'postalcode') ? undefined : json['postalcode'],
        'city': !exists(json, 'city') ? undefined : json['city'],
    };
}

export function VehicleSearchOperatorDtoToJSON(value?: VehicleSearchOperatorDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mainoperator': value.mainoperator,
        'startdate': value.startdate === undefined ? undefined : (value.startdate.toISOString()),
        'enddate': value.enddate === undefined ? undefined : (value.enddate === null ? null : value.enddate.toISOString()),
        'persidno': value.persidno,
        'fullname': value.fullname,
        'address': value.address,
        'postalcode': value.postalcode,
        'city': value.city,
    };
}


