/* tslint:disable */
/* eslint-disable */
/**
 * Relationships - API 1.0.0
 * API offers information about relationships between legal entities and individuals.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: xroad@skattur.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ModelError,
    ModelErrorFromJSON,
    ModelErrorFromJSONTyped,
    ModelErrorToJSON,
} from './';

/**
 * 
 * @export
 * @interface Model404
 */
export interface Model404 {
    /**
     * 
     * @type {Array<ModelError>}
     * @memberof Model404
     */
    error?: Array<ModelError>;
}

export function Model404FromJSON(json: any): Model404 {
    return Model404FromJSONTyped(json, false);
}

export function Model404FromJSONTyped(json: any, ignoreDiscriminator: boolean): Model404 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ((json['error'] as Array<any>).map(ModelErrorFromJSON)),
    };
}

export function Model404ToJSON(value?: Model404 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': value.error === undefined ? undefined : ((value.error as Array<any>).map(ModelErrorToJSON)),
    };
}


