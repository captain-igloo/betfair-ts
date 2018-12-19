/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import MatchProjection from '../sport/enum/MatchProjection';
import OrderProjection from '../sport/enum/OrderProjection';
import PriceProjection from '../sport/PriceProjection';
export default class ListRunnerBookRequest extends JsonRequest {
    private marketId;
    private selectionId;
    private handicap;
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
    constructor(marketId?: string, selectionId?: number | null, handicap?: number | null, priceProjection?: PriceProjection, orderProjection?: OrderProjection, matchProjection?: MatchProjection, includeOverallPosition?: boolean | null, partitionMatchedByStrategyRef?: boolean | null, customerStrategyRefs?: Set<string>, currencyCode?: string, locale?: string, matchedSince?: Date | null, betIds?: Set<string>);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getMarketId(): string;
    setMarketId(marketId: string): void;
    getSelectionId(): number | null;
    setSelectionId(selectionId: number | null): void;
    getHandicap(): number | null;
    setHandicap(handicap: number | null): void;
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
