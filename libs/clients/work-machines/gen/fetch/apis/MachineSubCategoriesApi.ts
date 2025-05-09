/* tslint:disable */
/* eslint-disable */
/**
 * Vinnuvélauppfletting
 * Vefþjónusta til þess að fletta upp á vinnuvélum.
 *
 * The version of the OpenAPI document: v1
 * Contact: ut@vinnueftirlit.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    MachineSubCategoryDto,
    MachineSubCategoryDtoFromJSON,
    MachineSubCategoryDtoToJSON,
} from '../models';

export interface ApiMachineSubCategoriesGetRequest {
    parentCategory?: string;
    xCorrelationID?: string;
}

/**
 * 
 */
export class MachineSubCategoriesApi extends runtime.BaseAPI {

    /**
     */
    async apiMachineSubCategoriesGetRaw(requestParameters: ApiMachineSubCategoriesGetRequest): Promise<runtime.ApiResponse<Array<MachineSubCategoryDto>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.parentCategory !== undefined) {
            queryParameters['parentCategory'] = requestParameters.parentCategory;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xCorrelationID !== undefined && requestParameters.xCorrelationID !== null) {
            headerParameters['X-Correlation-ID'] = String(requestParameters.xCorrelationID);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/MachineSubCategories`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(MachineSubCategoryDtoFromJSON));
    }

    /**
     */
    async apiMachineSubCategoriesGet(requestParameters: ApiMachineSubCategoriesGetRequest): Promise<Array<MachineSubCategoryDto>> {
        const response = await this.apiMachineSubCategoriesGetRaw(requestParameters);
        return await response.value();
    }

}
