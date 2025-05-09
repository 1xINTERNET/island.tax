/* tslint:disable */
/* eslint-disable */
/**
 * Tilkynna vinnuslys
 * Vefþjónusta til þess að senda inn tilkynningar um vinnuslys.
 *
 * The version of the OpenAPI document: v1
 * Contact: ut@vinnueftirlit.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AbsenceDueToAccidentDto
 */
export interface AbsenceDueToAccidentDto {
    /**
     * 
     * @type {string}
     * @memberof AbsenceDueToAccidentDto
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDueToAccidentDto
     */
    name?: string | null;
}

export function AbsenceDueToAccidentDtoFromJSON(json: any): AbsenceDueToAccidentDto {
    return AbsenceDueToAccidentDtoFromJSONTyped(json, false);
}

export function AbsenceDueToAccidentDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AbsenceDueToAccidentDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function AbsenceDueToAccidentDtoToJSON(value?: AbsenceDueToAccidentDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'name': value.name,
    };
}


