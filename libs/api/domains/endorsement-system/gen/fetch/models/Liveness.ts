/* tslint:disable */
/* eslint-disable */
/**
 * EndorsementSystem
 * This API manages endorsement lists and associated endorsements collected by systems within island.is.
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
 * @interface Liveness
 */
export interface Liveness {
    /**
     * 
     * @type {boolean}
     * @memberof Liveness
     */
    ok: boolean;
}

export function LivenessFromJSON(json: any): Liveness {
    return LivenessFromJSONTyped(json, false);
}

export function LivenessFromJSONTyped(json: any, ignoreDiscriminator: boolean): Liveness {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ok': json['ok'],
    };
}

export function LivenessToJSON(value?: Liveness | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ok': value.ok,
    };
}


