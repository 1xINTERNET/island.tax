/* tslint:disable */
/* eslint-disable */
/**
 * MedmaeliRestAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
    EinstaklingurKosningInfoDTO,
    EinstaklingurKosningInfoDTOFromJSON,
    EinstaklingurKosningInfoDTOToJSON,
    ListabokstafurBaseDTO,
    ListabokstafurBaseDTOFromJSON,
    ListabokstafurBaseDTOToJSON,
    MedmaelalistiDTO,
    MedmaelalistiDTOFromJSON,
    MedmaelalistiDTOToJSON,
    MedmaelasofnunExtendedDTO,
    MedmaelasofnunExtendedDTOFromJSON,
    MedmaelasofnunExtendedDTOToJSON,
    SvaediDTO,
    SvaediDTOFromJSON,
    SvaediDTOToJSON,
} from '../models';

export interface MedmaelasofnunGetRequest {
    kosningID?: number;
    svaediID?: number;
    includeInactive?: boolean;
}

export interface MedmaelasofnunIDEinsInfoKennitalaGetRequest {
    iD: number;
    kennitala: string;
}

export interface MedmaelasofnunIDGetRequest {
    iD: number;
}

export interface MedmaelasofnunIDListabokstafirGetRequest {
    iD: number;
}

export interface MedmaelasofnunIDMedmaelalistarGetRequest {
    iD: number;
}

export interface MedmaelasofnunIDSvaediGetRequest {
    iD: number;
}

/**
 * 
 */
export class MedmaelasofnunApi extends runtime.BaseAPI {

    /**
     */
    async medmaelasofnunGetRaw(requestParameters: MedmaelasofnunGetRequest): Promise<runtime.ApiResponse<Array<MedmaelasofnunExtendedDTO>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.kosningID !== undefined) {
            queryParameters['kosningID'] = requestParameters.kosningID;
        }

        if (requestParameters.svaediID !== undefined) {
            queryParameters['svaediID'] = requestParameters.svaediID;
        }

        if (requestParameters.includeInactive !== undefined) {
            queryParameters['includeInactive'] = requestParameters.includeInactive;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("IslandIs", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/Medmaelasofnun`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(MedmaelasofnunExtendedDTOFromJSON));
    }

    /**
     */
    async medmaelasofnunGet(requestParameters: MedmaelasofnunGetRequest): Promise<Array<MedmaelasofnunExtendedDTO>> {
        const response = await this.medmaelasofnunGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async medmaelasofnunIDEinsInfoKennitalaGetRaw(requestParameters: MedmaelasofnunIDEinsInfoKennitalaGetRequest): Promise<runtime.ApiResponse<EinstaklingurKosningInfoDTO>> {
        if (requestParameters.iD === null || requestParameters.iD === undefined) {
            throw new runtime.RequiredError('iD','Required parameter requestParameters.iD was null or undefined when calling medmaelasofnunIDEinsInfoKennitalaGet.');
        }

        if (requestParameters.kennitala === null || requestParameters.kennitala === undefined) {
            throw new runtime.RequiredError('kennitala','Required parameter requestParameters.kennitala was null or undefined when calling medmaelasofnunIDEinsInfoKennitalaGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("IslandIs", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/Medmaelasofnun/{ID}/EinsInfo/{Kennitala}`.replace(`{${"ID"}}`, encodeURIComponent(String(requestParameters.iD))).replace(`{${"Kennitala"}}`, encodeURIComponent(String(requestParameters.kennitala))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EinstaklingurKosningInfoDTOFromJSON(jsonValue));
    }

    /**
     */
    async medmaelasofnunIDEinsInfoKennitalaGet(requestParameters: MedmaelasofnunIDEinsInfoKennitalaGetRequest): Promise<EinstaklingurKosningInfoDTO> {
        const response = await this.medmaelasofnunIDEinsInfoKennitalaGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async medmaelasofnunIDGetRaw(requestParameters: MedmaelasofnunIDGetRequest): Promise<runtime.ApiResponse<MedmaelasofnunExtendedDTO>> {
        if (requestParameters.iD === null || requestParameters.iD === undefined) {
            throw new runtime.RequiredError('iD','Required parameter requestParameters.iD was null or undefined when calling medmaelasofnunIDGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("IslandIs", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/Medmaelasofnun/{ID}`.replace(`{${"ID"}}`, encodeURIComponent(String(requestParameters.iD))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MedmaelasofnunExtendedDTOFromJSON(jsonValue));
    }

    /**
     */
    async medmaelasofnunIDGet(requestParameters: MedmaelasofnunIDGetRequest): Promise<MedmaelasofnunExtendedDTO> {
        const response = await this.medmaelasofnunIDGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async medmaelasofnunIDListabokstafirGetRaw(requestParameters: MedmaelasofnunIDListabokstafirGetRequest): Promise<runtime.ApiResponse<Array<ListabokstafurBaseDTO>>> {
        if (requestParameters.iD === null || requestParameters.iD === undefined) {
            throw new runtime.RequiredError('iD','Required parameter requestParameters.iD was null or undefined when calling medmaelasofnunIDListabokstafirGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("IslandIs", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/Medmaelasofnun/{ID}/Listabokstafir`.replace(`{${"ID"}}`, encodeURIComponent(String(requestParameters.iD))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ListabokstafurBaseDTOFromJSON));
    }

    /**
     */
    async medmaelasofnunIDListabokstafirGet(requestParameters: MedmaelasofnunIDListabokstafirGetRequest): Promise<Array<ListabokstafurBaseDTO>> {
        const response = await this.medmaelasofnunIDListabokstafirGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async medmaelasofnunIDMedmaelalistarGetRaw(requestParameters: MedmaelasofnunIDMedmaelalistarGetRequest): Promise<runtime.ApiResponse<Array<MedmaelalistiDTO>>> {
        if (requestParameters.iD === null || requestParameters.iD === undefined) {
            throw new runtime.RequiredError('iD','Required parameter requestParameters.iD was null or undefined when calling medmaelasofnunIDMedmaelalistarGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("IslandIs", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/Medmaelasofnun/{ID}/Medmaelalistar`.replace(`{${"ID"}}`, encodeURIComponent(String(requestParameters.iD))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(MedmaelalistiDTOFromJSON));
    }

    /**
     */
    async medmaelasofnunIDMedmaelalistarGet(requestParameters: MedmaelasofnunIDMedmaelalistarGetRequest): Promise<Array<MedmaelalistiDTO>> {
        const response = await this.medmaelasofnunIDMedmaelalistarGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async medmaelasofnunIDSvaediGetRaw(requestParameters: MedmaelasofnunIDSvaediGetRequest): Promise<runtime.ApiResponse<Array<SvaediDTO>>> {
        if (requestParameters.iD === null || requestParameters.iD === undefined) {
            throw new runtime.RequiredError('iD','Required parameter requestParameters.iD was null or undefined when calling medmaelasofnunIDSvaediGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("IslandIs", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/Medmaelasofnun/{ID}/Svaedi`.replace(`{${"ID"}}`, encodeURIComponent(String(requestParameters.iD))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SvaediDTOFromJSON));
    }

    /**
     */
    async medmaelasofnunIDSvaediGet(requestParameters: MedmaelasofnunIDSvaediGetRequest): Promise<Array<SvaediDTO>> {
        const response = await this.medmaelasofnunIDSvaediGetRaw(requestParameters);
        return await response.value();
    }

}
