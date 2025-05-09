/* tslint:disable */
/* eslint-disable */
/**
 * Miðlun API - V1.0
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    EinstaklingurDTOFaeding,
    EinstaklingurDTOFaedingFromJSON,
    EinstaklingurDTOFaedingFromJSONTyped,
    EinstaklingurDTOFaedingToJSON,
    EinstaklingurDTOForsja,
    EinstaklingurDTOForsjaFromJSON,
    EinstaklingurDTOForsjaFromJSONTyped,
    EinstaklingurDTOForsjaToJSON,
    EinstaklingurDTOHeimili,
    EinstaklingurDTOHeimiliFromJSON,
    EinstaklingurDTOHeimiliFromJSONTyped,
    EinstaklingurDTOHeimiliToJSON,
    EinstaklingurDTOHju,
    EinstaklingurDTOHjuFromJSON,
    EinstaklingurDTOHjuFromJSONTyped,
    EinstaklingurDTOHjuToJSON,
    EinstaklingurDTOItar,
    EinstaklingurDTOItarFromJSON,
    EinstaklingurDTOItarFromJSONTyped,
    EinstaklingurDTOItarToJSON,
    EinstaklingurDTOKyn,
    EinstaklingurDTOKynFromJSON,
    EinstaklingurDTOKynFromJSONTyped,
    EinstaklingurDTOKynToJSON,
    EinstaklingurDTOLatnir1,
    EinstaklingurDTOLatnir1FromJSON,
    EinstaklingurDTOLatnir1FromJSONTyped,
    EinstaklingurDTOLatnir1ToJSON,
    EinstaklingurDTOLatnir2,
    EinstaklingurDTOLatnir2FromJSON,
    EinstaklingurDTOLatnir2FromJSONTyped,
    EinstaklingurDTOLatnir2ToJSON,
    EinstaklingurDTOLogforeldrar,
    EinstaklingurDTOLogforeldrarFromJSON,
    EinstaklingurDTOLogforeldrarFromJSONTyped,
    EinstaklingurDTOLogforeldrarToJSON,
    EinstaklingurDTOLoghTengsl,
    EinstaklingurDTOLoghTengslFromJSON,
    EinstaklingurDTOLoghTengslFromJSONTyped,
    EinstaklingurDTOLoghTengslToJSON,
    EinstaklingurDTONafnAllt,
    EinstaklingurDTONafnAlltFromJSON,
    EinstaklingurDTONafnAlltFromJSONTyped,
    EinstaklingurDTONafnAlltToJSON,
    EinstaklingurDTONyskra,
    EinstaklingurDTONyskraFromJSON,
    EinstaklingurDTONyskraFromJSONTyped,
    EinstaklingurDTONyskraToJSON,
    EinstaklingurDTORikisfang,
    EinstaklingurDTORikisfangFromJSON,
    EinstaklingurDTORikisfangFromJSONTyped,
    EinstaklingurDTORikisfangToJSON,
    EinstaklingurDTOTru,
    EinstaklingurDTOTruFromJSON,
    EinstaklingurDTOTruFromJSONTyped,
    EinstaklingurDTOTruToJSON,
} from './';

/**
 * 
 * @export
 * @interface EinstaklingurDTOAllt
 */
