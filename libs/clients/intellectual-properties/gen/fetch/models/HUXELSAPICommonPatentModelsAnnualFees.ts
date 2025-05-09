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
import {
    HUXELSAPICommonPatentModelsPatent,
    HUXELSAPICommonPatentModelsPatentFromJSON,
    HUXELSAPICommonPatentModelsPatentFromJSONTyped,
    HUXELSAPICommonPatentModelsPatentToJSON,
} from './';

/**
 * 
 * @export
 * @interface HUXELSAPICommonPatentModelsAnnualFees
 */
export interface HUXELSAPICommonPatentModelsAnnualFees {
    /**
     * 
     * @type {number}
     * @memberof HUXELSAPICommonPatentModelsAnnualFees
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof HUXELSAPICommonPatentModelsAnnualFees
     */
    patentsID?: number | null;
    /**
     * 
     * @type {Date}
     * @memberof HUXELSAPICommonPatentModelsAnnualFees
     */
    paymentDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof HUXELSAPICommonPatentModelsAnnualFees
     */
    expires?: Date | null;
    /**
     * 
     * @type {number}
     * @memberof HUXELSAPICommonPatentModelsAnnualFees
     */
    number?: number | null;
    /**
     * 
     * @type {string}
     * @memberof HUXELSAPICommonPatentModelsAnnualFees
     */
    amount?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof HUXELSAPICommonPatentModelsAnnualFees
     */
    surCharge?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof HUXELSAPICommonPatentModelsAnnualFees
     */
    paid?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HUXELSAPICommonPatentModelsAnnualFees
     */
    payer?: string | null;
    /**
     * 
     * @type {number}
     * @memberof HUXELSAPICommonPatentModelsAnnualFees
     */
    agentID?: number | null;
    /**
     * 
     * @type {HUXELSAPICommonPatentModelsPatent}
     * @memberof HUXELSAPICommonPatentModelsAnnualFees
     */
    patent?: HUXELSAPICommonPatentModelsPatent;
}

export function HUXELSAPICommonPatentModelsAnnualFeesFromJSON(json: any): HUXELSAPICommonPatentModelsAnnualFees {
    return HUXELSAPICommonPatentModelsAnnualFeesFromJSONTyped(json, false);
}

export function HUXELSAPICommonPatentModelsAnnualFeesFromJSONTyped(json: any, ignoreDiscriminator: boolean): HUXELSAPICommonPatentModelsAnnualFees {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'patentsID': !exists(json, 'patents_ID') ? undefined : json['patents_ID'],
        'paymentDate': !exists(json, 'paymentDate') ? undefined : (json['paymentDate'] === null ? null : new Date(json['paymentDate'])),
        'expires': !exists(json, 'expires') ? undefined : (json['expires'] === null ? null : new Date(json['expires'])),
        'number': !exists(json, 'number') ? undefined : json['number'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'surCharge': !exists(json, 'surCharge') ? undefined : json['surCharge'],
        'paid': !exists(json, 'paid') ? undefined : json['paid'],
        'payer': !exists(json, 'payer') ? undefined : json['payer'],
        'agentID': !exists(json, 'agentID') ? undefined : json['agentID'],
        'patent': !exists(json, 'patent') ? undefined : HUXELSAPICommonPatentModelsPatentFromJSON(json['patent']),
    };
}

export function HUXELSAPICommonPatentModelsAnnualFeesToJSON(value?: HUXELSAPICommonPatentModelsAnnualFees | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'patents_ID': value.patentsID,
        'paymentDate': value.paymentDate === undefined ? undefined : (value.paymentDate === null ? null : value.paymentDate.toISOString()),
        'expires': value.expires === undefined ? undefined : (value.expires === null ? null : value.expires.toISOString()),
        'number': value.number,
        'amount': value.amount,
        'surCharge': value.surCharge,
        'paid': value.paid,
        'payer': value.payer,
        'agentID': value.agentID,
        'patent': HUXELSAPICommonPatentModelsPatentToJSON(value.patent),
    };
}


