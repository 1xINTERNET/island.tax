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
/**
 * 
 * @export
 * @interface AdminClientClaimDto
 */
export interface AdminClientClaimDto {
    /**
     * The type of the claim use as the key in the JWT token along with client claim prefix.
     * @type {string}
     * @memberof AdminClientClaimDto
     */
    type: string;
    /**
     * The value of the claim.
     * @type {string}
     * @memberof AdminClientClaimDto
     */
    value: string;
}

export function AdminClientClaimDtoFromJSON(json: any): AdminClientClaimDto {
    return AdminClientClaimDtoFromJSONTyped(json, false);
}

export function AdminClientClaimDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdminClientClaimDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'value': json['value'],
    };
}

export function AdminClientClaimDtoToJSON(value?: AdminClientClaimDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'value': value.value,
    };
}


