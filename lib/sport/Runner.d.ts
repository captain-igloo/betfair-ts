/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import RunnerStatus from '../sport/enum/RunnerStatus';
import StartingPrices from '../sport/StartingPrices';
import ExchangePrices from '../sport/ExchangePrices';
import Order from '../sport/Order';
import Match from '../sport/Match';
import Matches from '../sport/Matches';
export default class Runner extends JsonMember {
    private selectionId;
    private handicap;
    private status;
    private adjustmentFactor;
    private lastPriceTraded;
    private totalMatched;
    private removalDate;
    private sp;
    private ex;
    private orders;
    private matches;
    private matchesByStrategy;
    constructor(selectionId?: number | null, handicap?: number | null, status?: RunnerStatus, adjustmentFactor?: number | null, lastPriceTraded?: number | null, totalMatched?: number | null, removalDate?: Date | null, sp?: StartingPrices, ex?: ExchangePrices, orders?: Order[], matches?: Match[], matchesByStrategy?: Map<string, Matches>);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getSelectionId(): number | null;
    setSelectionId(selectionId: number | null): void;
    getHandicap(): number | null;
    setHandicap(handicap: number | null): void;
    getStatus(): RunnerStatus;
    setStatus(status: RunnerStatus): void;
    getAdjustmentFactor(): number | null;
    setAdjustmentFactor(adjustmentFactor: number | null): void;
    getLastPriceTraded(): number | null;
    setLastPriceTraded(lastPriceTraded: number | null): void;
    getTotalMatched(): number | null;
    setTotalMatched(totalMatched: number | null): void;
    getRemovalDate(): Date | null;
    setRemovalDate(removalDate: Date | null): void;
    getSp(): StartingPrices;
    setSp(sp: StartingPrices): void;
    getEx(): ExchangePrices;
    setEx(ex: ExchangePrices): void;
    getOrders(): Order[];
    setOrders(orders: Order[]): void;
    getMatches(): Match[];
    setMatches(matches: Match[]): void;
    getMatchesByStrategy(): Map<string, Matches>;
    setMatchesByStrategy(matchesByStrategy: Map<string, Matches>): void;
}
