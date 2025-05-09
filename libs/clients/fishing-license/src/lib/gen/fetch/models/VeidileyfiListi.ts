/* tslint:disable */
/* eslint-disable */
/**
 * Veiðileyfi API
 * Skjölun á veiðileyfavefþjónustu Fiskistofu.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: olafur.palmi.gudnason@fiskistofa.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    VeidileyfiIBodi,
    VeidileyfiIBodiFromJSON,
    VeidileyfiIBodiFromJSONTyped,
    VeidileyfiIBodiToJSON,
} from './';

/**
 * 
 * @export
 * @interface VeidileyfiListi
 */
export interface VeidileyfiListi {
    /**
     * Listi af veiðileyfum.
     * @type {Array<VeidileyfiIBodi>}
     * @memberof VeidileyfiListi
     */
    veidileyfiIBodi: Array<VeidileyfiIBodi>;
}

export function VeidileyfiListiFromJSON(json: any): VeidileyfiListi {
    return VeidileyfiListiFromJSONTyped(json, false);
}

export function VeidileyfiListiFromJSONTyped(json: any, ignoreDiscriminator: boolean): VeidileyfiListi {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'veidileyfiIBodi': ((json['veidileyfiIBodi'] as Array<any>).map(VeidileyfiIBodiFromJSON)),
    };
}

export function VeidileyfiListiToJSON(value?: VeidileyfiListi | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'veidileyfiIBodi': ((value.veidileyfiIBodi as Array<any>).map(VeidileyfiIBodiToJSON)),
    };
}


