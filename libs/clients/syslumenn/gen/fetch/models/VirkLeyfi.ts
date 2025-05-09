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
/**
 * 
 * @export
 * @interface VirkLeyfi
 */
export interface VirkLeyfi {
    /**
     * 
     * @type {number}
     * @memberof VirkLeyfi
     */
    rowNum?: number;
    /**
     * 
     * @type {string}
     * @memberof VirkLeyfi
     */
    utgefidAf?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VirkLeyfi
     */
    leyfisnumer?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VirkLeyfi
     */
    stadur?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VirkLeyfi
     */
    kallast?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VirkLeyfi
     */
    gata?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VirkLeyfi
     */
    postnumer?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VirkLeyfi
     */
    tegund?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VirkLeyfi
     */
    tegund2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VirkLeyfi
     */
    tegundVeitingastadar?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof VirkLeyfi
     */
    gildirFra?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof VirkLeyfi
     */
    gildirTil?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof VirkLeyfi
     */
    leyfishafi?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VirkLeyfi
     */
    abyrgdarmadur?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VirkLeyfi
     */
    flokkur?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VirkLeyfi
     */
    leyfiTilUtiveitinga?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VirkLeyfi
     */
    afgrAfgengisVirkirdagar?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VirkLeyfi
     */
    afgrAfgengisAdfaranottFridaga?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VirkLeyfi
     */
    afgrAfgengisVirkirdagarUtiveitingar?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VirkLeyfi
     */
    afgrAfgengisAdfaranottFridagaUtiveitingar?: string | null;
    /**
     * 
     * @type {number}
     * @memberof VirkLeyfi
     */
    hamarksfjoldiGesta?: number | null;
    /**
     * 
     * @type {number}
     * @memberof VirkLeyfi
     */
    fjoldiGestaIVeitingum?: number | null;
}

export function VirkLeyfiFromJSON(json: any): VirkLeyfi {
    return VirkLeyfiFromJSONTyped(json, false);
}

export function VirkLeyfiFromJSONTyped(json: any, ignoreDiscriminator: boolean): VirkLeyfi {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rowNum': !exists(json, 'rowNum') ? undefined : json['rowNum'],
        'utgefidAf': !exists(json, 'utgefidAf') ? undefined : json['utgefidAf'],
        'leyfisnumer': !exists(json, 'leyfisnumer') ? undefined : json['leyfisnumer'],
        'stadur': !exists(json, 'stadur') ? undefined : json['stadur'],
        'kallast': !exists(json, 'kallast') ? undefined : json['kallast'],
        'gata': !exists(json, 'gata') ? undefined : json['gata'],
        'postnumer': !exists(json, 'postnumer') ? undefined : json['postnumer'],
        'tegund': !exists(json, 'tegund') ? undefined : json['tegund'],
        'tegund2': !exists(json, 'tegund2') ? undefined : json['tegund2'],
        'tegundVeitingastadar': !exists(json, 'tegundVeitingastadar') ? undefined : json['tegundVeitingastadar'],
        'gildirFra': !exists(json, 'gildirFra') ? undefined : (json['gildirFra'] === null ? null : new Date(json['gildirFra'])),
        'gildirTil': !exists(json, 'gildirTil') ? undefined : (json['gildirTil'] === null ? null : new Date(json['gildirTil'])),
        'leyfishafi': !exists(json, 'leyfishafi') ? undefined : json['leyfishafi'],
        'abyrgdarmadur': !exists(json, 'abyrgdarmadur') ? undefined : json['abyrgdarmadur'],
        'flokkur': !exists(json, 'flokkur') ? undefined : json['flokkur'],
        'leyfiTilUtiveitinga': !exists(json, 'leyfi_Til_Utiveitinga') ? undefined : json['leyfi_Til_Utiveitinga'],
        'afgrAfgengisVirkirdagar': !exists(json, 'afgr_Afgengis_Virkirdagar') ? undefined : json['afgr_Afgengis_Virkirdagar'],
        'afgrAfgengisAdfaranottFridaga': !exists(json, 'afgr_Afgengis_Adfaranott_Fridaga') ? undefined : json['afgr_Afgengis_Adfaranott_Fridaga'],
        'afgrAfgengisVirkirdagarUtiveitingar': !exists(json, 'afgr_Afgengis_Virkirdagar_Utiveitingar') ? undefined : json['afgr_Afgengis_Virkirdagar_Utiveitingar'],
        'afgrAfgengisAdfaranottFridagaUtiveitingar': !exists(json, 'afgr_Afgengis_Adfaranott_Fridaga_Utiveitingar') ? undefined : json['afgr_Afgengis_Adfaranott_Fridaga_Utiveitingar'],
        'hamarksfjoldiGesta': !exists(json, 'hamarksfjoldiGesta') ? undefined : json['hamarksfjoldiGesta'],
        'fjoldiGestaIVeitingum': !exists(json, 'fjoldiGestaIVeitingum') ? undefined : json['fjoldiGestaIVeitingum'],
    };
}

export function VirkLeyfiToJSON(value?: VirkLeyfi | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'rowNum': value.rowNum,
        'utgefidAf': value.utgefidAf,
        'leyfisnumer': value.leyfisnumer,
        'stadur': value.stadur,
        'kallast': value.kallast,
        'gata': value.gata,
        'postnumer': value.postnumer,
        'tegund': value.tegund,
        'tegund2': value.tegund2,
        'tegundVeitingastadar': value.tegundVeitingastadar,
        'gildirFra': value.gildirFra === undefined ? undefined : (value.gildirFra === null ? null : value.gildirFra.toISOString()),
        'gildirTil': value.gildirTil === undefined ? undefined : (value.gildirTil === null ? null : value.gildirTil.toISOString()),
        'leyfishafi': value.leyfishafi,
        'abyrgdarmadur': value.abyrgdarmadur,
        'flokkur': value.flokkur,
        'leyfi_Til_Utiveitinga': value.leyfiTilUtiveitinga,
        'afgr_Afgengis_Virkirdagar': value.afgrAfgengisVirkirdagar,
        'afgr_Afgengis_Adfaranott_Fridaga': value.afgrAfgengisAdfaranottFridaga,
        'afgr_Afgengis_Virkirdagar_Utiveitingar': value.afgrAfgengisVirkirdagarUtiveitingar,
        'afgr_Afgengis_Adfaranott_Fridaga_Utiveitingar': value.afgrAfgengisAdfaranottFridagaUtiveitingar,
        'hamarksfjoldiGesta': value.hamarksfjoldiGesta,
        'fjoldiGestaIVeitingum': value.fjoldiGestaIVeitingum,
    };
}


