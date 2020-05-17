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
    private marketIds;
    private includeSettledBets?;
    private includeBspBets?;
    private netOfCommission?;
    constructor(options: IListMarketProfitAndLossRequestOptions);
    toJson(): IListMarketProfitAndLossRequestOptions;
    getMarketIds(): Set<string>;
    setMarketIds(marketIds: Set<string>): void;
    getIncludeSettledBets(): boolean | undefined;
    setIncludeSettledBets(includeSettledBets: boolean): void;
    getIncludeBspBets(): boolean | undefined;
    setIncludeBspBets(includeBspBets: boolean): void;
    getNetOfCommission(): boolean | undefined;
    setNetOfCommission(netOfCommission: boolean): void;
}
