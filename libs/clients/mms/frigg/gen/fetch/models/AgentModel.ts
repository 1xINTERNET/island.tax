/* tslint:disable */
/* eslint-disable */
/**
 * MMS FORM SERVICE API
 * Frigg - student information system
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    AddressModel,
    AddressModelFromJSON,
    AddressModelFromJSONTyped,
    AddressModelToJSON,
} from './';

/**
 * 
 * @export
 * @interface AgentModel
 */
export interface AgentModel {
    /**
     * 
     * @type {string}
     * @memberof AgentModel
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof AgentModel
     */
    nationalId: string;
    /**
     * 
     * @type {string}
     * @memberof AgentModel
     */
    name: string;
    /**
     * 
     * @type {object}
     * @memberof AgentModel
     */
    phone: object;
    /**
     * 
     * @type {object}
     * @memberof AgentModel
     */
    email: object;
    /**
     * 
     * @type {string}
     * @memberof AgentModel
     */
    role: string;
    /**
     * 
     * @type {AddressModel}
     * @memberof AgentModel
     */
    domicile: AddressModel | null;
}

export function AgentModelFromJSON(json: any): AgentModel {
    return AgentModelFromJSONTyped(json, false);
}

export function AgentModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): AgentModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'nationalId': json['nationalId'],
        'name': json['name'],
        'phone': json['phone'],
        'email': json['email'],
        'role': json['role'],
        'domicile': AddressModelFromJSON(json['domicile']),
    };
}

export function AgentModelToJSON(value?: AgentModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'nationalId': value.nationalId,
        'name': value.name,
        'phone': value.phone,
        'email': value.email,
        'role': value.role,
        'domicile': AddressModelToJSON(value.domicile),
    };
}


