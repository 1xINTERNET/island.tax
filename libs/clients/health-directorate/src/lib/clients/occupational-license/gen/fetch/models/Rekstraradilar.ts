/* tslint:disable */
/* eslint-disable */
/**
 * Landlæknir API
 * Vefþjónustur á vegum Landlæknis.
 *
 * The version of the OpenAPI document: 1.0.1
 * Contact: holmfridur.palsdottir@landlaeknir.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Gagnaklasi fyrir skil á upplýsingum fyrir Rekstraraðila
 * @export
 * @interface Rekstraradilar
 */
export interface Rekstraradilar {
    /**
     * ID
     * @type {number}
     * @memberof Rekstraradilar
     */
    id?: number;
    /**
     * Skráningarnúmer
     * @type {string}
     * @memberof Rekstraradilar
     */
    skraningarnumer?: string | null;
    /**
     * Kennitala
     * @type {string}
     * @memberof Rekstraradilar
     */
    kennitala?: string | null;
    /**
     * Rekstraraðili
     * @type {string}
     * @memberof Rekstraradilar
     */
    rekstraradili?: string | null;
    /**
     * Aðsetur
     * @type {string}
     * @memberof Rekstraradilar
     */
    adsetur?: string | null;
    /**
     * Póstfang
     * @type {string}
     * @memberof Rekstraradilar
     */
    postfang?: string | null;
    /**
     * Heilbrigðisumdæmi
     * @type {string}
     * @memberof Rekstraradilar
     */
    heilbrigdisumdaemi?: string | null;
    /**
     * Sóttvarnarumdæmi
     * @type {string}
     * @memberof Rekstraradilar
     */
    sottvarnarumdaemi?: string | null;
    /**
     * Póstnúmer
     * @type {string}
     * @memberof Rekstraradilar
     */
    postnr?: string | null;
    /**
     * Kennitala ábyrgðarmanns
     * @type {string}
     * @memberof Rekstraradilar
     */
    ktAbyrgdarmanns?: string | null;
    /**
     * Nafn AB Aðila
     * @type {string}
     * @memberof Rekstraradilar
     */
    nafnABAdila?: string | null;
    /**
     * Tilheyrir
     * @type {string}
     * @memberof Rekstraradilar
     */
    tilheyrir?: string | null;
    /**
     * Rekstrarform
     * @type {string}
     * @memberof Rekstraradilar
     */
    rekstrarform?: string | null;
    /**
     * Tegund Rekstrarforms
     * @type {string}
     * @memberof Rekstraradilar
     */
    tegRekstrarform?: string | null;
    /**
     * Sviðsnúmer
     * @type {string}
     * @memberof Rekstraradilar
     */
    svidsnumer?: string | null;
    /**
     * Tegund Rekstrar
     * @type {string}
     * @memberof Rekstraradilar
     */
    teGREKSTRAR?: string | null;
    /**
     * Tegund Rekstrar Heiti
     * @type {string}
     * @memberof Rekstraradilar
     */
    teGREKSTRARHEITI?: string | null;
    /**
     * Tegund Starfssvið
     * @type {string}
     * @memberof Rekstraradilar
     */
    teGSTARFSSVIDS?: string | null;
    /**
     * Starfsvið
     * @type {string}
     * @memberof Rekstraradilar
     */
    starfssvid?: string | null;
    /**
     * Staða
     * @type {string}
     * @memberof Rekstraradilar
     */
    stada?: string | null;
    /**
     * Tilkynnt
     * @type {string}
     * @memberof Rekstraradilar
     */
    tilkynnt?: string | null;
    /**
     * Ár Tilkynnt
     * @type {string}
     * @memberof Rekstraradilar
     */
    aRTILKYNNT?: string | null;
    /**
     * Mánuður Tilkynnt
     * @type {string}
     * @memberof Rekstraradilar
     */
    maNTILKYNNT?: string | null;
    /**
     * Dagsetning Tilkynnt
     * @type {string}
     * @memberof Rekstraradilar
     */
    daGTILKYNNT?: string | null;
    /**
     * Skráð
     * @type {string}
     * @memberof Rekstraradilar
     */
    skrad?: string | null;
    /**
     * Staðfest
     * @type {string}
     * @memberof Rekstraradilar
     */
    stadfest?: string | null;
    /**
     * Ár staðfest
     * @type {string}
     * @memberof Rekstraradilar
     */
    aRSTADFEST?: string | null;
    /**
     * Mánuður staðfest
     * @type {string}
     * @memberof Rekstraradilar
     */
    maNSTADFEST?: string | null;
    /**
     * Dags. staðfest
     * @type {string}
     * @memberof Rekstraradilar
     */
    daGSTADFESTT?: string | null;
    /**
     * Breytt
     * @type {string}
     * @memberof Rekstraradilar
     */
    breytt?: string | null;
    /**
     * Málsnúmer
     * @type {string}
     * @memberof Rekstraradilar
     */
    malsnumer?: string | null;
    /**
     * Tölvupóstur
     * @type {string}
     * @memberof Rekstraradilar
     */
    tolvupostur?: string | null;
    /**
     * Undirskrift Aðila
     * @type {string}
     * @memberof Rekstraradilar
     */
    undirskRADILI?: string | null;
    /**
     * Sérgrein
     * @type {string}
     * @memberof Rekstraradilar
     */
    sergrein?: string | null;
    /**
     * Þjónustuflokkur
     * @type {string}
     * @memberof Rekstraradilar
     */
    thjonustuflokkur?: string | null;
    /**
     * LAT WGS84
     * @type {string}
     * @memberof Rekstraradilar
     */
    laTWGS84?: string | null;
    /**
     * Long WGS84
     * @type {string}
     * @memberof Rekstraradilar
     */
    lonGWGS84?: string | null;
}

