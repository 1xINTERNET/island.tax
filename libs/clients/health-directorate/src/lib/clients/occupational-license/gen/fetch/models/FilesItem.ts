/* tslint:disable */
/* eslint-disable */
/**
 * Landlæknir API
 * Vefþjónustur á vegum Landlæknis.
 *
 * The version of the OpenAPI document: 1.0.1
 * Contact: holmfridur.palsdottir@landlaeknir.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface FilesItem
 */
export interface FilesItem {
    /**
     * 
     * @type {number}
     * @memberof FilesItem
     */
    flokkur?: number;
    /**
     * 
     * @type {string}
     * @memberof FilesItem
     */
    heiti?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FilesItem
     */
    dags?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FilesItem
     */
    tegund?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FilesItem
     */
    fileID?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FilesItem
     */
    ending?: string | null;
}

export function FilesItemFromJSON(json: any): FilesItem {
    return FilesItemFromJSONTyped(json, false);
}

export function FilesItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): FilesItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'flokkur': !exists(json, 'flokkur') ? undefined : json['flokkur'],
        'heiti': !exists(json, 'heiti') ? undefined : json['heiti'],
        'dags': !exists(json, 'dags') ? undefined : json['dags'],
        'tegund': !exists(json, 'tegund') ? undefined : json['tegund'],
        'fileID': !exists(json, 'fileID') ? undefined : json['fileID'],
        'ending': !exists(json, 'ending') ? undefined : json['ending'],
    };
}

export function FilesItemToJSON(value?: FilesItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'flokkur': value.flokkur,
        'heiti': value.heiti,
        'dags': value.dags,
        'tegund': value.tegund,
        'fileID': value.fileID,
        'ending': value.ending,
    };
}


