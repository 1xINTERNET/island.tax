/* tslint:disable */
/* eslint-disable */
/**
 * SGS - Aircraft Registry API
 * Vefþjónusta fyrir Loftfaraskrá
 *
 * The version of the OpenAPI document: v1
 * Contact: tolvuhjalp@samgongustofa.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    AircraftDto,
    AircraftDtoFromJSON,
    AircraftDtoFromJSONTyped,
    AircraftDtoToJSON,
} from './';

/**
 * 
 * @export
 * @interface AircraftGetResponseDto
 */
export interface AircraftGetResponseDto {
    /**
     * 
     * @type {AircraftDto}
     * @memberof AircraftGetResponseDto
     */
    data?: AircraftDto;
}

export function AircraftGetResponseDtoFromJSON(json: any): AircraftGetResponseDto {
    return AircraftGetResponseDtoFromJSONTyped(json, false);
}

export function AircraftGetResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AircraftGetResponseDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : AircraftDtoFromJSON(json['data']),
    };
}

export function AircraftGetResponseDtoToJSON(value?: AircraftGetResponseDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AircraftDtoToJSON(value.data),
    };
}


