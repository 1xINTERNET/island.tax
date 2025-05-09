/* tslint:disable */
/* eslint-disable */
/**
 * SamgÃ¶ngustofa
 * Leitar eftir Ã¶kutÃ¦kjum Ãºt frÃ¡ fastanÃºmeri, skrï¿½ningarnÃºmeri eÃ°a verksmiÃ°junÃºmeri - Release-46 : 20241106.1
 *
 * The version of the OpenAPI document: v1
 * Contact: samgongustofa@samgongustofa.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    BasicVehicleInformationAddonsChangeDto,
    BasicVehicleInformationAddonsChangeDtoFromJSON,
    BasicVehicleInformationAddonsChangeDtoFromJSONTyped,
    BasicVehicleInformationAddonsChangeDtoToJSON,
    BasicVehicleInformationAdrAlterationDto,
    BasicVehicleInformationAdrAlterationDtoFromJSON,
    BasicVehicleInformationAdrAlterationDtoFromJSONTyped,
    BasicVehicleInformationAdrAlterationDtoToJSON,
    BasicVehicleInformationAdrDto,
    BasicVehicleInformationAdrDtoFromJSON,
    BasicVehicleInformationAdrDtoFromJSONTyped,
    BasicVehicleInformationAdrDtoToJSON,
    BasicVehicleInformationDisasterDto,
    BasicVehicleInformationDisasterDtoFromJSON,
    BasicVehicleInformationDisasterDtoFromJSONTyped,
    BasicVehicleInformationDisasterDtoToJSON,
    BasicVehicleInformationInspectionDto,
    BasicVehicleInformationInspectionDtoFromJSON,
    BasicVehicleInformationInspectionDtoFromJSONTyped,
    BasicVehicleInformationInspectionDtoToJSON,
    BasicVehicleInformationMileageReadingDto,
    BasicVehicleInformationMileageReadingDtoFromJSON,
    BasicVehicleInformationMileageReadingDtoFromJSONTyped,
    BasicVehicleInformationMileageReadingDtoToJSON,
    BasicVehicleInformationOperatorDto,
    BasicVehicleInformationOperatorDtoFromJSON,
    BasicVehicleInformationOperatorDtoFromJSONTyped,
    BasicVehicleInformationOperatorDtoToJSON,
    BasicVehicleInformationOutofuseDto,
    BasicVehicleInformationOutofuseDtoFromJSON,
    BasicVehicleInformationOutofuseDtoFromJSONTyped,
    BasicVehicleInformationOutofuseDtoToJSON,
    BasicVehicleInformationOwnerDto,
    BasicVehicleInformationOwnerDtoFromJSON,
    BasicVehicleInformationOwnerDtoFromJSONTyped,
    BasicVehicleInformationOwnerDtoToJSON,
    BasicVehicleInformationOwnerRegistrationErrorDto,
    BasicVehicleInformationOwnerRegistrationErrorDtoFromJSON,
    BasicVehicleInformationOwnerRegistrationErrorDtoFromJSONTyped,
    BasicVehicleInformationOwnerRegistrationErrorDtoToJSON,
    BasicVehicleInformationPlateDto,
    BasicVehicleInformationPlateDtoFromJSON,
    BasicVehicleInformationPlateDtoFromJSONTyped,
    BasicVehicleInformationPlateDtoToJSON,
    BasicVehicleInformationRegistrationDto,
    BasicVehicleInformationRegistrationDtoFromJSON,
    BasicVehicleInformationRegistrationDtoFromJSONTyped,
    BasicVehicleInformationRegistrationDtoToJSON,
    BasicVehicleInformationRemarkDto,
    BasicVehicleInformationRemarkDtoFromJSON,
    BasicVehicleInformationRemarkDtoFromJSONTyped,
    BasicVehicleInformationRemarkDtoToJSON,
    BasicVehicleInformationSpecialEquipmentChangeDto,
    BasicVehicleInformationSpecialEquipmentChangeDtoFromJSON,
    BasicVehicleInformationSpecialEquipmentChangeDtoFromJSONTyped,
    BasicVehicleInformationSpecialEquipmentChangeDtoToJSON,
    BasicVehicleInformationStolenDto,
    BasicVehicleInformationStolenDtoFromJSON,
    BasicVehicleInformationStolenDtoFromJSONTyped,
    BasicVehicleInformationStolenDtoToJSON,
    BasicVehicleInformationSuperstructureChangeDto,
    BasicVehicleInformationSuperstructureChangeDtoFromJSON,
    BasicVehicleInformationSuperstructureChangeDtoFromJSONTyped,
    BasicVehicleInformationSuperstructureChangeDtoToJSON,
    BasicVehicleInformationTechnicalDto,
    BasicVehicleInformationTechnicalDtoFromJSON,
    BasicVehicleInformationTechnicalDtoFromJSONTyped,
    BasicVehicleInformationTechnicalDtoToJSON,
    BasicVehicleInformationTypeChangeDto,
    BasicVehicleInformationTypeChangeDtoFromJSON,
    BasicVehicleInformationTypeChangeDtoFromJSONTyped,
    BasicVehicleInformationTypeChangeDtoToJSON,
    BasicVehicleInformationUpdatelockDto,
    BasicVehicleInformationUpdatelockDtoFromJSON,
    BasicVehicleInformationUpdatelockDtoFromJSONTyped,
    BasicVehicleInformationUpdatelockDtoToJSON,
    BasicVehicleInformationVehicleChangeDto,
    BasicVehicleInformationVehicleChangeDtoFromJSON,
    BasicVehicleInformationVehicleChangeDtoFromJSONTyped,
    BasicVehicleInformationVehicleChangeDtoToJSON,
    OutstandingFees,
    OutstandingFeesFromJSON,
    OutstandingFeesFromJSONTyped,
    OutstandingFeesToJSON,
} from './';

/**
 * 
 * @export
 * @interface BasicVehicleInformationDto
 */