export function RekstraradilarFromJSON(json: any): Rekstraradilar {
    return RekstraradilarFromJSONTyped(json, false);
}

export function RekstraradilarFromJSONTyped(json: any, ignoreDiscriminator: boolean): Rekstraradilar {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'skraningarnumer': !exists(json, 'skraningarnumer') ? undefined : json['skraningarnumer'],
        'kennitala': !exists(json, 'kennitala') ? undefined : json['kennitala'],
        'rekstraradili': !exists(json, 'rekstraradili') ? undefined : json['rekstraradili'],
        'adsetur': !exists(json, 'adsetur') ? undefined : json['adsetur'],
        'postfang': !exists(json, 'postfang') ? undefined : json['postfang'],
        'heilbrigdisumdaemi': !exists(json, 'heilbrigdisumdaemi') ? undefined : json['heilbrigdisumdaemi'],
        'sottvarnarumdaemi': !exists(json, 'sottvarnarumdaemi') ? undefined : json['sottvarnarumdaemi'],
        'postnr': !exists(json, 'postnr') ? undefined : json['postnr'],
        'ktAbyrgdarmanns': !exists(json, 'kt_Abyrgdarmanns') ? undefined : json['kt_Abyrgdarmanns'],
        'nafnABAdila': !exists(json, 'nafn_AB_Adila') ? undefined : json['nafn_AB_Adila'],
        'tilheyrir': !exists(json, 'tilheyrir') ? undefined : json['tilheyrir'],
        'rekstrarform': !exists(json, 'rekstrarform') ? undefined : json['rekstrarform'],
        'tegRekstrarform': !exists(json, 'teg_Rekstrarform') ? undefined : json['teg_Rekstrarform'],
        'svidsnumer': !exists(json, 'svidsnumer') ? undefined : json['svidsnumer'],
        'teGREKSTRAR': !exists(json, 'teG_REKSTRAR') ? undefined : json['teG_REKSTRAR'],
        'teGREKSTRARHEITI': !exists(json, 'teG_REKSTRAR_HEITI') ? undefined : json['teG_REKSTRAR_HEITI'],
        'teGSTARFSSVIDS': !exists(json, 'teG_STARFSSVIDS') ? undefined : json['teG_STARFSSVIDS'],
        'starfssvid': !exists(json, 'starfssvid') ? undefined : json['starfssvid'],
        'stada': !exists(json, 'stada') ? undefined : json['stada'],
        'tilkynnt': !exists(json, 'tilkynnt') ? undefined : json['tilkynnt'],
        'aRTILKYNNT': !exists(json, 'aR_TILKYNNT') ? undefined : json['aR_TILKYNNT'],
        'maNTILKYNNT': !exists(json, 'maN_TILKYNNT') ? undefined : json['maN_TILKYNNT'],
        'daGTILKYNNT': !exists(json, 'daG_TILKYNNT') ? undefined : json['daG_TILKYNNT'],
        'skrad': !exists(json, 'skrad') ? undefined : json['skrad'],
        'stadfest': !exists(json, 'stadfest') ? undefined : json['stadfest'],
        'aRSTADFEST': !exists(json, 'aR_STADFEST') ? undefined : json['aR_STADFEST'],
        'maNSTADFEST': !exists(json, 'maN_STADFEST') ? undefined : json['maN_STADFEST'],
        'daGSTADFESTT': !exists(json, 'daG_STADFESTT') ? undefined : json['daG_STADFESTT'],
        'breytt': !exists(json, 'breytt') ? undefined : json['breytt'],
        'malsnumer': !exists(json, 'malsnumer') ? undefined : json['malsnumer'],
        'tolvupostur': !exists(json, 'tolvupostur') ? undefined : json['tolvupostur'],
        'undirskRADILI': !exists(json, 'undirskR_ADILI') ? undefined : json['undirskR_ADILI'],
        'sergrein': !exists(json, 'sergrein') ? undefined : json['sergrein'],
        'thjonustuflokkur': !exists(json, 'thjonustuflokkur') ? undefined : json['thjonustuflokkur'],
        'laTWGS84': !exists(json, 'laT_WGS84') ? undefined : json['laT_WGS84'],
        'lonGWGS84': !exists(json, 'lonG_WGS84') ? undefined : json['lonG_WGS84'],
    };
}

