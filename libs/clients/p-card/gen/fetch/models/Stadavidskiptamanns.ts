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
    Abyrgdvegna3jaadila,
    Abyrgdvegna3jaadilaFromJSON,
    Abyrgdvegna3jaadilaFromJSONTyped,
    Abyrgdvegna3jaadilaToJSON,
    Geymsluholf,
    GeymsluholfFromJSON,
    GeymsluholfFromJSONTyped,
    GeymsluholfToJSON,
    Hlutabref,
    HlutabrefFromJSON,
    HlutabrefFromJSONTyped,
    HlutabrefToJSON,
    Innstaeduribonkumogsparisjodum,
    InnstaeduribonkumogsparisjodumFromJSON,
    InnstaeduribonkumogsparisjodumFromJSONTyped,
    InnstaeduribonkumogsparisjodumToJSON,
    Skjol,
    SkjolFromJSON,
    SkjolFromJSONTyped,
    SkjolToJSON,
    Tryggingar,
    TryggingarFromJSON,
    TryggingarFromJSONTyped,
    TryggingarToJSON,
    Utlan,
    UtlanFromJSON,
    UtlanFromJSONTyped,
    UtlanToJSON,
    Verdbrefaogskuldabref,
    VerdbrefaogskuldabrefFromJSON,
    VerdbrefaogskuldabrefFromJSONTyped,
    VerdbrefaogskuldabrefToJSON,
} from './';

/**
 * 
 * @export
 * @interface Stadavidskiptamanns
 */
export interface Stadavidskiptamanns {
    /**
     * 
     * @type {string}
     * @memberof Stadavidskiptamanns
     */
    kennitala?: string;
    /**
     * 
     * @type {Date}
     * @memberof Stadavidskiptamanns
     */
    keyrsluDags: Date;
    /**
     * 
     * @type {Date}
     * @memberof Stadavidskiptamanns
     */
    dagsetningYfirlits: Date;
    /**
     * 
     * @type {Array<Innstaeduribonkumogsparisjodum>}
     * @memberof Stadavidskiptamanns
     */
    innstaedurIBonkumOgSparisjodum?: Array<Innstaeduribonkumogsparisjodum>;
    /**
     * 
     * @type {Array<Verdbrefaogskuldabref>}
     * @memberof Stadavidskiptamanns
     */
    verdbrefaOgSkuldabref?: Array<Verdbrefaogskuldabref>;
    /**
     * 
     * @type {Array<Hlutabref>}
     * @memberof Stadavidskiptamanns
     */
    hlutabref?: Array<Hlutabref>;
    /**
     * 
     * @type {Array<Utlan>}
     * @memberof Stadavidskiptamanns
     */
    utlan?: Array<Utlan>;
    /**
     * 
     * @type {Array<Tryggingar>}
     * @memberof Stadavidskiptamanns
     */
    tryggingarbref?: Array<Tryggingar>;
    /**
     * 
     * @type {Array<Abyrgdvegna3jaadila>}
     * @memberof Stadavidskiptamanns
     */
    abyrgdVegna3jaAdila?: Array<Abyrgdvegna3jaadila>;
    /**
     * 
     * @type {Array<Geymsluholf>}
     * @memberof Stadavidskiptamanns
     */
    geymsluholf?: Array<Geymsluholf>;
    /**
     * 
     * @type {Array<Skjol>}
     * @memberof Stadavidskiptamanns
     */
    skjol?: Array<Skjol>;
}

export function StadavidskiptamannsFromJSON(json: any): Stadavidskiptamanns {
    return StadavidskiptamannsFromJSONTyped(json, false);
}

export function StadavidskiptamannsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Stadavidskiptamanns {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kennitala': !exists(json, 'kennitala') ? undefined : json['kennitala'],
        'keyrsluDags': (new Date(json['keyrsluDags'])),
        'dagsetningYfirlits': (new Date(json['dagsetningYfirlits'])),
        'innstaedurIBonkumOgSparisjodum': !exists(json, 'innstaedurIBonkumOgSparisjodum') ? undefined : ((json['innstaedurIBonkumOgSparisjodum'] as Array<any>).map(InnstaeduribonkumogsparisjodumFromJSON)),
        'verdbrefaOgSkuldabref': !exists(json, 'verdbrefaOgSkuldabref') ? undefined : ((json['verdbrefaOgSkuldabref'] as Array<any>).map(VerdbrefaogskuldabrefFromJSON)),
        'hlutabref': !exists(json, 'hlutabref') ? undefined : ((json['hlutabref'] as Array<any>).map(HlutabrefFromJSON)),
        'utlan': !exists(json, 'utlan') ? undefined : ((json['utlan'] as Array<any>).map(UtlanFromJSON)),
        'tryggingarbref': !exists(json, 'tryggingarbref') ? undefined : ((json['tryggingarbref'] as Array<any>).map(TryggingarFromJSON)),
        'abyrgdVegna3jaAdila': !exists(json, 'abyrgdVegna3jaAdila') ? undefined : ((json['abyrgdVegna3jaAdila'] as Array<any>).map(Abyrgdvegna3jaadilaFromJSON)),
        'geymsluholf': !exists(json, 'geymsluholf') ? undefined : ((json['geymsluholf'] as Array<any>).map(GeymsluholfFromJSON)),
        'skjol': !exists(json, 'skjol') ? undefined : ((json['skjol'] as Array<any>).map(SkjolFromJSON)),
    };
}

export function StadavidskiptamannsToJSON(value?: Stadavidskiptamanns | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kennitala': value.kennitala,
        'keyrsluDags': (value.keyrsluDags.toISOString()),
        'dagsetningYfirlits': (value.dagsetningYfirlits.toISOString()),
        'innstaedurIBonkumOgSparisjodum': value.innstaedurIBonkumOgSparisjodum === undefined ? undefined : ((value.innstaedurIBonkumOgSparisjodum as Array<any>).map(InnstaeduribonkumogsparisjodumToJSON)),
        'verdbrefaOgSkuldabref': value.verdbrefaOgSkuldabref === undefined ? undefined : ((value.verdbrefaOgSkuldabref as Array<any>).map(VerdbrefaogskuldabrefToJSON)),
        'hlutabref': value.hlutabref === undefined ? undefined : ((value.hlutabref as Array<any>).map(HlutabrefToJSON)),
        'utlan': value.utlan === undefined ? undefined : ((value.utlan as Array<any>).map(UtlanToJSON)),
        'tryggingarbref': value.tryggingarbref === undefined ? undefined : ((value.tryggingarbref as Array<any>).map(TryggingarToJSON)),
        'abyrgdVegna3jaAdila': value.abyrgdVegna3jaAdila === undefined ? undefined : ((value.abyrgdVegna3jaAdila as Array<any>).map(Abyrgdvegna3jaadilaToJSON)),
        'geymsluholf': value.geymsluholf === undefined ? undefined : ((value.geymsluholf as Array<any>).map(GeymsluholfToJSON)),
        'skjol': value.skjol === undefined ? undefined : ((value.skjol as Array<any>).map(SkjolToJSON)),
    };
}


