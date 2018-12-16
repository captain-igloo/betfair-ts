/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import PriceProjection from '../sport/PriceProjection';
import OrderProjection from '../sport/enum/OrderProjection';
import MatchProjection from '../sport/enum/MatchProjection';
export default class ListMarketBookRequest extends JsonRequest {
    private marketIds;
    private priceProjection;
    private orderProjection;
    private matchProjection;
    private includeOverallPosition;
    private partitionMatchedByStrategyRef;
    private customerStrategyRefs;
    private currencyCode;
    private locale;
    private matchedSince;
    private betIds;
    constructor(marketIds?: string[], priceProjection?: PriceProjection, orderProjection?: OrderProjection, matchProjection?: MatchProjection, includeOverallPosition?: boolean | null, partitionMatchedByStrategyRef?: boolean | null, customerStrategyRefs?: Set<string>, currencyCode?: string, locale?: string, matchedSince?: Date | null, betIds?: Set<string>);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getMarketIds(): string[];
    setMarketIds(marketIds: string[]): void;
    getPriceProjection(): PriceProjection;
    setPriceProjection(priceProjection: PriceProjection): void;
    getOrderProjection(): OrderProjection;
    setOrderProjection(orderProjection: OrderProjection): void;
    getMatchProjection(): MatchProjection;
    setMatchProjection(matchProjection: MatchProjection): void;
    getIncludeOverallPosition(): boolean | null;
    setIncludeOverallPosition(includeOverallPosition: boolean | null): void;
    getPartitionMatchedByStrategyRef(): boolean | null;
    setPartitionMatchedByStrategyRef(partitionMatchedByStrategyRef: boolean | null): void;
    getCustomerStrategyRefs(): Set<string>;
    setCustomerStrategyRefs(customerStrategyRefs: Set<string>): void;
    getCurrencyCode(): string;
    setCurrencyCode(currencyCode: string): void;
    getLocale(): string;
    setLocale(locale: string): void;
    getMatchedSince(): Date | null;
    setMatchedSince(matchedSince: Date | null): void;
    getBetIds(): Set<string>;
    setBetIds(betIds: Set<string>): void;
}
