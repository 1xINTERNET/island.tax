/* tslint:disable */
/* eslint-disable */
/**
 * Húsnæðisbætur reiknivél
 * Vefþjónusta sem inniheldur reiknivél til þess að reikna út húsnæðisbætur.
 *
 * The version of the OpenAPI document: v1
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
 * @interface InlineObject1
 */
export interface InlineObject1 {
    /**
     * Fjöldi heimilismanna í húsnæði
     * @type {number}
     * @memberof InlineObject1
     */
    fjoldiHeimilismanna: number;
    /**
     * Húsnæðiskostnaður á mánuði
     * @type {number}
     * @memberof InlineObject1
     */
    husnaedisKostnadur: number;
}

export function InlineObject1FromJSON(json: any): InlineObject1 {
    return InlineObject1FromJSONTyped(json, false);
}

export function InlineObject1FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineObject1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fjoldiHeimilismanna': json['fjoldiHeimilismanna'],
        'husnaedisKostnadur': json['husnaedisKostnadur'],
    };
}

export function InlineObject1ToJSON(value?: InlineObject1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fjoldiHeimilismanna': value.fjoldiHeimilismanna,
        'husnaedisKostnadur': value.husnaedisKostnadur,
    };
}


