/* tslint:disable */
/* eslint-disable */
/**
 * Regulations admin - backend
 * Backend services for regulations admin.
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
 * @interface DraftRegulationShippedModel
 */
export interface DraftRegulationShippedModel {
    /**
     * 
     * @type {string}
     * @memberof DraftRegulationShippedModel
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof DraftRegulationShippedModel
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof DraftRegulationShippedModel
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof DraftRegulationShippedModel
     */
    idealPublishDate: string;
    /**
     * 
     * @type {string}
     * @memberof DraftRegulationShippedModel
     */
    draftingStatus: string;
}

export function DraftRegulationShippedModelFromJSON(json: any): DraftRegulationShippedModel {
    return DraftRegulationShippedModelFromJSONTyped(json, false);
}

export function DraftRegulationShippedModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): DraftRegulationShippedModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'title': json['title'],
        'name': json['name'],
        'idealPublishDate': json['idealPublishDate'],
        'draftingStatus': json['draftingStatus'],
    };
}

export function DraftRegulationShippedModelToJSON(value?: DraftRegulationShippedModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'title': value.title,
        'name': value.name,
        'idealPublishDate': value.idealPublishDate,
        'draftingStatus': value.draftingStatus,
    };
}


