/* tslint:disable */
/* eslint-disable */
/**
 * Þjónustugátt starfskerfa sýslumanna
 * Rafrænn aðgengi að gögnum og aðgerðum starfskerfis sýslumanna
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    AranguslausFjarnamMal,
    AranguslausFjarnamMalFromJSON,
    AranguslausFjarnamMalFromJSONTyped,
    AranguslausFjarnamMalToJSON,
} from './';

/**
 * 
 * @export
 * @interface AranuslausSvar
 */
export interface AranuslausSvar {
    /**
     * 
     * @type {Date}
     * @memberof AranuslausSvar
     */
    fraDags?: Date;
    /**
     * 
     * @type {string}
     * @memberof AranuslausSvar
     */
    audkenniSvars?: string | null;
    /**
     * 
     * @type {Array<AranguslausFjarnamMal>}
     * @memberof AranuslausSvar
     */
    aranguslausFjarnam?: Array<AranguslausFjarnamMal> | null;
}

export function AranuslausSvarFromJSON(json: any): AranuslausSvar {
    return AranuslausSvarFromJSONTyped(json, false);
}

export function AranuslausSvarFromJSONTyped(json: any, ignoreDiscriminator: boolean): AranuslausSvar {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fraDags': !exists(json, 'fraDags') ? undefined : (new Date(json['fraDags'])),
        'audkenniSvars': !exists(json, 'audkenniSvars') ? undefined : json['audkenniSvars'],
        'aranguslausFjarnam': !exists(json, 'aranguslausFjarnam') ? undefined : (json['aranguslausFjarnam'] === null ? null : (json['aranguslausFjarnam'] as Array<any>).map(AranguslausFjarnamMalFromJSON)),
    };
}

export function AranuslausSvarToJSON(value?: AranuslausSvar | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fraDags': value.fraDags === undefined ? undefined : (value.fraDags.toISOString()),
        'audkenniSvars': value.audkenniSvars,
        'aranguslausFjarnam': value.aranguslausFjarnam === undefined ? undefined : (value.aranguslausFjarnam === null ? null : (value.aranguslausFjarnam as Array<any>).map(AranguslausFjarnamMalToJSON)),
    };
}


