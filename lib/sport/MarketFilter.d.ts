/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import TimeRange, { ITimeRangeOptions } from '../common/TimeRange';
import MarketBettingType from '../sport/enum/MarketBettingType';
import OrderStatus from '../sport/enum/OrderStatus';
export interface IMarketFilterOptions {
    textQuery?: string;
    exchangeIds?: Set<string> | string[];
    eventTypeIds?: Set<string> | string[];
    eventIds?: Set<string> | string[];
    competitionIds?: Set<string> | string[];
    marketIds?: Set<string> | string[];
    venues?: Set<string> | string[];
    bspOnly?: boolean;
    turnInPlayEnabled?: boolean;
    inPlayOnly?: boolean;
    marketBettingTypes?: Set<MarketBettingType> | string[];
    marketCountries?: Set<string> | string[];
    marketTypeCodes?: Set<string> | string[];
    marketStartTime?: TimeRange | ITimeRangeOptions;
    withOrders?: Set<OrderStatus> | string[];
    raceTypes?: Set<string> | string[];
}
export default class MarketFilter extends JsonMember {
    private textQuery?;
    private exchangeIds?;
    private eventTypeIds?;
    private eventIds?;
    private competitionIds?;
    private marketIds?;
    private venues?;
    private bspOnly?;
    private turnInPlayEnabled?;
    private inPlayOnly?;
    private marketBettingTypes?;
    private marketCountries?;
    private marketTypeCodes?;
    private marketStartTime?;
    private withOrders?;
    private raceTypes?;
    constructor(options: IMarketFilterOptions);
    toJson(): IMarketFilterOptions;
    getTextQuery(): string | undefined;
    setTextQuery(textQuery: string): void;
    getExchangeIds(): Set<string> | undefined;
    setExchangeIds(exchangeIds: Set<string>): void;
    getEventTypeIds(): Set<string> | undefined;
    setEventTypeIds(eventTypeIds: Set<string>): void;
    getEventIds(): Set<string> | undefined;
    setEventIds(eventIds: Set<string>): void;
    getCompetitionIds(): Set<string> | undefined;
    setCompetitionIds(competitionIds: Set<string>): void;
    getMarketIds(): Set<string> | undefined;
    setMarketIds(marketIds: Set<string>): void;
    getVenues(): Set<string> | undefined;
    setVenues(venues: Set<string>): void;
    getBspOnly(): boolean | undefined;
    setBspOnly(bspOnly: boolean): void;
    getTurnInPlayEnabled(): boolean | undefined;
    setTurnInPlayEnabled(turnInPlayEnabled: boolean): void;
    getInPlayOnly(): boolean | undefined;
    setInPlayOnly(inPlayOnly: boolean): void;
    getMarketBettingTypes(): Set<MarketBettingType> | undefined;
    setMarketBettingTypes(marketBettingTypes: Set<MarketBettingType>): void;
    getMarketCountries(): Set<string> | undefined;
    setMarketCountries(marketCountries: Set<string>): void;
    getMarketTypeCodes(): Set<string> | undefined;
    setMarketTypeCodes(marketTypeCodes: Set<string>): void;
    getMarketStartTime(): TimeRange | undefined;
    setMarketStartTime(marketStartTime: TimeRange): void;
    getWithOrders(): Set<OrderStatus> | undefined;
    setWithOrders(withOrders: Set<OrderStatus>): void;
    getRaceTypes(): Set<string> | undefined;
    setRaceTypes(raceTypes: Set<string>): void;
}
