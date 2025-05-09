/* tslint:disable */
/* eslint-disable */
/**
 * GoPro External Integration REST Services - API version 1.0
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Journal key category
 * @export
 * @interface JournalKey
 */
export interface JournalKey {
    /**
     * Journal key ID
     * @type {string}
     * @memberof JournalKey
     */
    journalKeyID?: string;
    /**
     * Gets or sets binary flag for the journal key being a primary for the target
     * @type {boolean}
     * @memberof JournalKey
     */
    isPrimary?: boolean;
}

export function JournalKeyFromJSON(json: any): JournalKey {
    return JournalKeyFromJSONTyped(json, false);
}

export function JournalKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): JournalKey {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'journalKeyID': !exists(json, 'journalKeyID') ? undefined : json['journalKeyID'],
        'isPrimary': !exists(json, 'isPrimary') ? undefined : json['isPrimary'],
    };
}

export function JournalKeyToJSON(value?: JournalKey | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'journalKeyID': value.journalKeyID,
        'isPrimary': value.isPrimary,
    };
}


