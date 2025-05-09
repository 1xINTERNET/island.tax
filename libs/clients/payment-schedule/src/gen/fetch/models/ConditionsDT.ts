/* tslint:disable */
/* eslint-disable */
/**
 * Payment schedule 1.1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.1
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
 * @interface ConditionsDT
 */
export interface ConditionsDT {
    /**
     * National identifier
     * @type {string}
     * @memberof ConditionsDT
     */
    nationalId: string;
    /**
     * 
     * @type {number}
     * @memberof ConditionsDT
     */
    maxDebtAmount: number;
    /**
     * 
     * @type {number}
     * @memberof ConditionsDT
     */
    totalDebtAmount: number;
    /**
     * 
     * @type {number}
     * @memberof ConditionsDT
     */
    minPayment: number;
    /**
     * 
     * @type {number}
     * @memberof ConditionsDT
     */
    maxPayment: number;
    /**
     * 
     * @type {number}
     * @memberof ConditionsDT
     */
    minWagePayment: number;
    /**
     * 
     * @type {boolean}
     * @memberof ConditionsDT
     */
    collectionActions: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ConditionsDT
     */
    doNotOwe: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ConditionsDT
     */
    maxDebt: boolean;
    /**
     * true if taxes are owed
     * @type {boolean}
     * @memberof ConditionsDT
     */
    oweTaxes: boolean;
    /**
     * 
     * @type {number}
     * @memberof ConditionsDT
     */
    disposableIncome: number;
    /**
     * 
     * @type {boolean}
     * @memberof ConditionsDT
     */
    taxReturns: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ConditionsDT
     */
    vatReturns: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ConditionsDT
     */
    citReturns: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ConditionsDT
     */
    accommodationTaxReturns: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ConditionsDT
     */
    withholdingTaxReturns: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ConditionsDT
     */
    wageReturns: boolean;
    /**
     * 
     * @type {number}
     * @memberof ConditionsDT
     */
    alimony: number;
    /**
     * 
     * @type {string}
     * @memberof ConditionsDT
     */
    percent: string;
}

export function ConditionsDTFromJSON(json: any): ConditionsDT {
    return ConditionsDTFromJSONTyped(json, false);
}

export function ConditionsDTFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConditionsDT {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nationalId': json['nationalId'],
        'maxDebtAmount': json['maxDebtAmount'],
        'totalDebtAmount': json['totalDebtAmount'],
        'minPayment': json['minPayment'],
        'maxPayment': json['maxPayment'],
        'minWagePayment': json['minWagePayment'],
        'collectionActions': json['collectionActions'],
        'doNotOwe': json['doNotOwe'],
        'maxDebt': json['maxDebt'],
        'oweTaxes': json['oweTaxes'],
        'disposableIncome': json['disposableIncome'],
        'taxReturns': json['taxReturns'],
        'vatReturns': json['vatReturns'],
        'citReturns': json['citReturns'],
        'accommodationTaxReturns': json['accommodationTaxReturns'],
        'withholdingTaxReturns': json['withholdingTaxReturns'],
        'wageReturns': json['wageReturns'],
        'alimony': json['alimony'],
        'percent': json['percent'],
    };
}

export function ConditionsDTToJSON(value?: ConditionsDT | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nationalId': value.nationalId,
        'maxDebtAmount': value.maxDebtAmount,
        'totalDebtAmount': value.totalDebtAmount,
        'minPayment': value.minPayment,
        'maxPayment': value.maxPayment,
        'minWagePayment': value.minWagePayment,
        'collectionActions': value.collectionActions,
        'doNotOwe': value.doNotOwe,
        'maxDebt': value.maxDebt,
        'oweTaxes': value.oweTaxes,
        'disposableIncome': value.disposableIncome,
        'taxReturns': value.taxReturns,
        'vatReturns': value.vatReturns,
        'citReturns': value.citReturns,
        'accommodationTaxReturns': value.accommodationTaxReturns,
        'withholdingTaxReturns': value.withholdingTaxReturns,
        'wageReturns': value.wageReturns,
        'alimony': value.alimony,
        'percent': value.percent,
    };
}


