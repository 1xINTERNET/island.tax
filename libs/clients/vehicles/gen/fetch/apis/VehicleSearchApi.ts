/* tslint:disable */
/* eslint-disable */
/**
 * SamgÃ¶ngustofa
 * Leitar eftir Ã¶kutÃ¦kjum Ãºt frÃ¡ fastanÃºmeri, skrï¿½ningarnÃºmeri eÃ°a verksmiÃ°junÃºmeri - Release-46 : 20241106.1
 *
 * The version of the OpenAPI document: v1
 * Contact: samgongustofa@samgongustofa.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    AdditionalVehicleInformationDto,
    AdditionalVehicleInformationDtoFromJSON,
    AdditionalVehicleInformationDtoToJSON,
    AllVehiclesForPersidnoV2,
    AllVehiclesForPersidnoV2FromJSON,
    AllVehiclesForPersidnoV2ToJSON,
    BasicVehicleInformationDto,
    BasicVehicleInformationDtoFromJSON,
    BasicVehicleInformationDtoToJSON,
    CurrentVehicleDto,
    CurrentVehicleDtoFromJSON,
    CurrentVehicleDtoToJSON,
    CurrentVehiclesWithMilageAndNextInspDtoListPagedResponse,
    CurrentVehiclesWithMilageAndNextInspDtoListPagedResponseFromJSON,
    CurrentVehiclesWithMilageAndNextInspDtoListPagedResponseToJSON,
    OwnershipReportDataDto,
    OwnershipReportDataDtoFromJSON,
    OwnershipReportDataDtoToJSON,
    PersidnoLookupResultDto,
    PersidnoLookupResultDtoFromJSON,
    PersidnoLookupResultDtoToJSON,
    ProblemDetails,
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
    VehicleDtoListPagedResponse,
    VehicleDtoListPagedResponseFromJSON,
    VehicleDtoListPagedResponseToJSON,
    VehicleMiniDto,
    VehicleMiniDtoFromJSON,
    VehicleMiniDtoToJSON,
    VehicleSearchResultDto,
    VehicleSearchResultDtoFromJSON,
    VehicleSearchResultDtoToJSON,
} from '../models';

export interface AdditionalVehicleInformationGetRequest {
    clientPersidno?: string;
    permno?: string;
    regno?: string;
    vin?: string;
}

export interface BasicVehicleInformationGetRequest {
    clientPersidno?: string;
    permno?: string;
    regno?: string;
    vin?: string;
    getFees?: boolean;
}

export interface CurrentVehiclesGetRequest {
    persidNo?: string;
    showOwned?: boolean;
    showCoowned?: boolean;
    showOperated?: boolean;
}

export interface CurrentVehiclesV2GetRequest {
    showOwned?: boolean;
    showCoowned?: boolean;
    showOperated?: boolean;
}

export interface CurrentvehicleswithmileageandinspGetRequest {
    permno?: string;
    showOwned?: boolean;
    showCoowned?: boolean;
    showOperated?: boolean;
    page?: number;
    pageSize?: number;
    onlyMileageRequiredVehicles?: boolean;
}

export interface OwnershipReportDataGetRequest {
    ssn?: string;
}

export interface VehicleHistoryGetRequest {
    requestedPersidno?: string;
    showDeregistered?: boolean;
    showHistory?: boolean;
    dtFrom?: Date;
    cursor?: string;
    limit?: number;
}

export interface VehicleHistoryRequestedPersidnoGetRequest {
    requestedPersidno: string;
    showDeregistered?: boolean;
    showHistory?: boolean;
    dtFrom?: Date;
    dtTo?: Date;
    permno?: string;
    type?: string;
    page?: number;
    pageSize?: number;
}

export interface VehicleHistoryV2GetRequest {
    requestedPersidno?: string;
    showDeregistered?: boolean;
    showHistory?: boolean;
    dtFrom?: Date;
    cursor?: string;
    limit?: number;
}

export interface VehicleSearchGetRequest {
    search?: string;
    cursor?: string;
    limit?: number;
}

/**
 * 
 */
export class VehicleSearchApi extends runtime.BaseAPI {