export function RekstraradilarToJSON(value?: Rekstraradilar | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'skraningarnumer': value.skraningarnumer,
        'kennitala': value.kennitala,
        'rekstraradili': value.rekstraradili,
        'adsetur': value.adsetur,
        'postfang': value.postfang,
        'heilbrigdisumdaemi': value.heilbrigdisumdaemi,
        'sottvarnarumdaemi': value.sottvarnarumdaemi,
        'postnr': value.postnr,
        'kt_Abyrgdarmanns': value.ktAbyrgdarmanns,
        'nafn_AB_Adila': value.nafnABAdila,
        'tilheyrir': value.tilheyrir,
        'rekstrarform': value.rekstrarform,
        'teg_Rekstrarform': value.tegRekstrarform,
        'svidsnumer': value.svidsnumer,
        'teG_REKSTRAR': value.teGREKSTRAR,
        'teG_REKSTRAR_HEITI': value.teGREKSTRARHEITI,
        'teG_STARFSSVIDS': value.teGSTARFSSVIDS,
        'starfssvid': value.starfssvid,
        'stada': value.stada,
        'tilkynnt': value.tilkynnt,
        'aR_TILKYNNT': value.aRTILKYNNT,
        'maN_TILKYNNT': value.maNTILKYNNT,
        'daG_TILKYNNT': value.daGTILKYNNT,
        'skrad': value.skrad,
        'stadfest': value.stadfest,
        'aR_STADFEST': value.aRSTADFEST,
        'maN_STADFEST': value.maNSTADFEST,
        'daG_STADFESTT': value.daGSTADFESTT,
        'breytt': value.breytt,
        'malsnumer': value.malsnumer,
        'tolvupostur': value.tolvupostur,
        'undirskR_ADILI': value.undirskRADILI,
        'sergrein': value.sergrein,
        'thjonustuflokkur': value.thjonustuflokkur,
        'laT_WGS84': value.laTWGS84,
        'lonG_WGS84': value.lonGWGS84,
    };
}


