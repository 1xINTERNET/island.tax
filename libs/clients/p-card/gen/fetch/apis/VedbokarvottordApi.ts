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


import * as runtime from '../runtime';
import {
    VedbandayfirlitSkeyti,
    VedbandayfirlitSkeytiFromJSON,
    VedbandayfirlitSkeytiToJSON,
    VedbandayfirlitSvarSkeyti,
    VedbandayfirlitSvarSkeytiFromJSON,
    VedbandayfirlitSvarSkeytiToJSON,
} from '../models';

export interface VedbokarvottordPostRequest {
    skilabod: VedbandayfirlitSkeyti;
}

/**
 * 
 */
export class VedbokarvottordApi extends runtime.BaseAPI {

    /**
     */
    async vedbokarvottordPostRaw(requestParameters: VedbokarvottordPostRequest): Promise<runtime.ApiResponse<VedbandayfirlitSvarSkeyti>> {
        if (requestParameters.skilabod === null || requestParameters.skilabod === undefined) {
            throw new runtime.RequiredError('skilabod','Required parameter requestParameters.skilabod was null or undefined when calling vedbokarvottordPost.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT Token authentication
        }

        const response = await this.request({
            path: `/api/Vedbokarvottord`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: VedbandayfirlitSkeytiToJSON(requestParameters.skilabod),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => VedbandayfirlitSvarSkeytiFromJSON(jsonValue));
    }

    /**
     */
    async vedbokarvottordPost(requestParameters: VedbokarvottordPostRequest): Promise<VedbandayfirlitSvarSkeyti> {
        const response = await this.vedbokarvottordPostRaw(requestParameters);
        return await response.value();
    }

}
