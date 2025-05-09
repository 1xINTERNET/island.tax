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
import {
    UpdateCaseWithProsecutorData,
    UpdateCaseWithProsecutorDataFromJSON,
    UpdateCaseWithProsecutorDataToJSON,
} from '../models';

export interface UpdateCaseWithProsecutorRequest {
    updateCaseWithProsecutorData: UpdateCaseWithProsecutorData;
}

/**
 * 
 */
export class UpdateCaseWithProsecutorApi extends runtime.BaseAPI {

    /**
     * Updates R and S cases prosecutor.
     */
    async updateCaseWithProsecutorRaw(requestParameters: UpdateCaseWithProsecutorRequest): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.updateCaseWithProsecutorData === null || requestParameters.updateCaseWithProsecutorData === undefined) {
            throw new runtime.RequiredError('updateCaseWithProsecutorData','Required parameter requestParameters.updateCaseWithProsecutorData was null or undefined when calling updateCaseWithProsecutor.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/UpdateCaseWithProsecutor`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateCaseWithProsecutorDataToJSON(requestParameters.updateCaseWithProsecutorData),
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Updates R and S cases prosecutor.
     */
    async updateCaseWithProsecutor(requestParameters: UpdateCaseWithProsecutorRequest): Promise<string> {
        const response = await this.updateCaseWithProsecutorRaw(requestParameters);
        return await response.value();
    }

}
