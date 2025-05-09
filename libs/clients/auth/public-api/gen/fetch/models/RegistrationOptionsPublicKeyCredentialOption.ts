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
 * @interface RegistrationOptionsPublicKeyCredentialOption
 */
export interface RegistrationOptionsPublicKeyCredentialOption {
    /**
     * 
     * @type {number}
     * @memberof RegistrationOptionsPublicKeyCredentialOption
     */
    alg: number;
    /**
     * 
     * @type {string}
     * @memberof RegistrationOptionsPublicKeyCredentialOption
     */
    type: string;
}

export function RegistrationOptionsPublicKeyCredentialOptionFromJSON(json: any): RegistrationOptionsPublicKeyCredentialOption {
    return RegistrationOptionsPublicKeyCredentialOptionFromJSONTyped(json, false);
}

export function RegistrationOptionsPublicKeyCredentialOptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegistrationOptionsPublicKeyCredentialOption {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alg': json['alg'],
        'type': json['type'],
    };
}

export function RegistrationOptionsPublicKeyCredentialOptionToJSON(value?: RegistrationOptionsPublicKeyCredentialOption | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alg': value.alg,
        'type': value.type,
    };
}


