/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import RunnerStatus from '../sport/enum/RunnerStatus';
import ExchangePrices, { IExchangePricesOptions } from '../sport/ExchangePrices';
import Match, { IMatchOptions } from '../sport/Match';
import Matches, { IMatchesOptions } from '../sport/Matches';
import Order, { IOrderOptions } from '../sport/Order';
import StartingPrices, { IStartingPricesOptions } from '../sport/StartingPrices';

export interface IRunnerOptions {
    selectionId: number;
    handicap: number;
    status: RunnerStatus | string;
    adjustmentFactor: number;
    lastPriceTraded?: number;
    totalMatched?: number;
    removalDate?: Date | string;
    sp?: StartingPrices | IStartingPricesOptions;
    ex?: ExchangePrices | IExchangePricesOptions;
    orders?: Array<Order | IOrderOptions>;
    matches?: Array<Match | IMatchOptions>;
    matchesByStrategy?: Map<string, Matches | IMatchesOptions> | {[key: string]: Matches | IMatchesOptions};
}

export default class Runner extends JsonMember {
    private selectionId: number;
    private handicap: number;
    private status: RunnerStatus;
    private adjustmentFactor: number;
    private lastPriceTraded?: number;
    private totalMatched?: number;
    private removalDate?: Date;
    private sp?: StartingPrices;
    private ex?: ExchangePrices;
    private orders?: Order[];
    private matches?: Match[];
    private matchesByStrategy?: Map<string, Matches>;

    constructor(options: IRunnerOptions) {
        super();
        this.selectionId = options.selectionId;
        this.handicap = options.handicap;
        this.status = this.fromJson(options.status, RunnerStatus);
        this.adjustmentFactor = options.adjustmentFactor;
        this.lastPriceTraded = options.lastPriceTraded;
        this.totalMatched = options.totalMatched;
        if (options.removalDate) {
            this.removalDate = this.fromJson(options.removalDate, Date);
        }
        this.sp = options.sp && this.fromJson(options.sp, StartingPrices);
        this.ex = options.ex && this.fromJson(options.ex, ExchangePrices);
        if (options.orders) {
            this.orders = this.arrayFromJson(options.orders, Order);
        }
        if (options.matches) {
            this.matches = this.arrayFromJson(options.matches, Match);
        }
        if (options.matchesByStrategy) {
            this.matchesByStrategy = this.mapFromJson(options.matchesByStrategy, Matches);
        }
    }

    public toJson(): IRunnerOptions {
        const json: IRunnerOptions = {
            selectionId: this.selectionId,
            handicap: this.handicap,
            status: this.status.getValue(),
            adjustmentFactor: this.adjustmentFactor,
        };
        if (typeof this.lastPriceTraded !== 'undefined') {
            json.lastPriceTraded = this.lastPriceTraded;
        }
        if (typeof this.totalMatched !== 'undefined') {
            json.totalMatched = this.totalMatched;
        }
        if (typeof this.removalDate !== 'undefined') {
            json.removalDate = this.removalDate.toISOString();
        }
        if (this.sp) {
            json.sp = this.sp.toJson();
        }
        if (this.ex) {
            json.ex = this.ex.toJson();
        }
        if (this.orders && this.orders.length > 0) {
            json.orders = this.orders.map((value) => value.toJson());
        }
        if (this.matches && this.matches.length > 0) {
            json.matches = this.matches.map((value) => value.toJson());
        }
        if (this.matchesByStrategy && this.matchesByStrategy.size > 0) {
            json.matchesByStrategy = {};
            this.matchesByStrategy.forEach((value, key) => {
                (json.matchesByStrategy as {[key: string]: Matches | IMatchesOptions})[key] = value.toJson();
            });
        }
        return json;
    }

    public getSelectionId(): number {
        return this.selectionId;
    }
    public setSelectionId(selectionId: number): void {
        this.selectionId = selectionId;
    }
    public getHandicap(): number {
        return this.handicap;
    }
    public setHandicap(handicap: number): void {
        this.handicap = handicap;
    }
    public getStatus(): RunnerStatus {
        return this.status;
    }
    public setStatus(status: RunnerStatus): void {
        this.status = status;
    }
    public getAdjustmentFactor(): number {
        return this.adjustmentFactor;
    }
    public setAdjustmentFactor(adjustmentFactor: number): void {
        this.adjustmentFactor = adjustmentFactor;
    }
    public getLastPriceTraded(): number | undefined {
        return this.lastPriceTraded;
    }
    public setLastPriceTraded(lastPriceTraded: number): void {
        this.lastPriceTraded = lastPriceTraded;
    }
    public getTotalMatched(): number | undefined {
        return this.totalMatched;
    }
    public setTotalMatched(totalMatched: number): void {
        this.totalMatched = totalMatched;
    }
    public getRemovalDate(): Date | undefined {
        return this.removalDate;
    }
    public setRemovalDate(removalDate: Date): void {
        this.removalDate = removalDate;
    }
    public getSp(): StartingPrices | undefined {
        return this.sp;
    }
    public setSp(sp: StartingPrices): void {
        this.sp = sp;
    }
    public getEx(): ExchangePrices | undefined {
        return this.ex;
    }
    public setEx(ex: ExchangePrices): void {
        this.ex = ex;
    }
    public getOrders(): Order[] | undefined {
        return this.orders;
    }
    public setOrders(orders: Order[]): void {
        this.orders = orders;
    }
    public getMatches(): Match[] | undefined {
        return this.matches;
    }
    public setMatches(matches: Match[]): void {
        this.matches = matches;
    }
    public getMatchesByStrategy(): Map<string, Matches> | undefined {
        return this.matchesByStrategy;
    }
    public setMatchesByStrategy(matchesByStrategy: Map<string, Matches>): void {
        this.matchesByStrategy = matchesByStrategy;
    }

}
