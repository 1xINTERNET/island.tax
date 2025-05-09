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
    ProblemDetails,
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
    Verdbrefamidlari,
    VerdbrefamidlariFromJSON,
    VerdbrefamidlariToJSON,
} from '../models';

export interface VerdbrefamidlararGetRequest {
    audkenni: string;
}

/**
 * 
 */
export class VerdbrefamidlararApi extends runtime.BaseAPI {

    /**
     */
    async verdbrefamidlararGetRaw(requestParameters: VerdbrefamidlararGetRequest): Promise<runtime.ApiResponse<Array<Verdbrefamidlari>>> {
        if (requestParameters.audkenni === null || requestParameters.audkenni === undefined) {
            throw new runtime.RequiredError('audkenni','Required parameter requestParameters.audkenni was null or undefined when calling verdbrefamidlararGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT Token authentication
        }

        const response = await this.request({
            path: `/api/Verdbrefamidlarar/{audkenni}`.replace(`{${"audkenni"}}`, encodeURIComponent(String(requestParameters.audkenni))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(VerdbrefamidlariFromJSON));
    }

    /**
     */
    async verdbrefamidlararGet(requestParameters: VerdbrefamidlararGetRequest): Promise<Array<Verdbrefamidlari>> {
        const response = await this.verdbrefamidlararGetRaw(requestParameters);
        return await response.value();
    }

}