export interface EinstaklingurDTOAllt {
    /**
     * 
     * @type {string}
     * @memberof EinstaklingurDTOAllt
     */
    kennitala?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EinstaklingurDTOAllt
     */
    nafn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EinstaklingurDTOAllt
     */
    tegundKennitolu?: string | null;
    /**
     * 
     * @type {number}
     * @memberof EinstaklingurDTOAllt
     */
    tegundEinstaklingsNr?: number;
    /**
     * 
     * @type {string}
     * @memberof EinstaklingurDTOAllt
     */
    tegundEinstaklingsLysing?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof EinstaklingurDTOAllt
     */
    bannmerking?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof EinstaklingurDTOAllt
     */
    afdrif?: string | null;
    /**
     * 
     * @type {EinstaklingurDTOHeimili}
     * @memberof EinstaklingurDTOAllt
     */
    heimilisfang?: EinstaklingurDTOHeimili;
    /**
     * 
     * @type {EinstaklingurDTOLoghTengsl}
     * @memberof EinstaklingurDTOAllt
     */
    logheimilistengsl?: EinstaklingurDTOLoghTengsl;
    /**
     * 
     * @type {EinstaklingurDTOItar}
     * @memberof EinstaklingurDTOAllt
     */
    itarupplysingar?: EinstaklingurDTOItar;
    /**
     * 
     * @type {EinstaklingurDTOHju}
     * @memberof EinstaklingurDTOAllt
     */
    hjuskaparstada?: EinstaklingurDTOHju;
    /**
     * 
     * @type {EinstaklingurDTOKyn}
     * @memberof EinstaklingurDTOAllt
     */
    kyn?: EinstaklingurDTOKyn;
    /**
     * 
     * @type {EinstaklingurDTORikisfang}
     * @memberof EinstaklingurDTOAllt
     */
    rikisfang?: EinstaklingurDTORikisfang;
    /**
     * 
     * @type {EinstaklingurDTOForsja}
     * @memberof EinstaklingurDTOAllt
     */
    forsja?: EinstaklingurDTOForsja;
    /**
     * 
     * @type {EinstaklingurDTOFaeding}
     * @memberof EinstaklingurDTOAllt
     */
    faedingarstadur?: EinstaklingurDTOFaeding;
    /**
     * 
     * @type {EinstaklingurDTOLatnir1}
     * @memberof EinstaklingurDTOAllt
     */
    latnir?: EinstaklingurDTOLatnir1;
    /**
     * 
     * @type {EinstaklingurDTOLatnir2}
     * @memberof EinstaklingurDTOAllt
     */
    latnirItar?: EinstaklingurDTOLatnir2;
    /**
     * 
     * @type {EinstaklingurDTOLogforeldrar}
     * @memberof EinstaklingurDTOAllt
     */
    logforeldrar?: EinstaklingurDTOLogforeldrar;
    /**
     * 
     * @type {EinstaklingurDTONafnAllt}
     * @memberof EinstaklingurDTOAllt
     */
    fulltNafn?: EinstaklingurDTONafnAllt;
    /**
     * 
     * @type {EinstaklingurDTONyskra}
     * @memberof EinstaklingurDTOAllt
     */
    nyskraningDagsetning?: EinstaklingurDTONyskra;
    /**
     * 
     * @type {EinstaklingurDTOTru}
     * @memberof EinstaklingurDTOAllt
     */
    trufelag?: EinstaklingurDTOTru;
}

export function EinstaklingurDTOAlltFromJSON(json: any): EinstaklingurDTOAllt {
    return EinstaklingurDTOAlltFromJSONTyped(json, false);
}

