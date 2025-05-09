/* tslint:disable */
/* eslint-disable */
/**
 * University Gateway
 * API for communication between island.is application system and university gateway DB, and between university gateway DB and universities system (MySchool and Ugla)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ProgramModeOfDelivery,
    ProgramModeOfDeliveryFromJSON,
    ProgramModeOfDeliveryFromJSONTyped,
    ProgramModeOfDeliveryToJSON,
    University,
    UniversityFromJSON,
    UniversityFromJSONTyped,
    UniversityToJSON,
} from './';

/**
 * 
 * @export
 * @interface ProgramBase
 */
export interface ProgramBase {
    /**
     * Program ID
     * @type {string}
     * @memberof ProgramBase
     */
    id: string;
    /**
     * External ID for the program (from University)
     * @type {string}
     * @memberof ProgramBase
     */
    externalId: string;
    /**
     * Program name (Icelandic)
     * @type {string}
     * @memberof ProgramBase
     */
    nameIs: string;
    /**
     * Program name (English)
     * @type {string}
     * @memberof ProgramBase
     */
    nameEn: string;
    /**
     * External ID for the specialization(from University)
     * @type {string}
     * @memberof ProgramBase
     */
    specializationExternalId?: string;
    /**
     * Specialization name (Icelandic)
     * @type {string}
     * @memberof ProgramBase
     */
    specializationNameIs?: string;
    /**
     * Specialization name (English)
     * @type {string}
     * @memberof ProgramBase
     */
    specializationNameEn?: string;
    /**
     * University ID
     * @type {string}
     * @memberof ProgramBase
     */
    universityId: string;
    /**
     * University details
     * @type {University}
     * @memberof ProgramBase
     */
    universityDetails: University;
    /**
     * Name of the department that the program belongs to (Icelandic)
     * @type {string}
     * @memberof ProgramBase
     */
    departmentNameIs: string;
    /**
     * Name of the department that the program belongs to (English)
     * @type {string}
     * @memberof ProgramBase
     */
    departmentNameEn: string;
    /**
     * Which year this program started on
     * @type {number}
     * @memberof ProgramBase
     */
    startingSemesterYear: number;
    /**
     * Which season this program started on
     * @type {string}
     * @memberof ProgramBase
     */
    startingSemesterSeason: ProgramBaseStartingSemesterSeasonEnum;
    /**
     * When the application period for this program starts
     * @type {Date}
     * @memberof ProgramBase
     */
    applicationStartDate: Date;
    /**
     * When the application period for this program ends
     * @type {Date}
     * @memberof ProgramBase
     */
    applicationEndDate: Date;
    /**
     * Last date for school to accept/decline student into program
     * @type {Date}
     * @memberof ProgramBase
     */
    schoolAnswerDate?: Date;
    /**
     * Last date for student to accept enrollment in school (after school accepts student)
     * @type {Date}
     * @memberof ProgramBase
     */
    studentAnswerDate?: Date;
    /**
     * Degree type
     * @type {string}
     * @memberof ProgramBase
     */
    degreeType: ProgramBaseDegreeTypeEnum;
    /**
     * Degree abbreviation
     * @type {string}
     * @memberof ProgramBase
     */
    degreeAbbreviation: string;
    /**
     * Number of course credits (in ECTS)
     * @type {number}
     * @memberof ProgramBase
     */
    credits: number;
    /**
     * Program description (Icelandic)
     * @type {string}
     * @memberof ProgramBase
     */
    descriptionIs: string;
    /**
     * Program description (English)
     * @type {string}
     * @memberof ProgramBase
     */
    descriptionEn: string;
    /**
     * Total duration for this program (in years)
     * @type {number}
     * @memberof ProgramBase
     */
    durationInYears: number;
    /**
     * Cost for program (per year)
     * @type {number}
     * @memberof ProgramBase
     */
    costPerYear?: number;
    /**
     * ISCED code for program
     * @type {string}
     * @memberof ProgramBase
     */
    iscedCode: string;
    /**
     * Modes of deliveries available for the program
     * @type {Array<ProgramModeOfDelivery>}
     * @memberof ProgramBase
     */
    modeOfDelivery: Array<ProgramModeOfDelivery>;
    /**
     * Whether the program is active and should be displayed on the external web
     * @type {boolean}
     * @memberof ProgramBase
     */
    active: boolean;
    /**
     * Whether the application period for the program is open and applications can be submitted
     * @type {boolean}
     * @memberof ProgramBase
     */
    applicationPeriodOpen: boolean;
    /**
     * Whether applications for the program should be submitted via University Gateway or the application portals of each university
     * @type {boolean}
     * @memberof ProgramBase
     */
    applicationInUniversityGateway: boolean;
}

