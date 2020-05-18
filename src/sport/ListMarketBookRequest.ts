/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';

import MatchProjection from '../sport/enum/MatchProjection';
import OrderProjection from '../sport/enum/OrderProjection';
import PriceProjection, { IPriceProjectionOptions } from '../sport/PriceProjection';

export interface IListMarketBookRequestOptions {
    marketIds: string[];
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
    private marketIds: string[];
    private priceProjection?: PriceProjection;
    private orderProjection?: OrderProjection;
    private matchProjection?: MatchProjection;
    private includeOverallPosition?: boolean;
    private partitionMatchedByStrategyRef?: boolean;
    private customerStrategyRefs?: Set<string>;
    private currencyCode?: string;
    private locale?: string;
    private matchedSince?: Date;
    private betIds?: Set<string>;

    constructor(options: IListMarketBookRequestOptions) {
        super();
        this.marketIds = options.marketIds;
        this.priceProjection = options.priceProjection && this.fromJson(options.priceProjection, PriceProjection);
        if (options.orderProjection) {
            this.orderProjection = this.fromJson(options.orderProjection, OrderProjection);
        }
        if (options.matchProjection) {
            this.matchProjection = this.fromJson(options.matchProjection, MatchProjection);
        }
        this.includeOverallPosition = options.includeOverallPosition;
        this.partitionMatchedByStrategyRef = options.partitionMatchedByStrategyRef;
        this.customerStrategyRefs = options.customerStrategyRefs && this.setFromJson(options.customerStrategyRefs);
        this.currencyCode = options.currencyCode;
        this.locale = options.locale;
        if (options.matchedSince) {
            this.matchedSince = this.fromJson(options.matchedSince, Date);
        }
        this.betIds = options.betIds && this.setFromJson(options.betIds);
    }

    public toJson(): IListMarketBookRequestOptions {
        const json: IListMarketBookRequestOptions = {
            marketIds: this.marketIds,
        };
        if (this.priceProjection) {
            json.priceProjection = this.priceProjection.toJson();
        }
        if (this.orderProjection) {
            json.orderProjection = this.orderProjection.getValue();
        }
        if (this.matchProjection) {
            json.matchProjection = this.matchProjection.getValue();
        }
        if (typeof this.includeOverallPosition !== 'undefined') {
            json.includeOverallPosition = this.includeOverallPosition;
        }
        if (typeof this.partitionMatchedByStrategyRef !== 'undefined') {
            json.partitionMatchedByStrategyRef = this.partitionMatchedByStrategyRef;
        }
        if (this.customerStrategyRefs && this.customerStrategyRefs.size > 0) {
            json.customerStrategyRefs = this.setToJson(this.customerStrategyRefs);
        }
        if (typeof this.currencyCode !== 'undefined') {
            json.currencyCode = this.currencyCode;
        }
        if (typeof this.locale !== 'undefined') {
            json.locale = this.locale;
        }
        if (typeof this.matchedSince !== 'undefined') {
            json.matchedSince = this.matchedSince.toISOString();
        }
        if (this.betIds && this.betIds.size > 0) {
            json.betIds = this.setToJson(this.betIds);
        }
        return json;
    }

    public getMarketIds(): string[] {
        return this.marketIds;
    }
    public setMarketIds(marketIds: string[]): void {
        this.marketIds = marketIds;
    }
    public getPriceProjection(): PriceProjection | undefined {
        return this.priceProjection;
    }
    public setPriceProjection(priceProjection: PriceProjection): void {
        this.priceProjection = priceProjection;
    }
    public getOrderProjection(): OrderProjection | undefined {
        return this.orderProjection;
    }
    public setOrderProjection(orderProjection: OrderProjection): void {
        this.orderProjection = orderProjection;
    }
    public getMatchProjection(): MatchProjection | undefined {
        return this.matchProjection;
    }
    public setMatchProjection(matchProjection: MatchProjection): void {
        this.matchProjection = matchProjection;
    }
    public getIncludeOverallPosition(): boolean | undefined {
        return this.includeOverallPosition;
    }
    public setIncludeOverallPosition(includeOverallPosition: boolean): void {
        this.includeOverallPosition = includeOverallPosition;
    }
    public getPartitionMatchedByStrategyRef(): boolean | undefined {
        return this.partitionMatchedByStrategyRef;
    }
    public setPartitionMatchedByStrategyRef(partitionMatchedByStrategyRef: boolean): void {
        this.partitionMatchedByStrategyRef = partitionMatchedByStrategyRef;
    }
    public getCustomerStrategyRefs(): Set<string> | undefined {
        return this.customerStrategyRefs;
    }
    public setCustomerStrategyRefs(customerStrategyRefs: Set<string>): void {
        this.customerStrategyRefs = customerStrategyRefs;
    }
    public getCurrencyCode(): string | undefined {
        return this.currencyCode;
    }
    public setCurrencyCode(currencyCode: string): void {
        this.currencyCode = currencyCode;
    }
    public getLocale(): string | undefined {
        return this.locale;
    }
    public setLocale(locale: string): void {
        this.locale = locale;
    }
    public getMatchedSince(): Date | undefined {
        return this.matchedSince;
    }
    public setMatchedSince(matchedSince: Date): void {
        this.matchedSince = matchedSince;
    }
    public getBetIds(): Set<string> | undefined {
        return this.betIds;
    }
    public setBetIds(betIds: Set<string>): void {
        this.betIds = betIds;
    }

}
