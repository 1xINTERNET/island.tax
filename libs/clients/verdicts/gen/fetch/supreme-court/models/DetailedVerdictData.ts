/* tslint:disable */
/* eslint-disable */
/**
 * Verdicts API
 * API for accessing court verdicts and related data
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    JuryJudge,
    JuryJudgeFromJSON,
    JuryJudgeFromJSONTyped,
    JuryJudgeToJSON,
} from './';

/**
 * 
 * @export
 * @interface DetailedVerdictData
 */
export interface DetailedVerdictData {
    /**
     * 
     * @type {string}
     * @memberof DetailedVerdictData
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof DetailedVerdictData
     */
    court?: string;
    /**
     * 
     * @type {string}
     * @memberof DetailedVerdictData
     */
    caseId?: string;
    /**
     * 
     * @type {string}
     * @memberof DetailedVerdictData
     */
    caseNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof DetailedVerdictData
     */
    caseType?: string;
    /**
     * 
     * @type {string}
     * @memberof DetailedVerdictData
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof DetailedVerdictData
     */
    presentings?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DetailedVerdictData
     */
    verdictHtml?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof DetailedVerdictData
     */
    verdictDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof DetailedVerdictData
     */
    publishDate?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof DetailedVerdictData
     */
    status?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DetailedVerdictData
     */
    closedSession?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DetailedVerdictData
     */
    hearingTime?: string;
    /**
     * 
     * @type {string}
     * @memberof DetailedVerdictData
     */
    courtroom?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof DetailedVerdictData
     */
    keywords?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof DetailedVerdictData
     */
    lawCitations?: Array<string>;
    /**
     * 
     * @type {Array<JuryJudge>}
     * @memberof DetailedVerdictData
     */
    judges?: Array<JuryJudge>;
}

export function DetailedVerdictDataFromJSON(json: any): DetailedVerdictData {
    return DetailedVerdictDataFromJSONTyped(json, false);
}

export function DetailedVerdictDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): DetailedVerdictData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'court': !exists(json, 'court') ? undefined : json['court'],
        'caseId': !exists(json, 'caseId') ? undefined : json['caseId'],
        'caseNumber': !exists(json, 'caseNumber') ? undefined : json['caseNumber'],
        'caseType': !exists(json, 'caseType') ? undefined : json['caseType'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'presentings': !exists(json, 'presentings') ? undefined : json['presentings'],
        'verdictHtml': !exists(json, 'verdictHtml') ? undefined : json['verdictHtml'],
        'verdictDate': !exists(json, 'verdictDate') ? undefined : (json['verdictDate'] === null ? null : new Date(json['verdictDate'])),
        'publishDate': !exists(json, 'publishDate') ? undefined : (json['publishDate'] === null ? null : new Date(json['publishDate'])),
        'status': !exists(json, 'status') ? undefined : json['status'],
        'closedSession': !exists(json, 'closedSession') ? undefined : json['closedSession'],
        'hearingTime': !exists(json, 'hearingTime') ? undefined : json['hearingTime'],
        'courtroom': !exists(json, 'courtroom') ? undefined : json['courtroom'],
        'keywords': !exists(json, 'keywords') ? undefined : json['keywords'],
        'lawCitations': !exists(json, 'lawCitations') ? undefined : json['lawCitations'],
        'judges': !exists(json, 'judges') ? undefined : ((json['judges'] as Array<any>).map(JuryJudgeFromJSON)),
    };
}

export function DetailedVerdictDataToJSON(value?: DetailedVerdictData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'court': value.court,
        'caseId': value.caseId,
        'caseNumber': value.caseNumber,
        'caseType': value.caseType,
        'title': value.title,
        'presentings': value.presentings,
        'verdictHtml': value.verdictHtml,
        'verdictDate': value.verdictDate === undefined ? undefined : (value.verdictDate === null ? null : value.verdictDate.toISOString()),
        'publishDate': value.publishDate === undefined ? undefined : (value.publishDate === null ? null : value.publishDate.toISOString()),
        'status': value.status,
        'closedSession': value.closedSession,
        'hearingTime': value.hearingTime,
        'courtroom': value.courtroom,
        'keywords': value.keywords,
        'lawCitations': value.lawCitations,
        'judges': value.judges === undefined ? undefined : ((value.judges as Array<any>).map(JuryJudgeToJSON)),
    };
}


