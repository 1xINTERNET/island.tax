/* tslint:disable */
/* eslint-disable */
/**
 * Relationships - API 1.0.0
 * API offers information about relationships between legal entities and individuals.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: xroad@skattur.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    Individual,
    IndividualFromJSON,
    IndividualToJSON,
    IndividualSearchResults,
    IndividualSearchResultsFromJSON,
    IndividualSearchResultsToJSON,
    LegalEntitySearchResults,
    LegalEntitySearchResultsFromJSON,
    LegalEntitySearchResultsToJSON,
    Legalentity,
    LegalentityFromJSON,
    LegalentityToJSON,
    Model400,
    Model400FromJSON,
    Model400ToJSON,
    Model401,
    Model401FromJSON,
    Model401ToJSON,
    Model404,
    Model404FromJSON,
    Model404ToJSON,
    Model4XX,
    Model4XXFromJSON,
    Model4XXToJSON,
    Model5XX,
    Model5XXFromJSON,
    Model5XXToJSON,
    ModelError,
    ModelErrorFromJSON,
    ModelErrorToJSON,
    ServiceInfo,
    ServiceInfoFromJSON,
    ServiceInfoToJSON,
} from '../models';

export interface IndividualLookupRequest {
    xParamNationalId: string;
    authorization: string;
    xRoadClient: string;
}

export interface IndividualSearchRequest {
    authorization: string;
    xRoadClient: string;
    xQuerySearch?: string;
    xQueryLimit?: number;
    xQueryOffset?: number;
}

export interface LegalEntityLookupRequest {
    xParamNationalId: string;
    authorization: string;
    xRoadClient: string;
}

export interface LegalEntitySearchRequest {
    authorization: string;
    xRoadClient: string;
    xQuerySearch?: string;
    xQueryLimit?: number;
    xQueryOffset?: number;
}

export interface MeLookupRequest {
    authorization: string;
    xRoadClient: string;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Information about a single Indivduals relationships
     * Individual Lookup
     */
    async individualLookupRaw(requestParameters: IndividualLookupRequest): Promise<runtime.ApiResponse<Individual>> {
        if (requestParameters.xParamNationalId === null || requestParameters.xParamNationalId === undefined) {
            throw new runtime.RequiredError('xParamNationalId','Required parameter requestParameters.xParamNationalId was null or undefined when calling individualLookup.');
        }

        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling individualLookup.');
        }

        if (requestParameters.xRoadClient === null || requestParameters.xRoadClient === undefined) {
            throw new runtime.RequiredError('xRoadClient','Required parameter requestParameters.xRoadClient was null or undefined when calling individualLookup.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xParamNationalId !== undefined && requestParameters.xParamNationalId !== null) {
            headerParameters['X-Param-National-Id'] = String(requestParameters.xParamNationalId);
        }

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        if (requestParameters.xRoadClient !== undefined && requestParameters.xRoadClient !== null) {
            headerParameters['X-Road-Client'] = String(requestParameters.xRoadClient);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("island.is-auth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/individuals/.national-id`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IndividualFromJSON(jsonValue));
    }

    /**
     * Information about a single Indivduals relationships
     * Individual Lookup
     */
    async individualLookup(requestParameters: IndividualLookupRequest): Promise<Individual> {
        const response = await this.individualLookupRaw(requestParameters);
        return await response.value();
    }

    /**
     * Search for relationships between an Individuals and Legal Entities
     * Search Individuals
     */
    async individualSearchRaw(requestParameters: IndividualSearchRequest): Promise<runtime.ApiResponse<IndividualSearchResults>> {
        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling individualSearch.');
        }

        if (requestParameters.xRoadClient === null || requestParameters.xRoadClient === undefined) {
            throw new runtime.RequiredError('xRoadClient','Required parameter requestParameters.xRoadClient was null or undefined when calling individualSearch.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xQuerySearch !== undefined && requestParameters.xQuerySearch !== null) {
            headerParameters['X-Query-Search'] = String(requestParameters.xQuerySearch);
        }

        if (requestParameters.xQueryLimit !== undefined && requestParameters.xQueryLimit !== null) {
            headerParameters['X-Query-Limit'] = String(requestParameters.xQueryLimit);
        }

        if (requestParameters.xQueryOffset !== undefined && requestParameters.xQueryOffset !== null) {
            headerParameters['X-Query-Offset'] = String(requestParameters.xQueryOffset);
        }

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        if (requestParameters.xRoadClient !== undefined && requestParameters.xRoadClient !== null) {
            headerParameters['X-Road-Client'] = String(requestParameters.xRoadClient);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("island.is-auth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/individuals`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IndividualSearchResultsFromJSON(jsonValue));
    }

    /**
     * Search for relationships between an Individuals and Legal Entities
     * Search Individuals
     */
    async individualSearch(requestParameters: IndividualSearchRequest): Promise<IndividualSearchResults> {
        const response = await this.individualSearchRaw(requestParameters);
        return await response.value();
    }

    /**
     * Information about a single Leagal Entity relationships
     * Legal Entities Lookup
     */
    async legalEntityLookupRaw(requestParameters: LegalEntityLookupRequest): Promise<runtime.ApiResponse<Legalentity>> {
        if (requestParameters.xParamNationalId === null || requestParameters.xParamNationalId === undefined) {
            throw new runtime.RequiredError('xParamNationalId','Required parameter requestParameters.xParamNationalId was null or undefined when calling legalEntityLookup.');
        }

        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling legalEntityLookup.');
        }

        if (requestParameters.xRoadClient === null || requestParameters.xRoadClient === undefined) {
            throw new runtime.RequiredError('xRoadClient','Required parameter requestParameters.xRoadClient was null or undefined when calling legalEntityLookup.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xParamNationalId !== undefined && requestParameters.xParamNationalId !== null) {
            headerParameters['X-Param-National-Id'] = String(requestParameters.xParamNationalId);
        }

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        if (requestParameters.xRoadClient !== undefined && requestParameters.xRoadClient !== null) {
            headerParameters['X-Road-Client'] = String(requestParameters.xRoadClient);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("island.is-auth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/legalentities/.national-id`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => LegalentityFromJSON(jsonValue));
    }

    /**
     * Information about a single Leagal Entity relationships
     * Legal Entities Lookup
     */
    async legalEntityLookup(requestParameters: LegalEntityLookupRequest): Promise<Legalentity> {
        const response = await this.legalEntityLookupRaw(requestParameters);
        return await response.value();
    }

    /**
     * Search for relationships between an Legal Entities and Individuals
     * Search Legal Entities
     */
    async legalEntitySearchRaw(requestParameters: LegalEntitySearchRequest): Promise<runtime.ApiResponse<LegalEntitySearchResults>> {
        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling legalEntitySearch.');
        }

        if (requestParameters.xRoadClient === null || requestParameters.xRoadClient === undefined) {
            throw new runtime.RequiredError('xRoadClient','Required parameter requestParameters.xRoadClient was null or undefined when calling legalEntitySearch.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xQuerySearch !== undefined && requestParameters.xQuerySearch !== null) {
            headerParameters['X-Query-Search'] = String(requestParameters.xQuerySearch);
        }

        if (requestParameters.xQueryLimit !== undefined && requestParameters.xQueryLimit !== null) {
            headerParameters['X-Query-Limit'] = String(requestParameters.xQueryLimit);
        }

        if (requestParameters.xQueryOffset !== undefined && requestParameters.xQueryOffset !== null) {
            headerParameters['X-Query-Offset'] = String(requestParameters.xQueryOffset);
        }

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        if (requestParameters.xRoadClient !== undefined && requestParameters.xRoadClient !== null) {
            headerParameters['X-Road-Client'] = String(requestParameters.xRoadClient);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("island.is-auth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/legalentities`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => LegalEntitySearchResultsFromJSON(jsonValue));
    }

    /**
     * Search for relationships between an Legal Entities and Individuals
     * Search Legal Entities
     */
    async legalEntitySearch(requestParameters: LegalEntitySearchRequest): Promise<LegalEntitySearchResults> {
        const response = await this.legalEntitySearchRaw(requestParameters);
        return await response.value();
    }

    /**
     * Information about your own relationships with legal entities.
     * Get your relationships
     */
    async meLookupRaw(requestParameters: MeLookupRequest): Promise<runtime.ApiResponse<Individual>> {
        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling meLookup.');
        }

        if (requestParameters.xRoadClient === null || requestParameters.xRoadClient === undefined) {
            throw new runtime.RequiredError('xRoadClient','Required parameter requestParameters.xRoadClient was null or undefined when calling meLookup.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        if (requestParameters.xRoadClient !== undefined && requestParameters.xRoadClient !== null) {
            headerParameters['X-Road-Client'] = String(requestParameters.xRoadClient);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("island.is-auth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/me`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IndividualFromJSON(jsonValue));
    }

    /**
     * Information about your own relationships with legal entities.
     * Get your relationships
     */
    async meLookup(requestParameters: MeLookupRequest): Promise<Individual> {
        const response = await this.meLookupRaw(requestParameters);
        return await response.value();
    }

    /**
     * Basic information about this API
     * Service Information
     */
    async serviceInfoRaw(): Promise<runtime.ApiResponse<ServiceInfo>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ServiceInfoFromJSON(jsonValue));
    }

    /**
     * Basic information about this API
     * Service Information
     */
    async serviceInfo(): Promise<ServiceInfo> {
        const response = await this.serviceInfoRaw();
        return await response.value();
    }

}
