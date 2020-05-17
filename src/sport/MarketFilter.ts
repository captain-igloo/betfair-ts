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
    private textQuery?: string;
    private exchangeIds?: Set<string>;
    private eventTypeIds?: Set<string>;
    private eventIds?: Set<string>;
    private competitionIds?: Set<string>;
    private marketIds?: Set<string>;
    private venues?: Set<string>;
    private bspOnly?: boolean;
    private turnInPlayEnabled?: boolean;
    private inPlayOnly?: boolean;
    private marketBettingTypes?: Set<MarketBettingType>;
    private marketCountries?: Set<string>;
    private marketTypeCodes?: Set<string>;
    private marketStartTime?: TimeRange;
    private withOrders?: Set<OrderStatus>;
    private raceTypes?: Set<string>;

    constructor(options: IMarketFilterOptions) {
        super();
        this.textQuery = options.textQuery;
        this.exchangeIds = options.exchangeIds && this.setFromJson(options.exchangeIds);
        this.eventTypeIds = options.eventTypeIds && this.setFromJson(options.eventTypeIds);
        this.eventIds = options.eventIds && this.setFromJson(options.eventIds);
        this.competitionIds = options.competitionIds && this.setFromJson(options.competitionIds);
        this.marketIds = options.marketIds && this.setFromJson(options.marketIds);
        this.venues = options.venues && this.setFromJson(options.venues);
        this.bspOnly = options.bspOnly;
        this.turnInPlayEnabled = options.turnInPlayEnabled;
        this.inPlayOnly = options.inPlayOnly;
        this.marketBettingTypes = options.marketBettingTypes && this.setFromJson(options.marketBettingTypes, MarketBettingType);
        this.marketCountries = options.marketCountries && this.setFromJson(options.marketCountries);
        this.marketTypeCodes = options.marketTypeCodes && this.setFromJson(options.marketTypeCodes);
        this.marketStartTime = options.marketStartTime && this.fromJson(options.marketStartTime, TimeRange);
        this.withOrders = options.withOrders && this.setFromJson(options.withOrders, OrderStatus);
        this.raceTypes = options.raceTypes && this.setFromJson(options.raceTypes);
    }

    public toJson(): IMarketFilterOptions {
        const json: IMarketFilterOptions = {
        };
        if (typeof this.textQuery !== 'undefined') {
            json.textQuery = this.textQuery;
        }
        if (this.exchangeIds && this.exchangeIds.size > 0) {
            json.exchangeIds = this.setToJson(this.exchangeIds);
        }
        if (this.eventTypeIds && this.eventTypeIds.size > 0) {
            json.eventTypeIds = this.setToJson(this.eventTypeIds);
        }
        if (this.eventIds && this.eventIds.size > 0) {
            json.eventIds = this.setToJson(this.eventIds);
        }
        if (this.competitionIds && this.competitionIds.size > 0) {
            json.competitionIds = this.setToJson(this.competitionIds);
        }
        if (this.marketIds && this.marketIds.size > 0) {
            json.marketIds = this.setToJson(this.marketIds);
        }
        if (this.venues && this.venues.size > 0) {
            json.venues = this.setToJson(this.venues);
        }
        if (typeof this.bspOnly !== 'undefined') {
            json.bspOnly = this.bspOnly;
        }
        if (typeof this.turnInPlayEnabled !== 'undefined') {
            json.turnInPlayEnabled = this.turnInPlayEnabled;
        }
        if (typeof this.inPlayOnly !== 'undefined') {
            json.inPlayOnly = this.inPlayOnly;
        }
        if (this.marketBettingTypes && this.marketBettingTypes.size > 0) {
            json.marketBettingTypes = this.setToJson(this.marketBettingTypes);
        }
        if (this.marketCountries && this.marketCountries.size > 0) {
            json.marketCountries = this.setToJson(this.marketCountries);
        }
        if (this.marketTypeCodes && this.marketTypeCodes.size > 0) {
            json.marketTypeCodes = this.setToJson(this.marketTypeCodes);
        }
        if (this.marketStartTime) {
            json.marketStartTime = this.marketStartTime.toJson();
        }
        if (this.withOrders && this.withOrders.size > 0) {
            json.withOrders = this.setToJson(this.withOrders);
        }
        if (this.raceTypes && this.raceTypes.size > 0) {
            json.raceTypes = this.setToJson(this.raceTypes);
        }
        return json;
    }

    public getTextQuery(): string | undefined {
        return this.textQuery;
    }
    public setTextQuery(textQuery: string): void {
        this.textQuery = textQuery;
    }
    public getExchangeIds(): Set<string> | undefined {
        return this.exchangeIds;
    }
    public setExchangeIds(exchangeIds: Set<string>): void {
        this.exchangeIds = exchangeIds;
    }
    public getEventTypeIds(): Set<string> | undefined {
        return this.eventTypeIds;
    }
    public setEventTypeIds(eventTypeIds: Set<string>): void {
        this.eventTypeIds = eventTypeIds;
    }
    public getEventIds(): Set<string> | undefined {
        return this.eventIds;
    }
    public setEventIds(eventIds: Set<string>): void {
        this.eventIds = eventIds;
    }
    public getCompetitionIds(): Set<string> | undefined {
        return this.competitionIds;
    }
    public setCompetitionIds(competitionIds: Set<string>): void {
        this.competitionIds = competitionIds;
    }
    public getMarketIds(): Set<string> | undefined {
        return this.marketIds;
    }
    public setMarketIds(marketIds: Set<string>): void {
        this.marketIds = marketIds;
    }
    public getVenues(): Set<string> | undefined {
        return this.venues;
    }
    public setVenues(venues: Set<string>): void {
        this.venues = venues;
    }
    public getBspOnly(): boolean | undefined {
        return this.bspOnly;
    }
    public setBspOnly(bspOnly: boolean): void {
        this.bspOnly = bspOnly;
    }
    public getTurnInPlayEnabled(): boolean | undefined {
        return this.turnInPlayEnabled;
    }
    public setTurnInPlayEnabled(turnInPlayEnabled: boolean): void {
        this.turnInPlayEnabled = turnInPlayEnabled;
    }
    public getInPlayOnly(): boolean | undefined {
        return this.inPlayOnly;
    }
    public setInPlayOnly(inPlayOnly: boolean): void {
        this.inPlayOnly = inPlayOnly;
    }
    public getMarketBettingTypes(): Set<MarketBettingType> | undefined {
        return this.marketBettingTypes;
    }
    public setMarketBettingTypes(marketBettingTypes: Set<MarketBettingType>): void {
        this.marketBettingTypes = marketBettingTypes;
    }
    public getMarketCountries(): Set<string> | undefined {
        return this.marketCountries;
    }
    public setMarketCountries(marketCountries: Set<string>): void {
        this.marketCountries = marketCountries;
    }
    public getMarketTypeCodes(): Set<string> | undefined {
        return this.marketTypeCodes;
    }
    public setMarketTypeCodes(marketTypeCodes: Set<string>): void {
        this.marketTypeCodes = marketTypeCodes;
    }
    public getMarketStartTime(): TimeRange | undefined {
        return this.marketStartTime;
    }
    public setMarketStartTime(marketStartTime: TimeRange): void {
        this.marketStartTime = marketStartTime;
    }
    public getWithOrders(): Set<OrderStatus> | undefined {
        return this.withOrders;
    }
    public setWithOrders(withOrders: Set<OrderStatus>): void {
        this.withOrders = withOrders;
    }
    public getRaceTypes(): Set<string> | undefined {
        return this.raceTypes;
    }
    public setRaceTypes(raceTypes: Set<string>): void {
        this.raceTypes = raceTypes;
    }

}
