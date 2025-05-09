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
 * 
 * @export
 * @interface StarfsleyfiUmsoknStarfsleyfi
 */
export interface StarfsleyfiUmsoknStarfsleyfi {
    /**
     * Kennitala á Viðkomandi
     * @type {string}
     * @memberof StarfsleyfiUmsoknStarfsleyfi
     */
    ssnNumber?: string | null;
    /**
     * Nafn á viðkomandi
     * @type {string}
     * @memberof StarfsleyfiUmsoknStarfsleyfi
     */
    name?: string | null;
    /**
     * Auðkenni Starfstétts
     * @type {string}
     * @memberof StarfsleyfiUmsoknStarfsleyfi
     */
    idProfession?: string | null;
    /**
     * Heiti starfsstétt
     * @type {string}
     * @memberof StarfsleyfiUmsoknStarfsleyfi
     */
    professionIsl?: string | null;
    /**
     * Heiti starfsstétt á ensku
     * @type {string}
     * @memberof StarfsleyfiUmsoknStarfsleyfi
     */
    professionEn?: string | null;
    /**
     * Leyfi
     * @type {string}
     * @memberof StarfsleyfiUmsoknStarfsleyfi
     */
    specialityIsl?: string | null;
    /**
     * Leyfi á ensku
     * @type {string}
     * @memberof StarfsleyfiUmsoknStarfsleyfi
     */
    specialityEn?: string | null;
    /**
     * Gildir frá dagsetning
     * @type {Date}
     * @memberof StarfsleyfiUmsoknStarfsleyfi
     */
    validFrom?: Date | null;
    /**
     * Gildir Til dagsetning
     * @type {Date}
     * @memberof StarfsleyfiUmsoknStarfsleyfi
     */
    validTo?: Date | null;
}

export function StarfsleyfiUmsoknStarfsleyfiFromJSON(json: any): StarfsleyfiUmsoknStarfsleyfi {
    return StarfsleyfiUmsoknStarfsleyfiFromJSONTyped(json, false);
}

export function StarfsleyfiUmsoknStarfsleyfiFromJSONTyped(json: any, ignoreDiscriminator: boolean): StarfsleyfiUmsoknStarfsleyfi {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ssnNumber': !exists(json, 'ssnNumber') ? undefined : json['ssnNumber'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'idProfession': !exists(json, 'idProfession') ? undefined : json['idProfession'],
        'professionIsl': !exists(json, 'professionIsl') ? undefined : json['professionIsl'],
        'professionEn': !exists(json, 'professionEn') ? undefined : json['professionEn'],
        'specialityIsl': !exists(json, 'specialityIsl') ? undefined : json['specialityIsl'],
        'specialityEn': !exists(json, 'specialityEn') ? undefined : json['specialityEn'],
        'validFrom': !exists(json, 'validFrom') ? undefined : (json['validFrom'] === null ? null : new Date(json['validFrom'])),
        'validTo': !exists(json, 'validTo') ? undefined : (json['validTo'] === null ? null : new Date(json['validTo'])),
    };
}

export function StarfsleyfiUmsoknStarfsleyfiToJSON(value?: StarfsleyfiUmsoknStarfsleyfi | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ssnNumber': value.ssnNumber,
        'name': value.name,
        'idProfession': value.idProfession,
        'professionIsl': value.professionIsl,
        'professionEn': value.professionEn,
        'specialityIsl': value.specialityIsl,
        'specialityEn': value.specialityEn,
        'validFrom': value.validFrom === undefined ? undefined : (value.validFrom === null ? null : value.validFrom.toISOString()),
        'validTo': value.validTo === undefined ? undefined : (value.validTo === null ? null : value.validTo.toISOString()),
    };
}


