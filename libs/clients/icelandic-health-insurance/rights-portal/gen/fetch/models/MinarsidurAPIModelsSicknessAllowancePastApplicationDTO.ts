/* tslint:disable */
/* eslint-disable */
/**
 * Minarsidur
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
 * 
 * @export
 * @interface MinarsidurAPIModelsSicknessAllowancePastApplicationDTO
 */
export interface MinarsidurAPIModelsSicknessAllowancePastApplicationDTO {
    /**
     * 
     * @type {number}
     * @memberof MinarsidurAPIModelsSicknessAllowancePastApplicationDTO
     */
    id?: number | null;
    /**
     * 
     * @type {number}
     * @memberof MinarsidurAPIModelsSicknessAllowancePastApplicationDTO
     */
    documentId?: number | null;
    /**
     * 
     * @type {Date}
     * @memberof MinarsidurAPIModelsSicknessAllowancePastApplicationDTO
     */
    received?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof MinarsidurAPIModelsSicknessAllowancePastApplicationDTO
     */
    status?: string | null;
}

export function MinarsidurAPIModelsSicknessAllowancePastApplicationDTOFromJSON(json: any): MinarsidurAPIModelsSicknessAllowancePastApplicationDTO {
    return MinarsidurAPIModelsSicknessAllowancePastApplicationDTOFromJSONTyped(json, false);
}

export function MinarsidurAPIModelsSicknessAllowancePastApplicationDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MinarsidurAPIModelsSicknessAllowancePastApplicationDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'received': !exists(json, 'received') ? undefined : (json['received'] === null ? null : new Date(json['received'])),
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function MinarsidurAPIModelsSicknessAllowancePastApplicationDTOToJSON(value?: MinarsidurAPIModelsSicknessAllowancePastApplicationDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'documentId': value.documentId,
        'received': value.received === undefined ? undefined : (value.received === null ? null : value.received.toISOString().substr(0,10)),
        'status': value.status,
    };
}


