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
 * @interface AuthenticationOptionsPublicKeyCredentialDescriptor
 */
export interface AuthenticationOptionsPublicKeyCredentialDescriptor {
    /**
     * 
     * @type {string}
     * @memberof AuthenticationOptionsPublicKeyCredentialDescriptor
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationOptionsPublicKeyCredentialDescriptor
     */
    type: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof AuthenticationOptionsPublicKeyCredentialDescriptor
     */
    transports: Array<string>;
}

export function AuthenticationOptionsPublicKeyCredentialDescriptorFromJSON(json: any): AuthenticationOptionsPublicKeyCredentialDescriptor {
    return AuthenticationOptionsPublicKeyCredentialDescriptorFromJSONTyped(json, false);
}

export function AuthenticationOptionsPublicKeyCredentialDescriptorFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthenticationOptionsPublicKeyCredentialDescriptor {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': json['type'],
        'transports': json['transports'],
    };
}

export function AuthenticationOptionsPublicKeyCredentialDescriptorToJSON(value?: AuthenticationOptionsPublicKeyCredentialDescriptor | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'type': value.type,
        'transports': value.transports,
    };
}