    /**
     */
    async additionalVehicleInformationGetRaw(requestParameters: AdditionalVehicleInformationGetRequest): Promise<runtime.ApiResponse<AdditionalVehicleInformationDto>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.clientPersidno !== undefined) {
            queryParameters['clientPersidno'] = requestParameters.clientPersidno;
        }

        if (requestParameters.permno !== undefined) {
            queryParameters['permno'] = requestParameters.permno;
        }

        if (requestParameters.regno !== undefined) {
            queryParameters['regno'] = requestParameters.regno;
        }

        if (requestParameters.vin !== undefined) {
            queryParameters['vin'] = requestParameters.vin;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("OAuth2", ["OAuth2"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/AdditionalVehicleInformation`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AdditionalVehicleInformationDtoFromJSON(jsonValue));
    }

    /**
     */
    async additionalVehicleInformationGet(requestParameters: AdditionalVehicleInformationGetRequest): Promise<AdditionalVehicleInformationDto> {
        const response = await this.additionalVehicleInformationGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async basicVehicleInformationGetRaw(requestParameters: BasicVehicleInformationGetRequest): Promise<runtime.ApiResponse<BasicVehicleInformationDto>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.clientPersidno !== undefined) {
            queryParameters['clientPersidno'] = requestParameters.clientPersidno;
        }

        if (requestParameters.permno !== undefined) {
            queryParameters['permno'] = requestParameters.permno;
        }

        if (requestParameters.regno !== undefined) {
            queryParameters['regno'] = requestParameters.regno;
        }

        if (requestParameters.vin !== undefined) {
            queryParameters['vin'] = requestParameters.vin;
        }

        if (requestParameters.getFees !== undefined) {
            queryParameters['getFees'] = requestParameters.getFees;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("OAuth2", ["OAuth2"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/BasicVehicleInformation`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BasicVehicleInformationDtoFromJSON(jsonValue));
    }

    /**
     */
    async basicVehicleInformationGet(requestParameters: BasicVehicleInformationGetRequest): Promise<BasicVehicleInformationDto> {
        const response = await this.basicVehicleInformationGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async currentVehiclesGetRaw(requestParameters: CurrentVehiclesGetRequest): Promise<runtime.ApiResponse<Array<VehicleMiniDto>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.persidNo !== undefined) {
            queryParameters['persidNo'] = requestParameters.persidNo;
        }

        if (requestParameters.showOwned !== undefined) {
            queryParameters['showOwned'] = requestParameters.showOwned;
        }

        if (requestParameters.showCoowned !== undefined) {
            queryParameters['showCoowned'] = requestParameters.showCoowned;
        }

        if (requestParameters.showOperated !== undefined) {
            queryParameters['showOperated'] = requestParameters.showOperated;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("OAuth2", ["OAuth2"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/CurrentVehicles`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(VehicleMiniDtoFromJSON));
    }

    /**
     */
    async currentVehiclesGet(requestParameters: CurrentVehiclesGetRequest): Promise<Array<VehicleMiniDto>> {
        const response = await this.currentVehiclesGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async currentVehiclesV2GetRaw(requestParameters: CurrentVehiclesV2GetRequest): Promise<runtime.ApiResponse<Array<CurrentVehicleDto>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.showOwned !== undefined) {
            queryParameters['showOwned'] = requestParameters.showOwned;
        }

        if (requestParameters.showCoowned !== undefined) {
            queryParameters['showCoowned'] = requestParameters.showCoowned;
        }

        if (requestParameters.showOperated !== undefined) {
            queryParameters['showOperated'] = requestParameters.showOperated;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("OAuth2", ["OAuth2"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/CurrentVehiclesV2`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CurrentVehicleDtoFromJSON));
    }

    /**
     */
    async currentVehiclesV2Get(requestParameters: CurrentVehiclesV2GetRequest): Promise<Array<CurrentVehicleDto>> {
        const response = await this.currentVehiclesV2GetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async currentvehicleswithmileageandinspGetRaw(requestParameters: CurrentvehicleswithmileageandinspGetRequest): Promise<runtime.ApiResponse<CurrentVehiclesWithMilageAndNextInspDtoListPagedResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.permno !== undefined) {
            queryParameters['permno'] = requestParameters.permno;
        }

        if (requestParameters.showOwned !== undefined) {
            queryParameters['showOwned'] = requestParameters.showOwned;
        }

        if (requestParameters.showCoowned !== undefined) {
            queryParameters['showCoowned'] = requestParameters.showCoowned;
        }

        if (requestParameters.showOperated !== undefined) {
            queryParameters['showOperated'] = requestParameters.showOperated;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.onlyMileageRequiredVehicles !== undefined) {
            queryParameters['onlyMileageRequiredVehicles'] = requestParameters.onlyMileageRequiredVehicles;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("OAuth2", ["OAuth2"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/currentvehicleswithmileageandinsp`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CurrentVehiclesWithMilageAndNextInspDtoListPagedResponseFromJSON(jsonValue));
    }

    /**
     */
    async currentvehicleswithmileageandinspGet(requestParameters: CurrentvehicleswithmileageandinspGetRequest): Promise<CurrentVehiclesWithMilageAndNextInspDtoListPagedResponse> {
        const response = await this.currentvehicleswithmileageandinspGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async ownershipReportDataGetRaw(requestParameters: OwnershipReportDataGetRequest): Promise<runtime.ApiResponse<OwnershipReportDataDto>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.ssn !== undefined) {
            queryParameters['ssn'] = requestParameters.ssn;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("OAuth2", ["OAuth2"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/OwnershipReportData`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => OwnershipReportDataDtoFromJSON(jsonValue));
    }

    /**
     */
    async ownershipReportDataGet(requestParameters: OwnershipReportDataGetRequest): Promise<OwnershipReportDataDto> {
        const response = await this.ownershipReportDataGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async searchesRemainingGetRaw(): Promise<runtime.ApiResponse<number>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("OAuth2", ["OAuth2"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/SearchesRemaining`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async searchesRemainingGet(): Promise<number> {
        const response = await this.searchesRemainingGetRaw();
        return await response.value();
    }

    /**
     */
    async vehicleHistoryGetRaw(requestParameters: VehicleHistoryGetRequest): Promise<runtime.ApiResponse<PersidnoLookupResultDto>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.requestedPersidno !== undefined) {
            queryParameters['requestedPersidno'] = requestParameters.requestedPersidno;
        }

        if (requestParameters.showDeregistered !== undefined) {
            queryParameters['showDeregistered'] = requestParameters.showDeregistered;
        }

        if (requestParameters.showHistory !== undefined) {
            queryParameters['showHistory'] = requestParameters.showHistory;
        }

        if (requestParameters.dtFrom !== undefined) {
            queryParameters['dtFrom'] = (requestParameters.dtFrom as any).toISOString();
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("OAuth2", ["OAuth2"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/VehicleHistory`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PersidnoLookupResultDtoFromJSON(jsonValue));
    }

    /**
     */
    async vehicleHistoryGet(requestParameters: VehicleHistoryGetRequest): Promise<PersidnoLookupResultDto> {
        const response = await this.vehicleHistoryGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async vehicleHistoryRequestedPersidnoGetRaw(requestParameters: VehicleHistoryRequestedPersidnoGetRequest): Promise<runtime.ApiResponse<VehicleDtoListPagedResponse>> {
        if (requestParameters.requestedPersidno === null || requestParameters.requestedPersidno === undefined) {
            throw new runtime.RequiredError('requestedPersidno','Required parameter requestParameters.requestedPersidno was null or undefined when calling vehicleHistoryRequestedPersidnoGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.showDeregistered !== undefined) {
            queryParameters['showDeregistered'] = requestParameters.showDeregistered;
        }

        if (requestParameters.showHistory !== undefined) {
            queryParameters['showHistory'] = requestParameters.showHistory;
        }

        if (requestParameters.dtFrom !== undefined) {
            queryParameters['dtFrom'] = (requestParameters.dtFrom as any).toISOString();
        }

        if (requestParameters.dtTo !== undefined) {
            queryParameters['dtTo'] = (requestParameters.dtTo as any).toISOString();
        }

        if (requestParameters.permno !== undefined) {
            queryParameters['permno'] = requestParameters.permno;
        }

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("OAuth2", ["OAuth2"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/VehicleHistory/{requestedPersidno}`.replace(`{${"requestedPersidno"}}`, encodeURIComponent(String(requestParameters.requestedPersidno))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => VehicleDtoListPagedResponseFromJSON(jsonValue));
    }

    /**
     */
    async vehicleHistoryRequestedPersidnoGet(requestParameters: VehicleHistoryRequestedPersidnoGetRequest): Promise<VehicleDtoListPagedResponse> {
        const response = await this.vehicleHistoryRequestedPersidnoGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async vehicleHistoryV2GetRaw(requestParameters: VehicleHistoryV2GetRequest): Promise<runtime.ApiResponse<Array<AllVehiclesForPersidnoV2>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.requestedPersidno !== undefined) {
            queryParameters['requestedPersidno'] = requestParameters.requestedPersidno;
        }

        if (requestParameters.showDeregistered !== undefined) {
            queryParameters['showDeregistered'] = requestParameters.showDeregistered;
        }

        if (requestParameters.showHistory !== undefined) {
            queryParameters['showHistory'] = requestParameters.showHistory;
        }

        if (requestParameters.dtFrom !== undefined) {
            queryParameters['dtFrom'] = (requestParameters.dtFrom as any).toISOString();
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("OAuth2", ["OAuth2"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/VehicleHistoryV2`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AllVehiclesForPersidnoV2FromJSON));
    }

    /**
     */
    async vehicleHistoryV2Get(requestParameters: VehicleHistoryV2GetRequest): Promise<Array<AllVehiclesForPersidnoV2>> {
        const response = await this.vehicleHistoryV2GetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async vehicleSearchGetRaw(requestParameters: VehicleSearchGetRequest): Promise<runtime.ApiResponse<VehicleSearchResultDto>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.search !== undefined) {
            queryParameters['search'] = requestParameters.search;
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("OAuth2", ["OAuth2"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/VehicleSearch`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => VehicleSearchResultDtoFromJSON(jsonValue));
    }

    /**
     */
    async vehicleSearchGet(requestParameters: VehicleSearchGetRequest): Promise<VehicleSearchResultDto> {
        const response = await this.vehicleSearchGetRaw(requestParameters);
        return await response.value();
    }

}
