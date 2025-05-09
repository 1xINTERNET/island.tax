/* tslint:disable */
/* eslint-disable */
/**
 * IdentityServer Admin api
 * Api for administration.
 *
 * The version of the OpenAPI document: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    DelegationDTO,
    DelegationDTOFromJSON,
    DelegationDTOFromJSONTyped,
    DelegationDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface DelegationAdminCustomDto
 */
export interface DelegationAdminCustomDto {
    /**
     * 
     * @type {Array<DelegationDTO>}
     * @memberof DelegationAdminCustomDto
     */
    incoming: Array<DelegationDTO>;
    /**
     * 
     * @type {Array<DelegationDTO>}
     * @memberof DelegationAdminCustomDto
     */
    outgoing: Array<DelegationDTO>;
}

export function DelegationAdminCustomDtoFromJSON(json: any): DelegationAdminCustomDto {
    return DelegationAdminCustomDtoFromJSONTyped(json, false);
}

export function DelegationAdminCustomDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DelegationAdminCustomDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'incoming': ((json['incoming'] as Array<any>).map(DelegationDTOFromJSON)),
        'outgoing': ((json['outgoing'] as Array<any>).map(DelegationDTOFromJSON)),
    };
}

export function DelegationAdminCustomDtoToJSON(value?: DelegationAdminCustomDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'incoming': ((value.incoming as Array<any>).map(DelegationDTOToJSON)),
        'outgoing': ((value.outgoing as Array<any>).map(DelegationDTOToJSON)),
    };
}