export function ProgramBaseFromJSON(json: any): ProgramBase {
    return ProgramBaseFromJSONTyped(json, false);
}

export function ProgramBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProgramBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'externalId': json['externalId'],
        'nameIs': json['nameIs'],
        'nameEn': json['nameEn'],
        'specializationExternalId': !exists(json, 'specializationExternalId') ? undefined : json['specializationExternalId'],
        'specializationNameIs': !exists(json, 'specializationNameIs') ? undefined : json['specializationNameIs'],
        'specializationNameEn': !exists(json, 'specializationNameEn') ? undefined : json['specializationNameEn'],
        'universityId': json['universityId'],
        'universityDetails': UniversityFromJSON(json['universityDetails']),
        'departmentNameIs': json['departmentNameIs'],
        'departmentNameEn': json['departmentNameEn'],
        'startingSemesterYear': json['startingSemesterYear'],
        'startingSemesterSeason': json['startingSemesterSeason'],
        'applicationStartDate': (new Date(json['applicationStartDate'])),
        'applicationEndDate': (new Date(json['applicationEndDate'])),
        'schoolAnswerDate': !exists(json, 'schoolAnswerDate') ? undefined : (new Date(json['schoolAnswerDate'])),
        'studentAnswerDate': !exists(json, 'studentAnswerDate') ? undefined : (new Date(json['studentAnswerDate'])),
        'degreeType': json['degreeType'],
        'degreeAbbreviation': json['degreeAbbreviation'],
        'credits': json['credits'],
        'descriptionIs': json['descriptionIs'],
        'descriptionEn': json['descriptionEn'],
        'durationInYears': json['durationInYears'],
        'costPerYear': !exists(json, 'costPerYear') ? undefined : json['costPerYear'],
        'iscedCode': json['iscedCode'],
        'modeOfDelivery': ((json['modeOfDelivery'] as Array<any>).map(ProgramModeOfDeliveryFromJSON)),
        'active': json['active'],
        'applicationPeriodOpen': json['applicationPeriodOpen'],
        'applicationInUniversityGateway': json['applicationInUniversityGateway'],
    };
}

export function ProgramBaseToJSON(value?: ProgramBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'externalId': value.externalId,
        'nameIs': value.nameIs,
        'nameEn': value.nameEn,
        'specializationExternalId': value.specializationExternalId,
        'specializationNameIs': value.specializationNameIs,
        'specializationNameEn': value.specializationNameEn,
        'universityId': value.universityId,
        'universityDetails': UniversityToJSON(value.universityDetails),
        'departmentNameIs': value.departmentNameIs,
        'departmentNameEn': value.departmentNameEn,
        'startingSemesterYear': value.startingSemesterYear,
        'startingSemesterSeason': value.startingSemesterSeason,
        'applicationStartDate': (value.applicationStartDate.toISOString()),
        'applicationEndDate': (value.applicationEndDate.toISOString()),
        'schoolAnswerDate': value.schoolAnswerDate === undefined ? undefined : (value.schoolAnswerDate.toISOString()),
        'studentAnswerDate': value.studentAnswerDate === undefined ? undefined : (value.studentAnswerDate.toISOString()),
        'degreeType': value.degreeType,
        'degreeAbbreviation': value.degreeAbbreviation,
        'credits': value.credits,
        'descriptionIs': value.descriptionIs,
        'descriptionEn': value.descriptionEn,
        'durationInYears': value.durationInYears,
        'costPerYear': value.costPerYear,
        'iscedCode': value.iscedCode,
        'modeOfDelivery': ((value.modeOfDelivery as Array<any>).map(ProgramModeOfDeliveryToJSON)),
        'active': value.active,
        'applicationPeriodOpen': value.applicationPeriodOpen,
        'applicationInUniversityGateway': value.applicationInUniversityGateway,
    };
}

/**
* @export
* @enum {string}
*/
export enum ProgramBaseStartingSemesterSeasonEnum {
    FALL = 'FALL',
    SPRING = 'SPRING',
    SUMMER = 'SUMMER'
}
/**
* @export
* @enum {string}
*/
export enum ProgramBaseDegreeTypeEnum {
    UNDERGRADUATE = 'UNDERGRADUATE',
    POSTGRADUATE = 'POSTGRADUATE',
    DOCTORAL = 'DOCTORAL'
}


