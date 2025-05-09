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
import {
    RegistrationResponseClientExtensionResults,
    RegistrationResponseClientExtensionResultsFromJSON,
    RegistrationResponseClientExtensionResultsFromJSONTyped,
    RegistrationResponseClientExtensionResultsToJSON,
    RegistrationResponseResponse,
    RegistrationResponseResponseFromJSON,
    RegistrationResponseResponseFromJSONTyped,
    RegistrationResponseResponseToJSON,
} from './';

/**
 * 
 * @export
 * @interface RegistrationResponse
 */
export interface RegistrationResponse {
    /**
     * 
     * @type {string}
     * @memberof RegistrationResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationResponse
     */
    rawId: string;
    /**
     * 
     * @type {RegistrationResponseResponse}
     * @memberof RegistrationResponse
     */
    response: RegistrationResponseResponse;
    /**
     * 
     * @type {string}
     * @memberof RegistrationResponse
     */
    authenticatorAttachment?: string;
    /**
     * 
     * @type {RegistrationResponseClientExtensionResults}
     * @memberof RegistrationResponse
     */
    clientExtensionResults: RegistrationResponseClientExtensionResults;
    /**
     * 
     * @type {string}
     * @memberof RegistrationResponse
     */
    type: string;
}

export function RegistrationResponseFromJSON(json: any): RegistrationResponse {
    return RegistrationResponseFromJSONTyped(json, false);
}

export function RegistrationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegistrationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'rawId': json['rawId'],
        'response': RegistrationResponseResponseFromJSON(json['response']),
        'authenticatorAttachment': !exists(json, 'authenticatorAttachment') ? undefined : json['authenticatorAttachment'],
        'clientExtensionResults': RegistrationResponseClientExtensionResultsFromJSON(json['clientExtensionResults']),
        'type': json['type'],
    };
}

export function RegistrationResponseToJSON(value?: RegistrationResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'rawId': value.rawId,
        'response': RegistrationResponseResponseToJSON(value.response),
        'authenticatorAttachment': value.authenticatorAttachment,
        'clientExtensionResults': RegistrationResponseClientExtensionResultsToJSON(value.clientExtensionResults),
        'type': value.type,
    };
}