export interface BasicVehicleInformationDto {
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationDto
     */
    message?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationDto
     */
    permno?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationDto
     */
    regno?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationDto
     */
    vin?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationDto
     */
    typeno?: string | null;
    /**
     * 
     * @type {number}
     * @memberof BasicVehicleInformationDto
     */
    typeapproval?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BasicVehicleInformationDto
     */
    typeapprovalextension?: number | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationDto
     */
    eutypeapproval?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationDto
     */
    variant?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationDto
     */
    version?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationDto
     */
    modelcode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationDto
     */
    make?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationDto
     */
    vehcom?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationDto
     */
    speccom?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationDto
     */
    color?: string | null;
    /**
     * 
     * @type {number}
     * @memberof BasicVehicleInformationDto
     */
    productyear?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BasicVehicleInformationDto
     */
    modelyear?: number | null;
    /**
     * 
     * @type {Date}
     * @memberof BasicVehicleInformationDto
     */
    preregdate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof BasicVehicleInformationDto
     */
    customsdate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof BasicVehicleInformationDto
     */
    firstregdate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof BasicVehicleInformationDto
     */
    newregdate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof BasicVehicleInformationDto
     */
    deregdate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof BasicVehicleInformationDto
     */
    reregdate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof BasicVehicleInformationDto
     */
    ownregdate?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationDto
     */
    manufacturer?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationDto
     */
    country?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationDto
     */
    formercountry?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationDto
     */
    importerpersidno?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationDto
     */
    importername?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationDto
     */
    _import?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationDto
     */
    vehiclestatus?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationDto
     */
    disastertype?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof BasicVehicleInformationDto
     */
    hasdisasters?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BasicVehicleInformationDto
     */
    fixed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BasicVehicleInformationDto
     */
    hasaccidents?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationDto
     */
    usegroup?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationDto
     */
    regtype?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationDto
     */
    platetypefront?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationDto
     */
    platetyperear?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationDto
     */
    platestatus?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationDto
     */
    platestoragelocation?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationDto
     */
    insurancecompany?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof BasicVehicleInformationDto
     */
    insurancestatus?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof BasicVehicleInformationDto
     */
    nextinspectiondate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof BasicVehicleInformationDto
     */
    nextinspectiondateIfPassedInspectionToday?: Date | null;
    /**
     * 
     * @type {boolean}
     * @memberof BasicVehicleInformationDto
     */
    rebuilt?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof BasicVehicleInformationDto
     */
    offroad?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationDto
     */
    taxgroup?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof BasicVehicleInformationDto
     */
    nextAvailableMileageReadDate?: Date | null;
    /**
     * 
     * @type {boolean}
     * @memberof BasicVehicleInformationDto
     */
    requiresMileageRegistration?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof BasicVehicleInformationDto
     */
    canRegisterMileage?: boolean | null;
    /**
     * 
     * @type {BasicVehicleInformationTechnicalDto}
     * @memberof BasicVehicleInformationDto
     */
    technical?: BasicVehicleInformationTechnicalDto;
    /**
     * 
     * @type {Array<BasicVehicleInformationOwnerDto>}
     * @memberof BasicVehicleInformationDto
     */
    owners?: Array<BasicVehicleInformationOwnerDto> | null;
    /**
     * 
     * @type {Array<BasicVehicleInformationOperatorDto>}
     * @memberof BasicVehicleInformationDto
     */
    operators?: Array<BasicVehicleInformationOperatorDto> | null;
    /**
     * 
     * @type {Array<BasicVehicleInformationPlateDto>}
     * @memberof BasicVehicleInformationDto
     */
    plates?: Array<BasicVehicleInformationPlateDto> | null;
    /**
     * 
     * @type {Array<BasicVehicleInformationDisasterDto>}
     * @memberof BasicVehicleInformationDto
     */
    disasters?: Array<BasicVehicleInformationDisasterDto> | null;
    /**
     * 
     * @type {Array<BasicVehicleInformationRegistrationDto>}
     * @memberof BasicVehicleInformationDto
     */
    registrations?: Array<BasicVehicleInformationRegistrationDto> | null;
    /**
     * 
     * @type {Array<BasicVehicleInformationOutofuseDto>}
     * @memberof BasicVehicleInformationDto
     */
    outofuses?: Array<BasicVehicleInformationOutofuseDto> | null;
    /**
     * 
     * @type {Array<BasicVehicleInformationUpdatelockDto>}
     * @memberof BasicVehicleInformationDto
     */
    updatelocks?: Array<BasicVehicleInformationUpdatelockDto> | null;
    /**
     * 
     * @type {Array<BasicVehicleInformationStolenDto>}
     * @memberof BasicVehicleInformationDto
     */
    stolens?: Array<BasicVehicleInformationStolenDto> | null;
    /**
     * 
     * @type {Array<BasicVehicleInformationRemarkDto>}
     * @memberof BasicVehicleInformationDto
     */
    remarks?: Array<BasicVehicleInformationRemarkDto> | null;
    /**
     * 
     * @type {Array<BasicVehicleInformationInspectionDto>}
     * @memberof BasicVehicleInformationDto
     */
    inspections?: Array<BasicVehicleInformationInspectionDto> | null;
    /**
     * 
     * @type {Array<BasicVehicleInformationOwnerRegistrationErrorDto>}
     * @memberof BasicVehicleInformationDto
     */
    ownerregistrationerrors?: Array<BasicVehicleInformationOwnerRegistrationErrorDto> | null;
    /**
     * 
     * @type {Array<BasicVehicleInformationVehicleChangeDto>}
     * @memberof BasicVehicleInformationDto
     */
    vehicleChanges?: Array<BasicVehicleInformationVehicleChangeDto> | null;
    /**
     * 
     * @type {Array<BasicVehicleInformationTypeChangeDto>}
     * @memberof BasicVehicleInformationDto
     */
    typeChanges?: Array<BasicVehicleInformationTypeChangeDto> | null;
    /**
     * 
     * @type {Array<BasicVehicleInformationSpecialEquipmentChangeDto>}
     * @memberof BasicVehicleInformationDto
     */
    specialEquipmentChanges?: Array<BasicVehicleInformationSpecialEquipmentChangeDto> | null;
    /**
     * 
     * @type {Array<BasicVehicleInformationAddonsChangeDto>}
     * @memberof BasicVehicleInformationDto
     */
    addonsChanges?: Array<BasicVehicleInformationAddonsChangeDto> | null;
    /**
     * 
     * @type {Array<BasicVehicleInformationSuperstructureChangeDto>}
     * @memberof BasicVehicleInformationDto
     */
    superstructureChanges?: Array<BasicVehicleInformationSuperstructureChangeDto> | null;
    /**
     * 
     * @type {Array<BasicVehicleInformationAdrDto>}
     * @memberof BasicVehicleInformationDto
     */
    adrs?: Array<BasicVehicleInformationAdrDto> | null;
    /**
     * 
     * @type {Array<BasicVehicleInformationMileageReadingDto>}
     * @memberof BasicVehicleInformationDto
     */
    mileageReadings?: Array<BasicVehicleInformationMileageReadingDto> | null;
    /**
     * 
     * @type {BasicVehicleInformationAdrAlterationDto}
     * @memberof BasicVehicleInformationDto
     */
    adr?: BasicVehicleInformationAdrAlterationDto;
    /**
     * 
     * @type {OutstandingFees}
     * @memberof BasicVehicleInformationDto
     */
    fees?: OutstandingFees;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationDto
     */
    euGroup?: string | null;
}

