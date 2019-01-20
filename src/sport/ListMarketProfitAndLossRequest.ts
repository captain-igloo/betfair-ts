/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';


export default class ListMarketProfitAndLossRequest extends JsonRequest {
    private marketIds: Set<string>;
    private includeSettledBets: boolean | null;
    private includeBspBets: boolean | null;
    private netOfCommission: boolean | null;

    constructor(
        marketIds: Set<string> = new Set(),
        includeSettledBets: boolean | null = null,
        includeBspBets: boolean | null = null,
        netOfCommission: boolean | null = null,
    ) {
        super();
        this.marketIds = marketIds;
        this.includeSettledBets = includeSettledBets;
        this.includeBspBets = includeBspBets;
        this.netOfCommission = netOfCommission;
    }

    public fromJson(json: any): void {
        if ('marketIds' in json) {
            this.marketIds = json.marketIds;
        }
        if ('includeSettledBets' in json) {
            this.includeSettledBets = json.includeSettledBets;
        }
        if ('includeBspBets' in json) {
            this.includeBspBets = json.includeBspBets;
        }
        if ('netOfCommission' in json) {
            this.netOfCommission = json.netOfCommission;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.marketIds.size > 0) {
            json.marketIds = Array.from(this.marketIds);
        }
        if (this.includeSettledBets !== null) {
            json.includeSettledBets = this.includeSettledBets;
        }
        if (this.includeBspBets !== null) {
            json.includeBspBets = this.includeBspBets;
        }
        if (this.netOfCommission !== null) {
            json.netOfCommission = this.netOfCommission;
        }
        return json;
    }

    public isValid(): boolean {
        return this.marketIds.size > 0;
    }

    public getMarketIds(): Set<string> {
        return this.marketIds;
    }
    public setMarketIds(marketIds: Set<string>): void {
        this.marketIds = marketIds;
    }
    public getIncludeSettledBets(): boolean | null {
        return this.includeSettledBets;
    }
    public setIncludeSettledBets(includeSettledBets: boolean | null): void {
        this.includeSettledBets = includeSettledBets;
    }
    public getIncludeBspBets(): boolean | null {
        return this.includeBspBets;
    }
    public setIncludeBspBets(includeBspBets: boolean | null): void {
        this.includeBspBets = includeBspBets;
    }
    public getNetOfCommission(): boolean | null {
        return this.netOfCommission;
    }
    public setNetOfCommission(netOfCommission: boolean | null): void {
        this.netOfCommission = netOfCommission;
    }

}
