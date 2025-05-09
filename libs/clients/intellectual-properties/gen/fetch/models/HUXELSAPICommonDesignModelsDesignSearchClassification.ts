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
 * @interface HUXELSAPICommonDesignModelsDesignSearchClassification
 */
export interface HUXELSAPICommonDesignModelsDesignSearchClassification {
    /**
     * 
     * @type {Array<string>}
     * @memberof HUXELSAPICommonDesignModelsDesignSearchClassification
     */
    category?: Array<string> | null;
}

export function HUXELSAPICommonDesignModelsDesignSearchClassificationFromJSON(json: any): HUXELSAPICommonDesignModelsDesignSearchClassification {
    return HUXELSAPICommonDesignModelsDesignSearchClassificationFromJSONTyped(json, false);
}

export function HUXELSAPICommonDesignModelsDesignSearchClassificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): HUXELSAPICommonDesignModelsDesignSearchClassification {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'category': !exists(json, 'category') ? undefined : json['category'],
    };
}

export function HUXELSAPICommonDesignModelsDesignSearchClassificationToJSON(value?: HUXELSAPICommonDesignModelsDesignSearchClassification | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'category': value.category,
    };
}


