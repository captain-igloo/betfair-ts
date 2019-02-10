/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import RunnerStatus from '../sport/enum/RunnerStatus';
import ExchangePrices from '../sport/ExchangePrices';
import Match from '../sport/Match';
import Matches from '../sport/Matches';
import Order from '../sport/Order';
import StartingPrices from '../sport/StartingPrices';

export default class Runner extends JsonMember {
    private selectionId: number | null;
    private handicap: number | null;
    private status: RunnerStatus;
    private adjustmentFactor: number | null;
    private lastPriceTraded: number | null;
    private totalMatched: number | null;
    private removalDate: Date | null;
    private sp: StartingPrices;
    private ex: ExchangePrices;
    private orders: Order[];
    private matches: Match[];
    private matchesByStrategy: Map<string, Matches>;

    constructor(
        selectionId: number | null = null,
        handicap: number | null = null,
        status: RunnerStatus = new RunnerStatus(),
        adjustmentFactor: number | null = null,
        lastPriceTraded: number | null = null,
        totalMatched: number | null = null,
        removalDate: Date | null = null,
        sp: StartingPrices = new StartingPrices(),
        ex: ExchangePrices = new ExchangePrices(),
        orders: Order[] = [],
        matches: Match[] = [],
        matchesByStrategy: Map<string, Matches> = new Map<string, Matches>(),
    ) {
        super();
        this.selectionId = selectionId;
        this.handicap = handicap;
        this.status = status;
        this.adjustmentFactor = adjustmentFactor;
        this.lastPriceTraded = lastPriceTraded;
        this.totalMatched = totalMatched;
        this.removalDate = removalDate;
        this.sp = sp;
        this.ex = ex;
        this.orders = orders;
        this.matches = matches;
        this.matchesByStrategy = matchesByStrategy;
    }

    public fromJson(json: any): void {
        if ('selectionId' in json) {
            this.selectionId = json.selectionId;
        }
        if ('handicap' in json) {
            this.handicap = json.handicap;
        }
        if ('status' in json) {
            this.status.setValue(json.status);
        }
        if ('adjustmentFactor' in json) {
            this.adjustmentFactor = json.adjustmentFactor;
        }
        if ('lastPriceTraded' in json) {
            this.lastPriceTraded = json.lastPriceTraded;
        }
        if ('totalMatched' in json) {
            this.totalMatched = json.totalMatched;
        }
        if ('removalDate' in json) {
            this.removalDate = new Date(json.removalDate);
        }
        if ('sp' in json) {
            this.sp.fromJson(json.sp);
        }
        if ('ex' in json) {
            this.ex.fromJson(json.ex);
        }
        if ('orders' in json) {
            this.orders = json.orders.map((ordersJson: any) => {
                const element = new Order();
                element.fromJson(ordersJson);
                return element;
            });
        }
        if ('matches' in json) {
            this.matches = json.matches.map((matchesJson: any) => {
                const element = new Match();
                element.fromJson(matchesJson);
                return element;
            });
        }
        if ('matchesByStrategy' in json) {
            Object.keys(json.matchesByStrategy).forEach((key: string) => {
                const value = new Matches();
                value.fromJson(json.matchesByStrategy[key]);
                this.matchesByStrategy.set(key, value);
            });
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.selectionId !== null) {
            json.selectionId = this.selectionId;
        }
        if (this.handicap !== null) {
            json.handicap = this.handicap;
        }
        if (this.status.isValid()) {
            json.status = this.status.getValue();
        }
        if (this.adjustmentFactor !== null) {
            json.adjustmentFactor = this.adjustmentFactor;
        }
        if (this.lastPriceTraded !== null) {
            json.lastPriceTraded = this.lastPriceTraded;
        }
        if (this.totalMatched !== null) {
            json.totalMatched = this.totalMatched;
        }
        if (this.removalDate !== null) {
            json.removalDate = this.removalDate.toISOString();
        }
        if (this.sp.isValid()) {
            json.sp = this.sp.toJson();
        }
        if (this.ex.isValid()) {
            json.ex = this.ex.toJson();
        }
        if (this.orders.length > 0) {
            json.orders = this.orders.map((value) => value.toJson());
        }
        if (this.matches.length > 0) {
            json.matches = this.matches.map((value) => value.toJson());
        }
        if (this.matchesByStrategy.size > 0) {
            json.matchesByStrategy = {};
            this.matchesByStrategy.forEach((value, key) => {
                json.matchesByStrategy.key = value.toJson();
            });
        }
        return json;
    }

    public isValid(): boolean {
        return this.selectionId !== null &&
            this.handicap !== null &&
            this.status.isValid() &&
            this.adjustmentFactor !== null;
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
    public getStatus(): RunnerStatus {
        return this.status;
    }
    public setStatus(status: RunnerStatus): void {
        this.status = status;
    }
    public getAdjustmentFactor(): number | null {
        return this.adjustmentFactor;
    }
    public setAdjustmentFactor(adjustmentFactor: number | null): void {
        this.adjustmentFactor = adjustmentFactor;
    }
    public getLastPriceTraded(): number | null {
        return this.lastPriceTraded;
    }
    public setLastPriceTraded(lastPriceTraded: number | null): void {
        this.lastPriceTraded = lastPriceTraded;
    }
    public getTotalMatched(): number | null {
        return this.totalMatched;
    }
    public setTotalMatched(totalMatched: number | null): void {
        this.totalMatched = totalMatched;
    }
    public getRemovalDate(): Date | null {
        return this.removalDate;
    }
    public setRemovalDate(removalDate: Date | null): void {
        this.removalDate = removalDate;
    }
    public getSp(): StartingPrices {
        return this.sp;
    }
    public setSp(sp: StartingPrices): void {
        this.sp = sp;
    }
    public getEx(): ExchangePrices {
        return this.ex;
    }
    public setEx(ex: ExchangePrices): void {
        this.ex = ex;
    }
    public getOrders(): Order[] {
        return this.orders;
    }
    public setOrders(orders: Order[]): void {
        this.orders = orders;
    }
    public getMatches(): Match[] {
        return this.matches;
    }
    public setMatches(matches: Match[]): void {
        this.matches = matches;
    }
    public getMatchesByStrategy(): Map<string, Matches> {
        return this.matchesByStrategy;
    }
    public setMatchesByStrategy(matchesByStrategy: Map<string, Matches>): void {
        this.matchesByStrategy = matchesByStrategy;
    }

}
