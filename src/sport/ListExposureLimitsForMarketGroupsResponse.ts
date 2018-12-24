/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import ExposureLimitsForMarketGroups from '../sport/ExposureLimitsForMarketGroups';

export default class ListExposureLimitsForMarketGroupsResponse extends JsonResponse {
    private exposureLimitsForMarketGroupses: ExposureLimitsForMarketGroups[];

    constructor(
        exposureLimitsForMarketGroupses: ExposureLimitsForMarketGroups[] = [],
    ) {
        super();
        this.exposureLimitsForMarketGroupses = exposureLimitsForMarketGroupses;
    }

    public fromJson(json: any): void {
        if (this.validateJson(json)) {
            this.exposureLimitsForMarketGroupses = json.map((exposureLimitsForMarketGroupsesJson: any) => {
                const element = new ExposureLimitsForMarketGroups();
                element.fromJson(exposureLimitsForMarketGroupsesJson);
                return element;
            });
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.exposureLimitsForMarketGroupses.length > 0) {
            json.exposureLimitsForMarketGroupses = this.exposureLimitsForMarketGroupses.map((value) => value.toJson());
        }
        return json;
    }

    public isValid(): boolean {
        return this.exposureLimitsForMarketGroupses.length > 0;
    }

    public getExposureLimitsForMarketGroupses(): ExposureLimitsForMarketGroups[] {
        return this.exposureLimitsForMarketGroupses;
    }
    public setExposureLimitsForMarketGroupses(exposureLimitsForMarketGroupses: ExposureLimitsForMarketGroups[]): void {
        this.exposureLimitsForMarketGroupses = exposureLimitsForMarketGroupses;
    }

}
