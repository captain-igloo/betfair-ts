/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';


export interface IListMarketProfitAndLossRequestOptions {
    marketIds: Set<string> | string[];
    includeSettledBets?: boolean;
    includeBspBets?: boolean;
    netOfCommission?: boolean;
}

export default class ListMarketProfitAndLossRequest extends JsonRequest {
    private marketIds: Set<string>;
    private includeSettledBets?: boolean;
    private includeBspBets?: boolean;
    private netOfCommission?: boolean;

    constructor(options: IListMarketProfitAndLossRequestOptions) {
        super();
        this.marketIds = this.setFromJson(options.marketIds);
        this.includeSettledBets = options.includeSettledBets;
        this.includeBspBets = options.includeBspBets;
        this.netOfCommission = options.netOfCommission;
    }

    public toJson(): IListMarketProfitAndLossRequestOptions {
        const json: IListMarketProfitAndLossRequestOptions = {
            marketIds: this.setToJson(this.marketIds),
        };
        if (typeof this.includeSettledBets !== 'undefined') {
            json.includeSettledBets = this.includeSettledBets;
        }
        if (typeof this.includeBspBets !== 'undefined') {
            json.includeBspBets = this.includeBspBets;
        }
        if (typeof this.netOfCommission !== 'undefined') {
            json.netOfCommission = this.netOfCommission;
        }
        return json;
    }

    public getMarketIds(): Set<string> {
        return this.marketIds;
    }
    public setMarketIds(marketIds: Set<string>): void {
        this.marketIds = marketIds;
    }
    public getIncludeSettledBets(): boolean | undefined {
        return this.includeSettledBets;
    }
    public setIncludeSettledBets(includeSettledBets: boolean): void {
        this.includeSettledBets = includeSettledBets;
    }
    public getIncludeBspBets(): boolean | undefined {
        return this.includeBspBets;
    }
    public setIncludeBspBets(includeBspBets: boolean): void {
        this.includeBspBets = includeBspBets;
    }
    public getNetOfCommission(): boolean | undefined {
        return this.netOfCommission;
    }
    public setNetOfCommission(netOfCommission: boolean): void {
        this.netOfCommission = netOfCommission;
    }

}
