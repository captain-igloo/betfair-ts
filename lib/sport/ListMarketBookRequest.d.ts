/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import MatchProjection from '../sport/enum/MatchProjection';
import OrderProjection from '../sport/enum/OrderProjection';
import PriceProjection, { IPriceProjectionOptions } from '../sport/PriceProjection';
export interface IListMarketBookRequestOptions {
    marketIds: Array<string>;
    priceProjection?: PriceProjection | IPriceProjectionOptions;
    orderProjection?: OrderProjection | string;
    matchProjection?: MatchProjection | string;
    includeOverallPosition?: boolean;
    partitionMatchedByStrategyRef?: boolean;
    customerStrategyRefs?: Set<string> | string[];
    currencyCode?: string;
    locale?: string;
    matchedSince?: Date | string;
    betIds?: Set<string> | string[];
}
export default class ListMarketBookRequest extends JsonRequest {
    private marketIds;
    private priceProjection?;
    private orderProjection?;
    private matchProjection?;
    private includeOverallPosition?;
    private partitionMatchedByStrategyRef?;
    private customerStrategyRefs?;
    private currencyCode?;
    private locale?;
    private matchedSince?;
    private betIds?;
    constructor(options: IListMarketBookRequestOptions);
    toJson(): IListMarketBookRequestOptions;
    getMarketIds(): string[];
    setMarketIds(marketIds: string[]): void;
    getPriceProjection(): PriceProjection | undefined;
    setPriceProjection(priceProjection: PriceProjection): void;
    getOrderProjection(): OrderProjection | undefined;
    setOrderProjection(orderProjection: OrderProjection): void;
    getMatchProjection(): MatchProjection | undefined;
    setMatchProjection(matchProjection: MatchProjection): void;
    getIncludeOverallPosition(): boolean | undefined;
    setIncludeOverallPosition(includeOverallPosition: boolean): void;
    getPartitionMatchedByStrategyRef(): boolean | undefined;
    setPartitionMatchedByStrategyRef(partitionMatchedByStrategyRef: boolean): void;
    getCustomerStrategyRefs(): Set<string> | undefined;
    setCustomerStrategyRefs(customerStrategyRefs: Set<string>): void;
    getCurrencyCode(): string | undefined;
    setCurrencyCode(currencyCode: string): void;
    getLocale(): string | undefined;
    setLocale(locale: string): void;
    getMatchedSince(): Date | undefined;
    setMatchedSince(matchedSince: Date): void;
    getBetIds(): Set<string> | undefined;
    setBetIds(betIds: Set<string>): void;
}
