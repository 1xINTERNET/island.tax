/* tslint:disable */
/* eslint-disable */
/**
 * Forskráning Vegabréfa
 * The API retrieves information about identity documents
 *
 * The version of the OpenAPI document: v1
 * Contact: skra@skra.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    DocumentLossAnnouncement,
    DocumentLossAnnouncementFromJSON,
    DocumentLossAnnouncementToJSON,
    DocumentLossAnnouncementRequest,
    DocumentLossAnnouncementRequestFromJSON,
    DocumentLossAnnouncementRequestToJSON,
} from '../models';

export interface DocumentLossDocumentLossRequest {
    xRoadClient: string;
    documentLossAnnouncementRequest: DocumentLossAnnouncementRequest;
}

export interface DocumentLossGetDocumentLossRequest {
    xRoadClient: string;
}

/**
 * 
 */
export class DocumentLossApi extends runtime.BaseAPI {

    /**
     */
    async documentLossDocumentLossRaw(requestParameters: DocumentLossDocumentLossRequest): Promise<runtime.ApiResponse<Array<DocumentLossAnnouncement>>> {
        if (requestParameters.xRoadClient === null || requestParameters.xRoadClient === undefined) {
            throw new runtime.RequiredError('xRoadClient','Required parameter requestParameters.xRoadClient was null or undefined when calling documentLossDocumentLoss.');
        }

        if (requestParameters.documentLossAnnouncementRequest === null || requestParameters.documentLossAnnouncementRequest === undefined) {
            throw new runtime.RequiredError('documentLossAnnouncementRequest','Required parameter requestParameters.documentLossAnnouncementRequest was null or undefined when calling documentLossDocumentLoss.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xRoadClient !== undefined && requestParameters.xRoadClient !== null) {
            headerParameters['X-Road-Client'] = String(requestParameters.xRoadClient);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // auth authentication
        }

        const response = await this.request({
            path: `/api/v1/documentloss`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DocumentLossAnnouncementRequestToJSON(requestParameters.documentLossAnnouncementRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(DocumentLossAnnouncementFromJSON));
    }

    /**
     */
    async documentLossDocumentLoss(requestParameters: DocumentLossDocumentLossRequest): Promise<Array<DocumentLossAnnouncement>> {
        const response = await this.documentLossDocumentLossRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async documentLossGetDocumentLossRaw(requestParameters: DocumentLossGetDocumentLossRequest): Promise<runtime.ApiResponse<Array<DocumentLossAnnouncement>>> {
        if (requestParameters.xRoadClient === null || requestParameters.xRoadClient === undefined) {
            throw new runtime.RequiredError('xRoadClient','Required parameter requestParameters.xRoadClient was null or undefined when calling documentLossGetDocumentLoss.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xRoadClient !== undefined && requestParameters.xRoadClient !== null) {
            headerParameters['X-Road-Client'] = String(requestParameters.xRoadClient);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // auth authentication
        }

        const response = await this.request({
            path: `/api/v1/documentloss`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(DocumentLossAnnouncementFromJSON));
    }

    /**
     */
    async documentLossGetDocumentLoss(requestParameters: DocumentLossGetDocumentLossRequest): Promise<Array<DocumentLossAnnouncement>> {
        const response = await this.documentLossGetDocumentLossRaw(requestParameters);
        return await response.value();
    }

}
