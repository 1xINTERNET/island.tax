/* tslint:disable */
/* eslint-disable */
/**
 * Gagnaveita Fiskistofu
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * Contact: olafur.palmi.gudnason@fiskistofa.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    KvotastadaSkipaDTO,
    KvotastadaSkipaDTOFromJSON,
    KvotastadaSkipaDTOToJSON,
    KvotastadaSkipsDTO,
    KvotastadaSkipsDTOFromJSON,
    KvotastadaSkipsDTOToJSON,
    ProblemDetails,
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
} from '../models';

export interface V1KvotastadaskipaSkipnumerGetRequest {
    skipnumer: number;
}

/**
 * 
 */
export class KvotastadaSkipaApi extends runtime.BaseAPI {

    /**
     * Sækir gögn um kvótastöðu allra skipa.
     */
    async v1KvotastadaskipaGetRaw(): Promise<runtime.ApiResponse<Array<KvotastadaSkipaDTO>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("Bearer", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/kvotastadaskipa`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(KvotastadaSkipaDTOFromJSON));
    }

    /**
     * Sækir gögn um kvótastöðu allra skipa.
     */
    async v1KvotastadaskipaGet(): Promise<Array<KvotastadaSkipaDTO>> {
        const response = await this.v1KvotastadaskipaGetRaw();
        return await response.value();
    }

    /**
     * Sækir gögn um kvótastöðu skips út frá skipanúmeri.
     */
    async v1KvotastadaskipaSkipnumerGetRaw(requestParameters: V1KvotastadaskipaSkipnumerGetRequest): Promise<runtime.ApiResponse<KvotastadaSkipsDTO>> {
        if (requestParameters.skipnumer === null || requestParameters.skipnumer === undefined) {
            throw new runtime.RequiredError('skipnumer','Required parameter requestParameters.skipnumer was null or undefined when calling v1KvotastadaskipaSkipnumerGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("Bearer", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/kvotastadaskipa/{skipnumer}`.replace(`{${"skipnumer"}}`, encodeURIComponent(String(requestParameters.skipnumer))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => KvotastadaSkipsDTOFromJSON(jsonValue));
    }

    /**
     * Sækir gögn um kvótastöðu skips út frá skipanúmeri.
     */
    async v1KvotastadaskipaSkipnumerGet(requestParameters: V1KvotastadaskipaSkipnumerGetRequest): Promise<KvotastadaSkipsDTO> {
        const response = await this.v1KvotastadaskipaSkipnumerGetRaw(requestParameters);
        return await response.value();
    }

}
