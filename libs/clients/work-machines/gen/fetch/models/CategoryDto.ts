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
 * @interface CategoryDto
 */
export interface CategoryDto {
    /**
     * 
     * @type {string}
     * @memberof CategoryDto
     */
    category?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CategoryDto
     */
    paymentRequiredForOwnerChange?: boolean;
}

export function CategoryDtoFromJSON(json: any): CategoryDto {
    return CategoryDtoFromJSONTyped(json, false);
}

export function CategoryDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoryDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'category': !exists(json, 'category') ? undefined : json['category'],
        'paymentRequiredForOwnerChange': !exists(json, 'paymentRequiredForOwnerChange') ? undefined : json['paymentRequiredForOwnerChange'],
    };
}

export function CategoryDtoToJSON(value?: CategoryDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'category': value.category,
        'paymentRequiredForOwnerChange': value.paymentRequiredForOwnerChange,
    };
}


