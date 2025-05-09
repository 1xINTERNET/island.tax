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
    MachineInspectionRequestCreateDto,
    MachineInspectionRequestCreateDtoFromJSON,
    MachineInspectionRequestCreateDtoToJSON,
    ProblemDetails,
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
    ValidationProblemDetails,
    ValidationProblemDetailsFromJSON,
    ValidationProblemDetailsToJSON,
} from '../models';

export interface ApiMachineRequestInspectionPostRequest {
    xCorrelationID?: string;
    machineInspectionRequestCreateDto?: MachineInspectionRequestCreateDto;
}

/**
 * 
 */
export class MachineRequestInspectionApi extends runtime.BaseAPI {

    /**
     * Request an inspection for a machine.
     */
    async apiMachineRequestInspectionPostRaw(requestParameters: ApiMachineRequestInspectionPostRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (requestParameters.xCorrelationID !== undefined && requestParameters.xCorrelationID !== null) {
            headerParameters['X-Correlation-ID'] = String(requestParameters.xCorrelationID);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/MachineRequestInspection`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MachineInspectionRequestCreateDtoToJSON(requestParameters.machineInspectionRequestCreateDto),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Request an inspection for a machine.
     */
    async apiMachineRequestInspectionPost(requestParameters: ApiMachineRequestInspectionPostRequest): Promise<void> {
        await this.apiMachineRequestInspectionPostRaw(requestParameters);
    }

}