export function EinstaklingurDTOAlltFromJSONTyped(json: any, ignoreDiscriminator: boolean): EinstaklingurDTOAllt {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kennitala': !exists(json, 'kennitala') ? undefined : json['kennitala'],
        'nafn': !exists(json, 'nafn') ? undefined : json['nafn'],
        'tegundKennitolu': !exists(json, 'tegundKennitolu') ? undefined : json['tegundKennitolu'],
        'tegundEinstaklingsNr': !exists(json, 'tegundEinstaklingsNr') ? undefined : json['tegundEinstaklingsNr'],
        'tegundEinstaklingsLysing': !exists(json, 'tegundEinstaklingsLysing') ? undefined : json['tegundEinstaklingsLysing'],
        'bannmerking': !exists(json, 'bannmerking') ? undefined : json['bannmerking'],
        'afdrif': !exists(json, 'afdrif') ? undefined : json['afdrif'],
        'heimilisfang': !exists(json, 'heimilisfang') ? undefined : EinstaklingurDTOHeimiliFromJSON(json['heimilisfang']),
        'logheimilistengsl': !exists(json, 'logheimilistengsl') ? undefined : EinstaklingurDTOLoghTengslFromJSON(json['logheimilistengsl']),
        'itarupplysingar': !exists(json, 'itarupplysingar') ? undefined : EinstaklingurDTOItarFromJSON(json['itarupplysingar']),
        'hjuskaparstada': !exists(json, 'hjuskaparstada') ? undefined : EinstaklingurDTOHjuFromJSON(json['hjuskaparstada']),
        'kyn': !exists(json, 'kyn') ? undefined : EinstaklingurDTOKynFromJSON(json['kyn']),
        'rikisfang': !exists(json, 'rikisfang') ? undefined : EinstaklingurDTORikisfangFromJSON(json['rikisfang']),
        'forsja': !exists(json, 'forsja') ? undefined : EinstaklingurDTOForsjaFromJSON(json['forsja']),
        'faedingarstadur': !exists(json, 'faedingarstadur') ? undefined : EinstaklingurDTOFaedingFromJSON(json['faedingarstadur']),
        'latnir': !exists(json, 'latnir') ? undefined : EinstaklingurDTOLatnir1FromJSON(json['latnir']),
        'latnirItar': !exists(json, 'latnirItar') ? undefined : EinstaklingurDTOLatnir2FromJSON(json['latnirItar']),
        'logforeldrar': !exists(json, 'logforeldrar') ? undefined : EinstaklingurDTOLogforeldrarFromJSON(json['logforeldrar']),
        'fulltNafn': !exists(json, 'fulltNafn') ? undefined : EinstaklingurDTONafnAlltFromJSON(json['fulltNafn']),
        'nyskraningDagsetning': !exists(json, 'nyskraningDagsetning') ? undefined : EinstaklingurDTONyskraFromJSON(json['nyskraningDagsetning']),
        'trufelag': !exists(json, 'trufelag') ? undefined : EinstaklingurDTOTruFromJSON(json['trufelag']),
    };
}

export function EinstaklingurDTOAlltToJSON(value?: EinstaklingurDTOAllt | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kennitala': value.kennitala,
        'nafn': value.nafn,
        'tegundKennitolu': value.tegundKennitolu,
        'tegundEinstaklingsNr': value.tegundEinstaklingsNr,
        'tegundEinstaklingsLysing': value.tegundEinstaklingsLysing,
        'bannmerking': value.bannmerking,
        'afdrif': value.afdrif,
        'heimilisfang': EinstaklingurDTOHeimiliToJSON(value.heimilisfang),
        'logheimilistengsl': EinstaklingurDTOLoghTengslToJSON(value.logheimilistengsl),
        'itarupplysingar': EinstaklingurDTOItarToJSON(value.itarupplysingar),
        'hjuskaparstada': EinstaklingurDTOHjuToJSON(value.hjuskaparstada),
        'kyn': EinstaklingurDTOKynToJSON(value.kyn),
        'rikisfang': EinstaklingurDTORikisfangToJSON(value.rikisfang),
        'forsja': EinstaklingurDTOForsjaToJSON(value.forsja),
        'faedingarstadur': EinstaklingurDTOFaedingToJSON(value.faedingarstadur),
        'latnir': EinstaklingurDTOLatnir1ToJSON(value.latnir),
        'latnirItar': EinstaklingurDTOLatnir2ToJSON(value.latnirItar),
        'logforeldrar': EinstaklingurDTOLogforeldrarToJSON(value.logforeldrar),
        'fulltNafn': EinstaklingurDTONafnAlltToJSON(value.fulltNafn),
        'nyskraningDagsetning': EinstaklingurDTONyskraToJSON(value.nyskraningDagsetning),
        'trufelag': EinstaklingurDTOTruToJSON(value.trufelag),
    };
}


