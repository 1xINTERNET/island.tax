/* tslint:disable */
/* eslint-disable */
/**
 * Application backend
 * This is provided as a reference to implement other backends.
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
    ActionCardTag,
    ActionCardTagFromJSON,
    ActionCardTagFromJSONTyped,
    ActionCardTagToJSON,
    History,
    HistoryFromJSON,
    HistoryFromJSONTyped,
    HistoryToJSON,
    PendingAction,
    PendingActionFromJSON,
    PendingActionFromJSONTyped,
    PendingActionToJSON,
} from './';

/**
 * 
 * @export
 * @interface ActionCardMetaData
 */
export interface ActionCardMetaData {
    /**
     * 
     * @type {string}
     * @memberof ActionCardMetaData
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof ActionCardMetaData
     */
    description?: string;
    /**
     * 
     * @type {ActionCardTag}
     * @memberof ActionCardMetaData
     */
    tag?: ActionCardTag;
    /**
     * 
     * @type {boolean}
     * @memberof ActionCardMetaData
     */
    deleteButton?: boolean;
    /**
     * 
     * @type {PendingAction}
     * @memberof ActionCardMetaData
     */
    pendingAction?: PendingAction;
    /**
     * 
     * @type {Array<History>}
     * @memberof ActionCardMetaData
     */
    history?: Array<History>;
    /**
     * 
     * @type {number}
     * @memberof ActionCardMetaData
     */
    draftFinishedSteps: number;
    /**
     * 
     * @type {number}
     * @memberof ActionCardMetaData
     */
    draftTotalSteps: number;
    /**
     * 
     * @type {string}
     * @memberof ActionCardMetaData
     */
    historyButton?: string;
}

export function ActionCardMetaDataFromJSON(json: any): ActionCardMetaData {
    return ActionCardMetaDataFromJSONTyped(json, false);
}

export function ActionCardMetaDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActionCardMetaData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': !exists(json, 'title') ? undefined : json['title'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'tag': !exists(json, 'tag') ? undefined : ActionCardTagFromJSON(json['tag']),
        'deleteButton': !exists(json, 'deleteButton') ? undefined : json['deleteButton'],
        'pendingAction': !exists(json, 'pendingAction') ? undefined : PendingActionFromJSON(json['pendingAction']),
        'history': !exists(json, 'history') ? undefined : ((json['history'] as Array<any>).map(HistoryFromJSON)),
        'draftFinishedSteps': json['draftFinishedSteps'],
        'draftTotalSteps': json['draftTotalSteps'],
        'historyButton': !exists(json, 'historyButton') ? undefined : json['historyButton'],
    };
}

export function ActionCardMetaDataToJSON(value?: ActionCardMetaData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'description': value.description,
        'tag': ActionCardTagToJSON(value.tag),
        'deleteButton': value.deleteButton,
        'pendingAction': PendingActionToJSON(value.pendingAction),
        'history': value.history === undefined ? undefined : ((value.history as Array<any>).map(HistoryToJSON)),
        'draftFinishedSteps': value.draftFinishedSteps,
        'draftTotalSteps': value.draftTotalSteps,
        'historyButton': value.historyButton,
    };
}


