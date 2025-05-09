/* tslint:disable */
/* eslint-disable */
/**
 * IdentityServer Public API
 * Public API for IdentityServer.   The swagger document can be downloaded by appending `-json` to the last path segment.
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
 * @interface RegistrationOptionsRp
 */
export interface RegistrationOptionsRp {
    /**
     * 
     * @type {string}
     * @memberof RegistrationOptionsRp
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationOptionsRp
     */
    name: string;
}

export function RegistrationOptionsRpFromJSON(json: any): RegistrationOptionsRp {
    return RegistrationOptionsRpFromJSONTyped(json, false);
}

export function RegistrationOptionsRpFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegistrationOptionsRp {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': json['name'],
    };
}

export function RegistrationOptionsRpToJSON(value?: RegistrationOptionsRp | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
    };
}


