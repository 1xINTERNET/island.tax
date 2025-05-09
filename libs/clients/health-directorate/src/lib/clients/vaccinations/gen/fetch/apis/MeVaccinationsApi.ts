/* tslint:disable */
/* eslint-disable */
/**
 * Vaccination API
 * The api provides access to information about individuals\' vaccination status and their administered vaccinations.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    DiseaseVaccinationDto,
    DiseaseVaccinationDtoFromJSON,
    DiseaseVaccinationDtoToJSON,
    HttpProblemResponse,
    HttpProblemResponseFromJSON,
    HttpProblemResponseToJSON,
    VaccinationDto,
    VaccinationDtoFromJSON,
    VaccinationDtoToJSON,
} from '../models';

export interface MeVaccinationControllerGetVaccinationForDiseaseRequest {
    diseaseId: string;
    locale?: MeVaccinationControllerGetVaccinationForDiseaseLocaleEnum;
}

export interface MeVaccinationControllerGetVaccinationsForDiseasesRequest {
    locale?: MeVaccinationControllerGetVaccinationsForDiseasesLocaleEnum;
}

/**
 * 
 */
export class MeVaccinationsApi extends runtime.BaseAPI {

    /**
     * Get overview of vaccinations for a user for a specific disease
     */
    async meVaccinationControllerGetVaccinationForDiseaseRaw(requestParameters: MeVaccinationControllerGetVaccinationForDiseaseRequest): Promise<runtime.ApiResponse<DiseaseVaccinationDto>> {
        if (requestParameters.diseaseId === null || requestParameters.diseaseId === undefined) {
            throw new runtime.RequiredError('diseaseId','Required parameter requestParameters.diseaseId was null or undefined when calling meVaccinationControllerGetVaccinationForDisease.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.locale !== undefined) {
            queryParameters['locale'] = requestParameters.locale;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/me/vaccinations/diseases/{diseaseId}`.replace(`{${"diseaseId"}}`, encodeURIComponent(String(requestParameters.diseaseId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DiseaseVaccinationDtoFromJSON(jsonValue));
    }

    /**
     * Get overview of vaccinations for a user for a specific disease
     */
    async meVaccinationControllerGetVaccinationForDisease(requestParameters: MeVaccinationControllerGetVaccinationForDiseaseRequest): Promise<DiseaseVaccinationDto> {
        const response = await this.meVaccinationControllerGetVaccinationForDiseaseRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get all vaccinations for a user
     */
    async meVaccinationControllerGetVaccinationsRaw(): Promise<runtime.ApiResponse<Array<VaccinationDto>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/me/vaccinations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(VaccinationDtoFromJSON));
    }

    /**
     * Get all vaccinations for a user
     */
    async meVaccinationControllerGetVaccinations(): Promise<Array<VaccinationDto>> {
        const response = await this.meVaccinationControllerGetVaccinationsRaw();
        return await response.value();
    }

    /**
     * Get overview of vaccinations for a user
     */
    async meVaccinationControllerGetVaccinationsForDiseasesRaw(requestParameters: MeVaccinationControllerGetVaccinationsForDiseasesRequest): Promise<runtime.ApiResponse<Array<DiseaseVaccinationDto>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.locale !== undefined) {
            queryParameters['locale'] = requestParameters.locale;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/me/vaccinations/diseases`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(DiseaseVaccinationDtoFromJSON));
    }

    /**
     * Get overview of vaccinations for a user
     */
    async meVaccinationControllerGetVaccinationsForDiseases(requestParameters: MeVaccinationControllerGetVaccinationsForDiseasesRequest): Promise<Array<DiseaseVaccinationDto>> {
        const response = await this.meVaccinationControllerGetVaccinationsForDiseasesRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum MeVaccinationControllerGetVaccinationForDiseaseLocaleEnum {
    En = 'en',
    Is = 'is'
}
/**
    * @export
    * @enum {string}
    */
export enum MeVaccinationControllerGetVaccinationsForDiseasesLocaleEnum {
    En = 'en',
    Is = 'is'
}
