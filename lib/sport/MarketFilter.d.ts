/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import TimeRange from '../common/TimeRange';
import JsonMember from '../JsonMember';
import MarketBettingType from '../sport/enum/MarketBettingType';
import OrderStatus from '../sport/enum/OrderStatus';
export default class MarketFilter extends JsonMember {
    private textQuery;
    private exchangeIds;
    private eventTypeIds;
    private eventIds;
    private competitionIds;
    private marketIds;
    private venues;
    private bspOnly;
    private turnInPlayEnabled;
    private inPlayOnly;
    private marketBettingTypes;
    private marketCountries;
    private marketTypeCodes;
    private marketStartTime;
    private withOrders;
    private raceTypes;
    constructor(textQuery?: string, exchangeIds?: Set<string>, eventTypeIds?: Set<string>, eventIds?: Set<string>, competitionIds?: Set<string>, marketIds?: Set<string>, venues?: Set<string>, bspOnly?: boolean | null, turnInPlayEnabled?: boolean | null, inPlayOnly?: boolean | null, marketBettingTypes?: Set<MarketBettingType>, marketCountries?: Set<string>, marketTypeCodes?: Set<string>, marketStartTime?: TimeRange, withOrders?: Set<OrderStatus>, raceTypes?: Set<string>);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getTextQuery(): string;
    setTextQuery(textQuery: string): void;
    getExchangeIds(): Set<string>;
    setExchangeIds(exchangeIds: Set<string>): void;
    getEventTypeIds(): Set<string>;
    setEventTypeIds(eventTypeIds: Set<string>): void;
    getEventIds(): Set<string>;
    setEventIds(eventIds: Set<string>): void;
    getCompetitionIds(): Set<string>;
    setCompetitionIds(competitionIds: Set<string>): void;
    getMarketIds(): Set<string>;
    setMarketIds(marketIds: Set<string>): void;
    getVenues(): Set<string>;
    setVenues(venues: Set<string>): void;
    getBspOnly(): boolean | null;
    setBspOnly(bspOnly: boolean | null): void;
    getTurnInPlayEnabled(): boolean | null;
    setTurnInPlayEnabled(turnInPlayEnabled: boolean | null): void;
    getInPlayOnly(): boolean | null;
    setInPlayOnly(inPlayOnly: boolean | null): void;
    getMarketBettingTypes(): Set<MarketBettingType>;
    setMarketBettingTypes(marketBettingTypes: Set<MarketBettingType>): void;
    getMarketCountries(): Set<string>;
    setMarketCountries(marketCountries: Set<string>): void;
    getMarketTypeCodes(): Set<string>;
    setMarketTypeCodes(marketTypeCodes: Set<string>): void;
    getMarketStartTime(): TimeRange;
    setMarketStartTime(marketStartTime: TimeRange): void;
    getWithOrders(): Set<OrderStatus>;
    setWithOrders(withOrders: Set<OrderStatus>): void;
    getRaceTypes(): Set<string>;
    setRaceTypes(raceTypes: Set<string>): void;
}