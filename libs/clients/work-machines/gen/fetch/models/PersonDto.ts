/* tslint:disable */
/* eslint-disable */
/**
 * Vinnuvélauppfletting
 * Vefþjónusta til þess að fletta upp á vinnuvélum.
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
 * @interface PersonDto
 */
export interface PersonDto {
    /**
     * 
     * @type {string}
     * @memberof PersonDto
     */
    nationalId: string;
    /**
     * 
     * @type {string}
     * @memberof PersonDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PersonDto
     */
    address: string;
    /**
     * 
     * @type {number}
     * @memberof PersonDto
     */
    postalCode: number;
    /**
     * 
     * @type {string}
     * @memberof PersonDto
     */
    gsm: string;
    /**
     * 
     * @type {string}
     * @memberof PersonDto
     */
    email: string;
}

export function PersonDtoFromJSON(json: any): PersonDto {
    return PersonDtoFromJSONTyped(json, false);
}

export function PersonDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nationalId': json['nationalId'],
        'name': json['name'],
        'address': json['address'],
        'postalCode': json['postalCode'],
        'gsm': json['gsm'],
        'email': json['email'],
    };
}

export function PersonDtoToJSON(value?: PersonDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nationalId': value.nationalId,
        'name': value.name,
        'address': value.address,
        'postalCode': value.postalCode,
        'gsm': value.gsm,
        'email': value.email,
    };
}


