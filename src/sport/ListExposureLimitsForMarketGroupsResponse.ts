/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import ExposureLimitsForMarketGroups, { IExposureLimitsForMarketGroupsOptions } from '../sport/ExposureLimitsForMarketGroups';

export interface IListExposureLimitsForMarketGroupsResponseOptions {
    exposureLimitsForMarketGroupses?: (ExposureLimitsForMarketGroups | IExposureLimitsForMarketGroupsOptions)[];
}

export default class ListExposureLimitsForMarketGroupsResponse extends JsonResponse {
    private exposureLimitsForMarketGroupses?: ExposureLimitsForMarketGroups[];

    constructor(options: (ExposureLimitsForMarketGroups | IExposureLimitsForMarketGroupsOptions)[]) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.exposureLimitsForMarketGroupses = this.arrayFromJson(options, ExposureLimitsForMarketGroups);
            }
        }
    }

    public toJson(): IListExposureLimitsForMarketGroupsResponseOptions {
        throw new Error('not implemented');
    }

    public getExposureLimitsForMarketGroupses(): ExposureLimitsForMarketGroups[] | undefined {
        return this.exposureLimitsForMarketGroupses;
    }
    public setExposureLimitsForMarketGroupses(exposureLimitsForMarketGroupses: ExposureLimitsForMarketGroups[]): void {
        this.exposureLimitsForMarketGroupses = exposureLimitsForMarketGroupses;
    }

}
