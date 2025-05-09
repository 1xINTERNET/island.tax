/* tslint:disable */
/* eslint-disable */
/**
 * MedmaeliRestAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
    FrambodBaseDTO,
    FrambodBaseDTOFromJSON,
    FrambodBaseDTOFromJSONTyped,
    FrambodBaseDTOToJSON,
    MedmaelasofnunBaseDTO,
    MedmaelasofnunBaseDTOFromJSON,
    MedmaelasofnunBaseDTOFromJSONTyped,
    MedmaelasofnunBaseDTOToJSON,
    SvaediDTO,
    SvaediDTOFromJSON,
    SvaediDTOFromJSONTyped,
    SvaediDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface MedmaelalistiExtendedDTO
 */
export interface MedmaelalistiExtendedDTO {
    /**
     * 
     * @type {number}
     * @memberof MedmaelalistiExtendedDTO
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof MedmaelalistiExtendedDTO
     */
    medmaelasofnunID?: number;
    /**
     * 
     * @type {number}
     * @memberof MedmaelalistiExtendedDTO
     */
    frambodID?: number;
    /**
     * 
     * @type {string}
     * @memberof MedmaelalistiExtendedDTO
     */
    frambodNafn: string;
    /**
     * 
     * @type {string}
     * @memberof MedmaelalistiExtendedDTO
     */
    listiNafn: string;
    /**
     * 
     * @type {string}
     * @memberof MedmaelalistiExtendedDTO
     */
    frambodSimi?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MedmaelalistiExtendedDTO
     */
    frambodNetfang?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof MedmaelalistiExtendedDTO
     */
    dagsetningLokar?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof MedmaelalistiExtendedDTO
     */
    lokadHandvirkt?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MedmaelalistiExtendedDTO
     */
    listaLokad?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MedmaelalistiExtendedDTO
     */
    urvinnslaLokid?: boolean;
    /**
     * 
     * @type {SvaediDTO}
     * @memberof MedmaelalistiExtendedDTO
     */
    svaedi?: SvaediDTO;
    /**
     * 
     * @type {number}
     * @memberof MedmaelalistiExtendedDTO
     */
    fjoldiMedmaela?: number;
    /**
     * 
     * @type {FrambodBaseDTO}
     * @memberof MedmaelalistiExtendedDTO
     */
    frambod?: FrambodBaseDTO;
    /**
     * 
     * @type {MedmaelasofnunBaseDTO}
     * @memberof MedmaelalistiExtendedDTO
     */
    medmaelasofnun?: MedmaelasofnunBaseDTO;
    /**
     * 
     * @type {number}
     * @memberof MedmaelalistiExtendedDTO
     */
    fjoldiMedmaelaRafraen?: number;
    /**
     * 
     * @type {number}
     * @memberof MedmaelalistiExtendedDTO
     */
    fjoldiMedmaelaSkrifleg?: number;
}

export function MedmaelalistiExtendedDTOFromJSON(json: any): MedmaelalistiExtendedDTO {
    return MedmaelalistiExtendedDTOFromJSONTyped(json, false);
}

export function MedmaelalistiExtendedDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MedmaelalistiExtendedDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'medmaelasofnunID': !exists(json, 'medmaelasofnunID') ? undefined : json['medmaelasofnunID'],
        'frambodID': !exists(json, 'frambodID') ? undefined : json['frambodID'],
        'frambodNafn': json['frambodNafn'],
        'listiNafn': json['listiNafn'],
        'frambodSimi': !exists(json, 'frambodSimi') ? undefined : json['frambodSimi'],
        'frambodNetfang': !exists(json, 'frambodNetfang') ? undefined : json['frambodNetfang'],
        'dagsetningLokar': !exists(json, 'dagsetningLokar') ? undefined : (new Date(json['dagsetningLokar'])),
        'lokadHandvirkt': !exists(json, 'lokadHandvirkt') ? undefined : json['lokadHandvirkt'],
        'listaLokad': !exists(json, 'listaLokad') ? undefined : json['listaLokad'],
        'urvinnslaLokid': !exists(json, 'urvinnslaLokid') ? undefined : json['urvinnslaLokid'],
        'svaedi': !exists(json, 'svaedi') ? undefined : SvaediDTOFromJSON(json['svaedi']),
        'fjoldiMedmaela': !exists(json, 'fjoldiMedmaela') ? undefined : json['fjoldiMedmaela'],
        'frambod': !exists(json, 'frambod') ? undefined : FrambodBaseDTOFromJSON(json['frambod']),
        'medmaelasofnun': !exists(json, 'medmaelasofnun') ? undefined : MedmaelasofnunBaseDTOFromJSON(json['medmaelasofnun']),
        'fjoldiMedmaelaRafraen': !exists(json, 'fjoldiMedmaelaRafraen') ? undefined : json['fjoldiMedmaelaRafraen'],
        'fjoldiMedmaelaSkrifleg': !exists(json, 'fjoldiMedmaelaSkrifleg') ? undefined : json['fjoldiMedmaelaSkrifleg'],
    };
}

export function MedmaelalistiExtendedDTOToJSON(value?: MedmaelalistiExtendedDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'medmaelasofnunID': value.medmaelasofnunID,
        'frambodID': value.frambodID,
        'frambodNafn': value.frambodNafn,
        'listiNafn': value.listiNafn,
        'frambodSimi': value.frambodSimi,
        'frambodNetfang': value.frambodNetfang,
        'dagsetningLokar': value.dagsetningLokar === undefined ? undefined : (value.dagsetningLokar.toISOString()),
        'lokadHandvirkt': value.lokadHandvirkt,
        'listaLokad': value.listaLokad,
        'urvinnslaLokid': value.urvinnslaLokid,
        'svaedi': SvaediDTOToJSON(value.svaedi),
        'fjoldiMedmaela': value.fjoldiMedmaela,
        'frambod': FrambodBaseDTOToJSON(value.frambod),
        'medmaelasofnun': MedmaelasofnunBaseDTOToJSON(value.medmaelasofnun),
        'fjoldiMedmaelaRafraen': value.fjoldiMedmaelaRafraen,
        'fjoldiMedmaelaSkrifleg': value.fjoldiMedmaelaSkrifleg,
    };
}


