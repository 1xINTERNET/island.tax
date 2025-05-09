/* tslint:disable */
/* eslint-disable */
/**
 * Þjónustugátt starfskerfa sýslumanna
 * Rafrænn aðgengi að gögnum og aðgerðum starfskerfis sýslumanna
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
    UppfaeraHeimagistingDetail,
    UppfaeraHeimagistingDetailFromJSON,
    UppfaeraHeimagistingDetailFromJSONTyped,
    UppfaeraHeimagistingDetailToJSON,
} from './';

/**
 * 
 * @export
 * @interface UppfaeraHeimagistingarModel
 */
export interface UppfaeraHeimagistingarModel {
    /**
     * 
     * @type {Array<UppfaeraHeimagistingDetail>}
     * @memberof UppfaeraHeimagistingarModel
     */
    leyfi?: Array<UppfaeraHeimagistingDetail> | null;
}

export function UppfaeraHeimagistingarModelFromJSON(json: any): UppfaeraHeimagistingarModel {
    return UppfaeraHeimagistingarModelFromJSONTyped(json, false);
}

export function UppfaeraHeimagistingarModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): UppfaeraHeimagistingarModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'leyfi': !exists(json, 'leyfi') ? undefined : (json['leyfi'] === null ? null : (json['leyfi'] as Array<any>).map(UppfaeraHeimagistingDetailFromJSON)),
    };
}

export function UppfaeraHeimagistingarModelToJSON(value?: UppfaeraHeimagistingarModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'leyfi': value.leyfi === undefined ? undefined : (value.leyfi === null ? null : (value.leyfi as Array<any>).map(UppfaeraHeimagistingDetailToJSON)),
    };
}


