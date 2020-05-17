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
    matchesByStrategy?: Map<string, Matches | IMatchesOptions> | {
        [key: string]: Matches | IMatchesOptions;
    };
}
export default class Runner extends JsonMember {
    private selectionId;
    private handicap;
    private status;
    private adjustmentFactor;
    private lastPriceTraded?;
    private totalMatched?;
    private removalDate?;
    private sp?;
    private ex?;
    private orders?;
    private matches?;
    private matchesByStrategy?;
    constructor(options: IRunnerOptions);
    toJson(): IRunnerOptions;
    getSelectionId(): number;
    setSelectionId(selectionId: number): void;
    getHandicap(): number;
    setHandicap(handicap: number): void;
    getStatus(): RunnerStatus;
    setStatus(status: RunnerStatus): void;
    getAdjustmentFactor(): number;
    setAdjustmentFactor(adjustmentFactor: number): void;
    getLastPriceTraded(): number | undefined;
    setLastPriceTraded(lastPriceTraded: number): void;
    getTotalMatched(): number | undefined;
    setTotalMatched(totalMatched: number): void;
    getRemovalDate(): Date | undefined;
    setRemovalDate(removalDate: Date): void;
    getSp(): StartingPrices | undefined;
    setSp(sp: StartingPrices): void;
    getEx(): ExchangePrices | undefined;
    setEx(ex: ExchangePrices): void;
    getOrders(): Order[] | undefined;
    setOrders(orders: Order[]): void;
    getMatches(): Match[] | undefined;
    setMatches(matches: Match[]): void;
    getMatchesByStrategy(): Map<string, Matches> | undefined;
    setMatchesByStrategy(matchesByStrategy: Map<string, Matches>): void;
}
