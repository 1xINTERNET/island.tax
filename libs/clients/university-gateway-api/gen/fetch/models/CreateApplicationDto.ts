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
    CreateApplicationApplicantDto,
    CreateApplicationApplicantDtoFromJSON,
    CreateApplicationApplicantDtoFromJSONTyped,
    CreateApplicationApplicantDtoToJSON,
    CreateApplicationEducationDto,
    CreateApplicationEducationDtoFromJSON,
    CreateApplicationEducationDtoFromJSONTyped,
    CreateApplicationEducationDtoToJSON,
    CreateApplicationExtraFieldsDto,
    CreateApplicationExtraFieldsDtoFromJSON,
    CreateApplicationExtraFieldsDtoFromJSONTyped,
    CreateApplicationExtraFieldsDtoToJSON,
    CreateApplicationWorkExperienceDto,
    CreateApplicationWorkExperienceDtoFromJSON,
    CreateApplicationWorkExperienceDtoFromJSONTyped,
    CreateApplicationWorkExperienceDtoToJSON,
} from './';

/**
 * 
 * @export
 * @interface CreateApplicationDto
 */
export interface CreateApplicationDto {
    /**
     * University ID
     * @type {string}
     * @memberof CreateApplicationDto
     */
    universityId: string;
    /**
     * Application ID
     * @type {string}
     * @memberof CreateApplicationDto
     */
    applicationId: string;
    /**
     * Program ID
     * @type {string}
     * @memberof CreateApplicationDto
     */
    programId: string;
    /**
     * What mode of delivery was selected in the application
     * @type {string}
     * @memberof CreateApplicationDto
     */
    modeOfDelivery: CreateApplicationDtoModeOfDeliveryEnum;
    /**
     * Information about applicant
     * @type {CreateApplicationApplicantDto}
     * @memberof CreateApplicationDto
     */
    applicant: CreateApplicationApplicantDto;
    /**
     * Preferred languange, should be language user used when filling out application in application system
     * @type {string}
     * @memberof CreateApplicationDto
     */
    preferredLanguage?: string;
    /**
     * The chosen type of former education chosen
     * @type {string}
     * @memberof CreateApplicationDto
     */
    educationOption?: CreateApplicationDtoEducationOptionEnum;
    /**
     * List of education
     * @type {Array<CreateApplicationEducationDto>}
     * @memberof CreateApplicationDto
     */
    educationList: Array<CreateApplicationEducationDto>;
    /**
     * List of work experience
     * @type {Array<CreateApplicationWorkExperienceDto>}
     * @memberof CreateApplicationDto
     */
    workExperienceList: Array<CreateApplicationWorkExperienceDto>;
    /**
     * Extra application fields
     * @type {Array<CreateApplicationExtraFieldsDto>}
     * @memberof CreateApplicationDto
     */
    extraFieldList: Array<CreateApplicationExtraFieldsDto>;
}

export function CreateApplicationDtoFromJSON(json: any): CreateApplicationDto {
    return CreateApplicationDtoFromJSONTyped(json, false);
}

export function CreateApplicationDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateApplicationDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'universityId': json['universityId'],
        'applicationId': json['applicationId'],
        'programId': json['programId'],
        'modeOfDelivery': json['modeOfDelivery'],
        'applicant': CreateApplicationApplicantDtoFromJSON(json['applicant']),
        'preferredLanguage': !exists(json, 'preferredLanguage') ? undefined : json['preferredLanguage'],
        'educationOption': !exists(json, 'educationOption') ? undefined : json['educationOption'],
        'educationList': ((json['educationList'] as Array<any>).map(CreateApplicationEducationDtoFromJSON)),
        'workExperienceList': ((json['workExperienceList'] as Array<any>).map(CreateApplicationWorkExperienceDtoFromJSON)),
        'extraFieldList': ((json['extraFieldList'] as Array<any>).map(CreateApplicationExtraFieldsDtoFromJSON)),
    };
}

export function CreateApplicationDtoToJSON(value?: CreateApplicationDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'universityId': value.universityId,
        'applicationId': value.applicationId,
        'programId': value.programId,
        'modeOfDelivery': value.modeOfDelivery,
        'applicant': CreateApplicationApplicantDtoToJSON(value.applicant),
        'preferredLanguage': value.preferredLanguage,
        'educationOption': value.educationOption,
        'educationList': ((value.educationList as Array<any>).map(CreateApplicationEducationDtoToJSON)),
        'workExperienceList': ((value.workExperienceList as Array<any>).map(CreateApplicationWorkExperienceDtoToJSON)),
        'extraFieldList': ((value.extraFieldList as Array<any>).map(CreateApplicationExtraFieldsDtoToJSON)),
    };
}

/**
* @export
* @enum {string}
*/
export enum CreateApplicationDtoModeOfDeliveryEnum {
    ON_SITE = 'ON_SITE',
    REMOTE = 'REMOTE',
    ONLINE = 'ONLINE',
    MIXED = 'MIXED'
}
/**
* @export
* @enum {string}
*/
export enum CreateApplicationDtoEducationOptionEnum {
    DIPLOMA = 'DIPLOMA',
    NOTFINISHED = 'NOTFINISHED',
    THIRDLEVEL = 'THIRDLEVEL',
    EXEMPTION = 'EXEMPTION'
}


