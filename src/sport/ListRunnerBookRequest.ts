/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import MatchProjection from '../sport/enum/MatchProjection';
import OrderProjection from '../sport/enum/OrderProjection';
import PriceProjection from '../sport/PriceProjection';

export default class ListRunnerBookRequest extends JsonRequest {
    private marketId: string;
    private selectionId: number | null;
    private handicap: number | null;
    private priceProjection: PriceProjection;
    private orderProjection: OrderProjection;
    private matchProjection: MatchProjection;
    private includeOverallPosition: boolean | null;
    private partitionMatchedByStrategyRef: boolean | null;
    private customerStrategyRefs: Set<string>;
    private currencyCode: string;
    private locale: string;
    private matchedSince: Date | null;
    private betIds: Set<string>;

    constructor(
        marketId: string = '',
        selectionId: number | null = null,
        handicap: number | null = null,
        priceProjection: PriceProjection = new PriceProjection(),
        orderProjection: OrderProjection = new OrderProjection(),
        matchProjection: MatchProjection = new MatchProjection(),
        includeOverallPosition: boolean | null = null,
        partitionMatchedByStrategyRef: boolean | null = null,
        customerStrategyRefs: Set<string> = new Set(),
        currencyCode: string = '',
        locale: string = '',
        matchedSince: Date | null = null,
        betIds: Set<string> = new Set(),
    ) {
        super();
        this.marketId = marketId;
        this.selectionId = selectionId;
        this.handicap = handicap;
        this.priceProjection = priceProjection;
        this.orderProjection = orderProjection;
        this.matchProjection = matchProjection;
        this.includeOverallPosition = includeOverallPosition;
        this.partitionMatchedByStrategyRef = partitionMatchedByStrategyRef;
        this.customerStrategyRefs = customerStrategyRefs;
        this.currencyCode = currencyCode;
        this.locale = locale;
        this.matchedSince = matchedSince;
        this.betIds = betIds;
    }

    public fromJson(json: any): void {
        if ('marketId' in json) {
            this.marketId = json.marketId;
        }
        if ('selectionId' in json) {
            this.selectionId = json.selectionId;
        }
        if ('handicap' in json) {
            this.handicap = json.handicap;
        }
        if ('priceProjection' in json) {
            this.priceProjection.fromJson(json.priceProjection);
        }
        if ('orderProjection' in json) {
            this.orderProjection.setValue(json.orderProjection);
        }
        if ('matchProjection' in json) {
            this.matchProjection.setValue(json.matchProjection);
        }
        if ('includeOverallPosition' in json) {
            this.includeOverallPosition = json.includeOverallPosition;
        }
        if ('partitionMatchedByStrategyRef' in json) {
            this.partitionMatchedByStrategyRef = json.partitionMatchedByStrategyRef;
        }
        if ('customerStrategyRefs' in json) {
            this.customerStrategyRefs = json.customerStrategyRefs;
        }
        if ('currencyCode' in json) {
            this.currencyCode = json.currencyCode;
        }
        if ('locale' in json) {
            this.locale = json.locale;
        }
        if ('matchedSince' in json) {
            this.matchedSince = new Date(json.matchedSince);
        }
        if ('betIds' in json) {
            this.betIds = json.betIds;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.marketId !== null) {
            json.marketId = this.marketId;
        }
        if (this.selectionId !== null) {
            json.selectionId = this.selectionId;
        }
        if (this.handicap !== null) {
            json.handicap = this.handicap;
        }
        if (this.priceProjection.isValid()) {
            json.priceProjection = this.priceProjection.toJson();
        }
        if (this.orderProjection.isValid()) {
            json.orderProjection = this.orderProjection;
        }
        if (this.matchProjection.isValid()) {
            json.matchProjection = this.matchProjection;
        }
        if (this.includeOverallPosition !== null) {
            json.includeOverallPosition = this.includeOverallPosition;
        }
        if (this.partitionMatchedByStrategyRef !== null) {
            json.partitionMatchedByStrategyRef = this.partitionMatchedByStrategyRef;
        }
        if (this.customerStrategyRefs.size > 0) {
            json.customerStrategyRefs = this.customerStrategyRefs;
        }
        if (this.currencyCode !== null) {
            json.currencyCode = this.currencyCode;
        }
        if (this.locale !== null) {
            json.locale = this.locale;
        }
        if (this.matchedSince !== null) {
            json.matchedSince = this.matchedSince.toISOString();
        }
        if (this.betIds.size > 0) {
            json.betIds = this.betIds;
        }
        return json;
    }

    public isValid(): boolean {
        return this.marketId !== null &&
            this.selectionId !== null;
    }

    public getMarketId(): string {
        return this.marketId;
    }
    public setMarketId(marketId: string): void {
        this.marketId = marketId;
    }
    public getSelectionId(): number | null {
        return this.selectionId;
    }
    public setSelectionId(selectionId: number | null): void {
        this.selectionId = selectionId;
    }
    public getHandicap(): number | null {
        return this.handicap;
    }
    public setHandicap(handicap: number | null): void {
        this.handicap = handicap;
    }
    public getPriceProjection(): PriceProjection {
        return this.priceProjection;
    }
    public setPriceProjection(priceProjection: PriceProjection): void {
        this.priceProjection = priceProjection;
    }
    public getOrderProjection(): OrderProjection {
        return this.orderProjection;
    }
    public setOrderProjection(orderProjection: OrderProjection): void {
        this.orderProjection = orderProjection;
    }
    public getMatchProjection(): MatchProjection {
        return this.matchProjection;
    }
    public setMatchProjection(matchProjection: MatchProjection): void {
        this.matchProjection = matchProjection;
    }
    public getIncludeOverallPosition(): boolean | null {
        return this.includeOverallPosition;
    }
    public setIncludeOverallPosition(includeOverallPosition: boolean | null): void {
        this.includeOverallPosition = includeOverallPosition;
    }
    public getPartitionMatchedByStrategyRef(): boolean | null {
        return this.partitionMatchedByStrategyRef;
    }
    public setPartitionMatchedByStrategyRef(partitionMatchedByStrategyRef: boolean | null): void {
        this.partitionMatchedByStrategyRef = partitionMatchedByStrategyRef;
    }
    public getCustomerStrategyRefs(): Set<string> {
        return this.customerStrategyRefs;
    }
    public setCustomerStrategyRefs(customerStrategyRefs: Set<string>): void {
        this.customerStrategyRefs = customerStrategyRefs;
    }
    public getCurrencyCode(): string {
        return this.currencyCode;
    }
    public setCurrencyCode(currencyCode: string): void {
        this.currencyCode = currencyCode;
    }
    public getLocale(): string {
        return this.locale;
    }
    public setLocale(locale: string): void {
        this.locale = locale;
    }
    public getMatchedSince(): Date | null {
        return this.matchedSince;
    }
    public setMatchedSince(matchedSince: Date | null): void {
        this.matchedSince = matchedSince;
    }
    public getBetIds(): Set<string> {
        return this.betIds;
    }
    public setBetIds(betIds: Set<string>): void {
        this.betIds = betIds;
    }

}
