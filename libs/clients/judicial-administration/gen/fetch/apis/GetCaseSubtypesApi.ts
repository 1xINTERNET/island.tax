/* tslint:disable */
/* eslint-disable */
/**
 * GoPro.JusticePortal.Rest
 * Provides access to Justice Portal rest service
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@gopro.net
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';

export interface GetCaseSubtypesRequest {
    authenticationToken: string;
    caseType: string;
}

/**
 * 
 */
export class GetCaseSubtypesApi extends runtime.BaseAPI {

    /**
     * Returns the subtypes for given case type.
     */
    async getCaseSubtypesRaw(requestParameters: GetCaseSubtypesRequest): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.authenticationToken === null || requestParameters.authenticationToken === undefined) {
            throw new runtime.RequiredError('authenticationToken','Required parameter requestParameters.authenticationToken was null or undefined when calling getCaseSubtypes.');
        }

        if (requestParameters.caseType === null || requestParameters.caseType === undefined) {
            throw new runtime.RequiredError('caseType','Required parameter requestParameters.caseType was null or undefined when calling getCaseSubtypes.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.authenticationToken !== undefined) {
            queryParameters['authenticationToken'] = requestParameters.authenticationToken;
        }

        if (requestParameters.caseType !== undefined) {
            queryParameters['caseType'] = requestParameters.caseType;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/GetCaseSubtypes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Returns the subtypes for given case type.
     */
    async getCaseSubtypes(requestParameters: GetCaseSubtypesRequest): Promise<string> {
        const response = await this.getCaseSubtypesRaw(requestParameters);
        return await response.value();
    }

}
