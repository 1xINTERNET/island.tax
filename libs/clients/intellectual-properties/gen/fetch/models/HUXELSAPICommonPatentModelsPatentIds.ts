/* tslint:disable */
/* eslint-disable */
/**
 * Hugverkastofan WebAPI
 * Hugverkastofan WebAPI v3
 *
 * The version of the OpenAPI document: v3
 * Contact: ut@hugverk.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface HUXELSAPICommonPatentModelsPatentIds
 */
export interface HUXELSAPICommonPatentModelsPatentIds {
    /**
     * 
     * @type {Array<string>}
     * @memberof HUXELSAPICommonPatentModelsPatentIds
     */
    applicationNumbers?: Array<string> | null;
}

export function HUXELSAPICommonPatentModelsPatentIdsFromJSON(json: any): HUXELSAPICommonPatentModelsPatentIds {
    return HUXELSAPICommonPatentModelsPatentIdsFromJSONTyped(json, false);
}

export function HUXELSAPICommonPatentModelsPatentIdsFromJSONTyped(json: any, ignoreDiscriminator: boolean): HUXELSAPICommonPatentModelsPatentIds {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'applicationNumbers': !exists(json, 'applicationNumbers') ? undefined : json['applicationNumbers'],
    };
}

export function HUXELSAPICommonPatentModelsPatentIdsToJSON(value?: HUXELSAPICommonPatentModelsPatentIds | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'applicationNumbers': value.applicationNumbers,
    };
}