export function BasicVehicleInformationDtoFromJSON(json: any): BasicVehicleInformationDto {
    return BasicVehicleInformationDtoFromJSONTyped(json, false);
}

export function BasicVehicleInformationDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BasicVehicleInformationDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
        'permno': !exists(json, 'permno') ? undefined : json['permno'],
        'regno': !exists(json, 'regno') ? undefined : json['regno'],
        'vin': !exists(json, 'vin') ? undefined : json['vin'],
        'typeno': !exists(json, 'typeno') ? undefined : json['typeno'],
        'typeapproval': !exists(json, 'typeapproval') ? undefined : json['typeapproval'],
        'typeapprovalextension': !exists(json, 'typeapprovalextension') ? undefined : json['typeapprovalextension'],
        'eutypeapproval': !exists(json, 'eutypeapproval') ? undefined : json['eutypeapproval'],
        'variant': !exists(json, 'variant') ? undefined : json['variant'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'modelcode': !exists(json, 'modelcode') ? undefined : json['modelcode'],
        'make': !exists(json, 'make') ? undefined : json['make'],
        'vehcom': !exists(json, 'vehcom') ? undefined : json['vehcom'],
        'speccom': !exists(json, 'speccom') ? undefined : json['speccom'],
        'color': !exists(json, 'color') ? undefined : json['color'],
        'productyear': !exists(json, 'productyear') ? undefined : json['productyear'],
        'modelyear': !exists(json, 'modelyear') ? undefined : json['modelyear'],
        'preregdate': !exists(json, 'preregdate') ? undefined : (json['preregdate'] === null ? null : new Date(json['preregdate'])),
        'customsdate': !exists(json, 'customsdate') ? undefined : (json['customsdate'] === null ? null : new Date(json['customsdate'])),
        'firstregdate': !exists(json, 'firstregdate') ? undefined : (json['firstregdate'] === null ? null : new Date(json['firstregdate'])),
        'newregdate': !exists(json, 'newregdate') ? undefined : (json['newregdate'] === null ? null : new Date(json['newregdate'])),
        'deregdate': !exists(json, 'deregdate') ? undefined : (json['deregdate'] === null ? null : new Date(json['deregdate'])),
        'reregdate': !exists(json, 'reregdate') ? undefined : (json['reregdate'] === null ? null : new Date(json['reregdate'])),
        'ownregdate': !exists(json, 'ownregdate') ? undefined : (json['ownregdate'] === null ? null : new Date(json['ownregdate'])),
        'manufacturer': !exists(json, 'manufacturer') ? undefined : json['manufacturer'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'formercountry': !exists(json, 'formercountry') ? undefined : json['formercountry'],
        'importerpersidno': !exists(json, 'importerpersidno') ? undefined : json['importerpersidno'],
        'importername': !exists(json, 'importername') ? undefined : json['importername'],
        '_import': !exists(json, 'import') ? undefined : json['import'],
        'vehiclestatus': !exists(json, 'vehiclestatus') ? undefined : json['vehiclestatus'],
        'disastertype': !exists(json, 'disastertype') ? undefined : json['disastertype'],
        'hasdisasters': !exists(json, 'hasdisasters') ? undefined : json['hasdisasters'],
        'fixed': !exists(json, 'fixed') ? undefined : json['fixed'],
        'hasaccidents': !exists(json, 'hasaccidents') ? undefined : json['hasaccidents'],
        'usegroup': !exists(json, 'usegroup') ? undefined : json['usegroup'],
        'regtype': !exists(json, 'regtype') ? undefined : json['regtype'],
        'platetypefront': !exists(json, 'platetypefront') ? undefined : json['platetypefront'],
        'platetyperear': !exists(json, 'platetyperear') ? undefined : json['platetyperear'],
        'platestatus': !exists(json, 'platestatus') ? undefined : json['platestatus'],
        'platestoragelocation': !exists(json, 'platestoragelocation') ? undefined : json['platestoragelocation'],
        'insurancecompany': !exists(json, 'insurancecompany') ? undefined : json['insurancecompany'],
        'insurancestatus': !exists(json, 'insurancestatus') ? undefined : json['insurancestatus'],
        'nextinspectiondate': !exists(json, 'nextinspectiondate') ? undefined : (json['nextinspectiondate'] === null ? null : new Date(json['nextinspectiondate'])),
        'nextinspectiondateIfPassedInspectionToday': !exists(json, 'nextinspectiondateIfPassedInspectionToday') ? undefined : (json['nextinspectiondateIfPassedInspectionToday'] === null ? null : new Date(json['nextinspectiondateIfPassedInspectionToday'])),
        'rebuilt': !exists(json, 'rebuilt') ? undefined : json['rebuilt'],
        'offroad': !exists(json, 'offroad') ? undefined : json['offroad'],
        'taxgroup': !exists(json, 'taxgroup') ? undefined : json['taxgroup'],
        'nextAvailableMileageReadDate': !exists(json, 'nextAvailableMileageReadDate') ? undefined : (json['nextAvailableMileageReadDate'] === null ? null : new Date(json['nextAvailableMileageReadDate'])),
        'requiresMileageRegistration': !exists(json, 'requiresMileageRegistration') ? undefined : json['requiresMileageRegistration'],
        'canRegisterMileage': !exists(json, 'canRegisterMileage') ? undefined : json['canRegisterMileage'],
        'technical': !exists(json, 'technical') ? undefined : BasicVehicleInformationTechnicalDtoFromJSON(json['technical']),
        'owners': !exists(json, 'owners') ? undefined : (json['owners'] === null ? null : (json['owners'] as Array<any>).map(BasicVehicleInformationOwnerDtoFromJSON)),
        'operators': !exists(json, 'operators') ? undefined : (json['operators'] === null ? null : (json['operators'] as Array<any>).map(BasicVehicleInformationOperatorDtoFromJSON)),
        'plates': !exists(json, 'plates') ? undefined : (json['plates'] === null ? null : (json['plates'] as Array<any>).map(BasicVehicleInformationPlateDtoFromJSON)),
        'disasters': !exists(json, 'disasters') ? undefined : (json['disasters'] === null ? null : (json['disasters'] as Array<any>).map(BasicVehicleInformationDisasterDtoFromJSON)),
        'registrations': !exists(json, 'registrations') ? undefined : (json['registrations'] === null ? null : (json['registrations'] as Array<any>).map(BasicVehicleInformationRegistrationDtoFromJSON)),
        'outofuses': !exists(json, 'outofuses') ? undefined : (json['outofuses'] === null ? null : (json['outofuses'] as Array<any>).map(BasicVehicleInformationOutofuseDtoFromJSON)),
        'updatelocks': !exists(json, 'updatelocks') ? undefined : (json['updatelocks'] === null ? null : (json['updatelocks'] as Array<any>).map(BasicVehicleInformationUpdatelockDtoFromJSON)),
        'stolens': !exists(json, 'stolens') ? undefined : (json['stolens'] === null ? null : (json['stolens'] as Array<any>).map(BasicVehicleInformationStolenDtoFromJSON)),
        'remarks': !exists(json, 'remarks') ? undefined : (json['remarks'] === null ? null : (json['remarks'] as Array<any>).map(BasicVehicleInformationRemarkDtoFromJSON)),
        'inspections': !exists(json, 'inspections') ? undefined : (json['inspections'] === null ? null : (json['inspections'] as Array<any>).map(BasicVehicleInformationInspectionDtoFromJSON)),
        'ownerregistrationerrors': !exists(json, 'ownerregistrationerrors') ? undefined : (json['ownerregistrationerrors'] === null ? null : (json['ownerregistrationerrors'] as Array<any>).map(BasicVehicleInformationOwnerRegistrationErrorDtoFromJSON)),
        'vehicleChanges': !exists(json, 'vehicleChanges') ? undefined : (json['vehicleChanges'] === null ? null : (json['vehicleChanges'] as Array<any>).map(BasicVehicleInformationVehicleChangeDtoFromJSON)),
        'typeChanges': !exists(json, 'typeChanges') ? undefined : (json['typeChanges'] === null ? null : (json['typeChanges'] as Array<any>).map(BasicVehicleInformationTypeChangeDtoFromJSON)),
        'specialEquipmentChanges': !exists(json, 'specialEquipmentChanges') ? undefined : (json['specialEquipmentChanges'] === null ? null : (json['specialEquipmentChanges'] as Array<any>).map(BasicVehicleInformationSpecialEquipmentChangeDtoFromJSON)),
        'addonsChanges': !exists(json, 'addonsChanges') ? undefined : (json['addonsChanges'] === null ? null : (json['addonsChanges'] as Array<any>).map(BasicVehicleInformationAddonsChangeDtoFromJSON)),
        'superstructureChanges': !exists(json, 'superstructureChanges') ? undefined : (json['superstructureChanges'] === null ? null : (json['superstructureChanges'] as Array<any>).map(BasicVehicleInformationSuperstructureChangeDtoFromJSON)),
        'adrs': !exists(json, 'adrs') ? undefined : (json['adrs'] === null ? null : (json['adrs'] as Array<any>).map(BasicVehicleInformationAdrDtoFromJSON)),
        'mileageReadings': !exists(json, 'mileageReadings') ? undefined : (json['mileageReadings'] === null ? null : (json['mileageReadings'] as Array<any>).map(BasicVehicleInformationMileageReadingDtoFromJSON)),
        'adr': !exists(json, 'adr') ? undefined : BasicVehicleInformationAdrAlterationDtoFromJSON(json['adr']),
        'fees': !exists(json, 'fees') ? undefined : OutstandingFeesFromJSON(json['fees']),
        'euGroup': !exists(json, 'euGroup') ? undefined : json['euGroup'],
    };
}

