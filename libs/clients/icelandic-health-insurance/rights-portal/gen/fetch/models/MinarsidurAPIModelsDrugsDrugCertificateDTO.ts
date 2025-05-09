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
import {
    MinarsidurAPIModelsDrugsDrugCertificateDTODrugCertificateStatusEnum,
    MinarsidurAPIModelsDrugsDrugCertificateDTODrugCertificateStatusEnumFromJSON,
    MinarsidurAPIModelsDrugsDrugCertificateDTODrugCertificateStatusEnumFromJSONTyped,
    MinarsidurAPIModelsDrugsDrugCertificateDTODrugCertificateStatusEnumToJSON,
    MinarsidurAPIModelsDrugsMethylDoctorDTO,
    MinarsidurAPIModelsDrugsMethylDoctorDTOFromJSON,
    MinarsidurAPIModelsDrugsMethylDoctorDTOFromJSONTyped,
    MinarsidurAPIModelsDrugsMethylDoctorDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface MinarsidurAPIModelsDrugsDrugCertificateDTO
 */
export interface MinarsidurAPIModelsDrugsDrugCertificateDTO {
    /**
     * 
     * @type {number}
     * @memberof MinarsidurAPIModelsDrugsDrugCertificateDTO
     */
    id?: number | null;
    /**
     * 
     * @type {string}
     * @memberof MinarsidurAPIModelsDrugsDrugCertificateDTO
     */
    atcCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MinarsidurAPIModelsDrugsDrugCertificateDTO
     */
    atcName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MinarsidurAPIModelsDrugsDrugCertificateDTO
     */
    drugName?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof MinarsidurAPIModelsDrugsDrugCertificateDTO
     */
    date?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof MinarsidurAPIModelsDrugsDrugCertificateDTO
     */
    validFrom?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof MinarsidurAPIModelsDrugsDrugCertificateDTO
     */
    validTo?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof MinarsidurAPIModelsDrugsDrugCertificateDTO
     */
    doctor?: string | null;
    /**
     * 
     * @type {MinarsidurAPIModelsDrugsDrugCertificateDTODrugCertificateStatusEnum}
     * @memberof MinarsidurAPIModelsDrugsDrugCertificateDTO
     */
    status?: MinarsidurAPIModelsDrugsDrugCertificateDTODrugCertificateStatusEnum;
    /**
     * 
     * @type {boolean}
     * @memberof MinarsidurAPIModelsDrugsDrugCertificateDTO
     */
    readonly processed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MinarsidurAPIModelsDrugsDrugCertificateDTO
     */
    approved?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof MinarsidurAPIModelsDrugsDrugCertificateDTO
     */
    readonly rejected?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof MinarsidurAPIModelsDrugsDrugCertificateDTO
     */
    readonly expired?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof MinarsidurAPIModelsDrugsDrugCertificateDTO
     */
    readonly valid?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MinarsidurAPIModelsDrugsDrugCertificateDTO
     */
    comment?: string | null;
    /**
     * 
     * @type {number}
     * @memberof MinarsidurAPIModelsDrugsDrugCertificateDTO
     */
    documentId?: number | null;
    /**
     * 
     * @type {Array<MinarsidurAPIModelsDrugsMethylDoctorDTO>}
     * @memberof MinarsidurAPIModelsDrugsDrugCertificateDTO
     */
    methylDoctors?: Array<MinarsidurAPIModelsDrugsMethylDoctorDTO> | null;
}

export function MinarsidurAPIModelsDrugsDrugCertificateDTOFromJSON(json: any): MinarsidurAPIModelsDrugsDrugCertificateDTO {
    return MinarsidurAPIModelsDrugsDrugCertificateDTOFromJSONTyped(json, false);
}

export function MinarsidurAPIModelsDrugsDrugCertificateDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MinarsidurAPIModelsDrugsDrugCertificateDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'atcCode': !exists(json, 'atcCode') ? undefined : json['atcCode'],
        'atcName': !exists(json, 'atcName') ? undefined : json['atcName'],
        'drugName': !exists(json, 'drugName') ? undefined : json['drugName'],
        'date': !exists(json, 'date') ? undefined : (json['date'] === null ? null : new Date(json['date'])),
        'validFrom': !exists(json, 'validFrom') ? undefined : (json['validFrom'] === null ? null : new Date(json['validFrom'])),
        'validTo': !exists(json, 'validTo') ? undefined : (json['validTo'] === null ? null : new Date(json['validTo'])),
        'doctor': !exists(json, 'doctor') ? undefined : json['doctor'],
        'status': !exists(json, 'status') ? undefined : MinarsidurAPIModelsDrugsDrugCertificateDTODrugCertificateStatusEnumFromJSON(json['status']),
        'processed': !exists(json, 'processed') ? undefined : json['processed'],
        'approved': !exists(json, 'approved') ? undefined : json['approved'],
        'rejected': !exists(json, 'rejected') ? undefined : json['rejected'],
        'expired': !exists(json, 'expired') ? undefined : json['expired'],
        'valid': !exists(json, 'valid') ? undefined : json['valid'],
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'methylDoctors': !exists(json, 'methylDoctors') ? undefined : (json['methylDoctors'] === null ? null : (json['methylDoctors'] as Array<any>).map(MinarsidurAPIModelsDrugsMethylDoctorDTOFromJSON)),
    };
}

export function MinarsidurAPIModelsDrugsDrugCertificateDTOToJSON(value?: MinarsidurAPIModelsDrugsDrugCertificateDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'atcCode': value.atcCode,
        'atcName': value.atcName,
        'drugName': value.drugName,
        'date': value.date === undefined ? undefined : (value.date === null ? null : value.date.toISOString().substr(0,10)),
        'validFrom': value.validFrom === undefined ? undefined : (value.validFrom === null ? null : value.validFrom.toISOString().substr(0,10)),
        'validTo': value.validTo === undefined ? undefined : (value.validTo === null ? null : value.validTo.toISOString().substr(0,10)),
        'doctor': value.doctor,
        'status': MinarsidurAPIModelsDrugsDrugCertificateDTODrugCertificateStatusEnumToJSON(value.status),
        'approved': value.approved,
        'comment': value.comment,
        'documentId': value.documentId,
        'methylDoctors': value.methylDoctors === undefined ? undefined : (value.methylDoctors === null ? null : (value.methylDoctors as Array<any>).map(MinarsidurAPIModelsDrugsMethylDoctorDTOToJSON)),
    };
}


