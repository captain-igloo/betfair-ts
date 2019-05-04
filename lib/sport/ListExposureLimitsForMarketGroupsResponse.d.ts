/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import ExposureLimitsForMarketGroups from '../sport/ExposureLimitsForMarketGroups';
export default class ListExposureLimitsForMarketGroupsResponse extends JsonResponse {
    private exposureLimitsForMarketGroupses;
    constructor(exposureLimitsForMarketGroupses?: ExposureLimitsForMarketGroups[]);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getExposureLimitsForMarketGroupses(): ExposureLimitsForMarketGroups[];
    setExposureLimitsForMarketGroupses(exposureLimitsForMarketGroupses: ExposureLimitsForMarketGroups[]): void;
}