export function BasicVehicleInformationDtoToJSON(value?: BasicVehicleInformationDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
        'permno': value.permno,
        'regno': value.regno,
        'vin': value.vin,
        'typeno': value.typeno,
        'typeapproval': value.typeapproval,
        'typeapprovalextension': value.typeapprovalextension,
        'eutypeapproval': value.eutypeapproval,
        'variant': value.variant,
        'version': value.version,
        'modelcode': value.modelcode,
        'make': value.make,
        'vehcom': value.vehcom,
        'speccom': value.speccom,
        'color': value.color,
        'productyear': value.productyear,
        'modelyear': value.modelyear,
        'preregdate': value.preregdate === undefined ? undefined : (value.preregdate === null ? null : value.preregdate.toISOString()),
        'customsdate': value.customsdate === undefined ? undefined : (value.customsdate === null ? null : value.customsdate.toISOString()),
        'firstregdate': value.firstregdate === undefined ? undefined : (value.firstregdate === null ? null : value.firstregdate.toISOString()),
        'newregdate': value.newregdate === undefined ? undefined : (value.newregdate === null ? null : value.newregdate.toISOString()),
        'deregdate': value.deregdate === undefined ? undefined : (value.deregdate === null ? null : value.deregdate.toISOString()),
        'reregdate': value.reregdate === undefined ? undefined : (value.reregdate === null ? null : value.reregdate.toISOString()),
        'ownregdate': value.ownregdate === undefined ? undefined : (value.ownregdate === null ? null : value.ownregdate.toISOString()),
        'manufacturer': value.manufacturer,
        'country': value.country,
        'formercountry': value.formercountry,
        'importerpersidno': value.importerpersidno,
        'importername': value.importername,
        'import': value._import,
        'vehiclestatus': value.vehiclestatus,
        'disastertype': value.disastertype,
        'hasdisasters': value.hasdisasters,
        'fixed': value.fixed,
        'hasaccidents': value.hasaccidents,
        'usegroup': value.usegroup,
        'regtype': value.regtype,
        'platetypefront': value.platetypefront,
        'platetyperear': value.platetyperear,
        'platestatus': value.platestatus,
        'platestoragelocation': value.platestoragelocation,
        'insurancecompany': value.insurancecompany,
        'insurancestatus': value.insurancestatus,
        'nextinspectiondate': value.nextinspectiondate === undefined ? undefined : (value.nextinspectiondate === null ? null : value.nextinspectiondate.toISOString()),
        'nextinspectiondateIfPassedInspectionToday': value.nextinspectiondateIfPassedInspectionToday === undefined ? undefined : (value.nextinspectiondateIfPassedInspectionToday === null ? null : value.nextinspectiondateIfPassedInspectionToday.toISOString()),
        'rebuilt': value.rebuilt,
        'offroad': value.offroad,
        'taxgroup': value.taxgroup,
        'nextAvailableMileageReadDate': value.nextAvailableMileageReadDate === undefined ? undefined : (value.nextAvailableMileageReadDate === null ? null : value.nextAvailableMileageReadDate.toISOString().substr(0,10)),
        'requiresMileageRegistration': value.requiresMileageRegistration,
        'canRegisterMileage': value.canRegisterMileage,
        'technical': BasicVehicleInformationTechnicalDtoToJSON(value.technical),
        'owners': value.owners === undefined ? undefined : (value.owners === null ? null : (value.owners as Array<any>).map(BasicVehicleInformationOwnerDtoToJSON)),
        'operators': value.operators === undefined ? undefined : (value.operators === null ? null : (value.operators as Array<any>).map(BasicVehicleInformationOperatorDtoToJSON)),
        'plates': value.plates === undefined ? undefined : (value.plates === null ? null : (value.plates as Array<any>).map(BasicVehicleInformationPlateDtoToJSON)),
        'disasters': value.disasters === undefined ? undefined : (value.disasters === null ? null : (value.disasters as Array<any>).map(BasicVehicleInformationDisasterDtoToJSON)),
        'registrations': value.registrations === undefined ? undefined : (value.registrations === null ? null : (value.registrations as Array<any>).map(BasicVehicleInformationRegistrationDtoToJSON)),
        'outofuses': value.outofuses === undefined ? undefined : (value.outofuses === null ? null : (value.outofuses as Array<any>).map(BasicVehicleInformationOutofuseDtoToJSON)),
        'updatelocks': value.updatelocks === undefined ? undefined : (value.updatelocks === null ? null : (value.updatelocks as Array<any>).map(BasicVehicleInformationUpdatelockDtoToJSON)),
        'stolens': value.stolens === undefined ? undefined : (value.stolens === null ? null : (value.stolens as Array<any>).map(BasicVehicleInformationStolenDtoToJSON)),
        'remarks': value.remarks === undefined ? undefined : (value.remarks === null ? null : (value.remarks as Array<any>).map(BasicVehicleInformationRemarkDtoToJSON)),
        'inspections': value.inspections === undefined ? undefined : (value.inspections === null ? null : (value.inspections as Array<any>).map(BasicVehicleInformationInspectionDtoToJSON)),
        'ownerregistrationerrors': value.ownerregistrationerrors === undefined ? undefined : (value.ownerregistrationerrors === null ? null : (value.ownerregistrationerrors as Array<any>).map(BasicVehicleInformationOwnerRegistrationErrorDtoToJSON)),
        'vehicleChanges': value.vehicleChanges === undefined ? undefined : (value.vehicleChanges === null ? null : (value.vehicleChanges as Array<any>).map(BasicVehicleInformationVehicleChangeDtoToJSON)),
        'typeChanges': value.typeChanges === undefined ? undefined : (value.typeChanges === null ? null : (value.typeChanges as Array<any>).map(BasicVehicleInformationTypeChangeDtoToJSON)),
        'specialEquipmentChanges': value.specialEquipmentChanges === undefined ? undefined : (value.specialEquipmentChanges === null ? null : (value.specialEquipmentChanges as Array<any>).map(BasicVehicleInformationSpecialEquipmentChangeDtoToJSON)),
        'addonsChanges': value.addonsChanges === undefined ? undefined : (value.addonsChanges === null ? null : (value.addonsChanges as Array<any>).map(BasicVehicleInformationAddonsChangeDtoToJSON)),
        'superstructureChanges': value.superstructureChanges === undefined ? undefined : (value.superstructureChanges === null ? null : (value.superstructureChanges as Array<any>).map(BasicVehicleInformationSuperstructureChangeDtoToJSON)),
        'adrs': value.adrs === undefined ? undefined : (value.adrs === null ? null : (value.adrs as Array<any>).map(BasicVehicleInformationAdrDtoToJSON)),
        'mileageReadings': value.mileageReadings === undefined ? undefined : (value.mileageReadings === null ? null : (value.mileageReadings as Array<any>).map(BasicVehicleInformationMileageReadingDtoToJSON)),
        'adr': BasicVehicleInformationAdrAlterationDtoToJSON(value.adr),
        'fees': OutstandingFeesToJSON(value.fees),
        'euGroup': value.euGroup,
    };
}


