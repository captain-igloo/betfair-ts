/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import ExposureLimitsForMarketGroups, { IExposureLimitsForMarketGroupsOptions } from '../sport/ExposureLimitsForMarketGroups';
export interface IListExposureLimitsForMarketGroupsResponseOptions {
    exposureLimitsForMarketGroupses?: Array<ExposureLimitsForMarketGroups | IExposureLimitsForMarketGroupsOptions>;
}
export default class ListExposureLimitsForMarketGroupsResponse extends JsonResponse {
    private exposureLimitsForMarketGroupses?;
    constructor(options: Array<ExposureLimitsForMarketGroups | IExposureLimitsForMarketGroupsOptions>);
    toJson(): IListExposureLimitsForMarketGroupsResponseOptions;
    getExposureLimitsForMarketGroupses(): ExposureLimitsForMarketGroups[] | undefined;
    setExposureLimitsForMarketGroupses(exposureLimitsForMarketGroupses: ExposureLimitsForMarketGroups[]): void;
}
