/* tslint:disable */
/* eslint-disable */
/**
 * IdentityServer Internal Delegation API
 * Internal API for IdentityServer to manage delegations.   The swagger document can be downloaded by appending `-json` to the last path segment.
 *
 * The version of the OpenAPI document: 1.0
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
 * @interface LoginRestriction
 */
export interface LoginRestriction {
    /**
     * 
     * @type {string}
     * @memberof LoginRestriction
     */
    nationalId: string;
    /**
     * 
     * @type {string}
     * @memberof LoginRestriction
     */
    phoneNumber: string;
    /**
     * 
     * @type {Date}
     * @memberof LoginRestriction
     */
    until: Date;
}

export function LoginRestrictionFromJSON(json: any): LoginRestriction {
    return LoginRestrictionFromJSONTyped(json, false);
}

export function LoginRestrictionFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginRestriction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nationalId': json['nationalId'],
        'phoneNumber': json['phoneNumber'],
        'until': (new Date(json['until'])),
    };
}

export function LoginRestrictionToJSON(value?: LoginRestriction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nationalId': value.nationalId,
        'phoneNumber': value.phoneNumber,
        'until': (value.until.toISOString()),
    };
}


