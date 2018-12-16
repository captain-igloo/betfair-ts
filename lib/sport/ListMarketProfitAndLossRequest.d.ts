/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
export default class ListMarketProfitAndLossRequest extends JsonRequest {
    private marketIds;
    private includeSettledBets;
    private includeBspBets;
    private netOfCommission;
    constructor(marketIds?: Set<string>, includeSettledBets?: boolean | null, includeBspBets?: boolean | null, netOfCommission?: boolean | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getMarketIds(): Set<string>;
    setMarketIds(marketIds: Set<string>): void;
    getIncludeSettledBets(): boolean | null;
    setIncludeSettledBets(includeSettledBets: boolean | null): void;
    getIncludeBspBets(): boolean | null;
    setIncludeBspBets(includeBspBets: boolean | null): void;
    getNetOfCommission(): boolean | null;
    setNetOfCommission(netOfCommission: boolean | null): void;
}
