/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import TimeRange from '../common/TimeRange';
import JsonMember from '../JsonMember';
import MarketBettingType from '../sport/enum/MarketBettingType';
import OrderStatus from '../sport/enum/OrderStatus';

export default class MarketFilter extends JsonMember {
    private textQuery: string;
    private exchangeIds: Set<string>;
    private eventTypeIds: Set<string>;
    private eventIds: Set<string>;
    private competitionIds: Set<string>;
    private marketIds: Set<string>;
    private venues: Set<string>;
    private bspOnly: boolean | null;
    private turnInPlayEnabled: boolean | null;
    private inPlayOnly: boolean | null;
    private marketBettingTypes: Set<MarketBettingType>;
    private marketCountries: Set<string>;
    private marketTypeCodes: Set<string>;
    private marketStartTime: TimeRange;
    private withOrders: Set<OrderStatus>;
    private raceTypes: Set<string>;

    constructor(
        textQuery: string = '',
        exchangeIds: Set<string> = new Set(),
        eventTypeIds: Set<string> = new Set(),
        eventIds: Set<string> = new Set(),
        competitionIds: Set<string> = new Set(),
        marketIds: Set<string> = new Set(),
        venues: Set<string> = new Set(),
        bspOnly: boolean | null = null,
        turnInPlayEnabled: boolean | null = null,
        inPlayOnly: boolean | null = null,
        marketBettingTypes: Set<MarketBettingType> = new Set(),
        marketCountries: Set<string> = new Set(),
        marketTypeCodes: Set<string> = new Set(),
        marketStartTime: TimeRange = new TimeRange(),
        withOrders: Set<OrderStatus> = new Set(),
        raceTypes: Set<string> = new Set(),
    ) {
        super();
        this.textQuery = textQuery;
        this.exchangeIds = exchangeIds;
        this.eventTypeIds = eventTypeIds;
        this.eventIds = eventIds;
        this.competitionIds = competitionIds;
        this.marketIds = marketIds;
        this.venues = venues;
        this.bspOnly = bspOnly;
        this.turnInPlayEnabled = turnInPlayEnabled;
        this.inPlayOnly = inPlayOnly;
        this.marketBettingTypes = marketBettingTypes;
        this.marketCountries = marketCountries;
        this.marketTypeCodes = marketTypeCodes;
        this.marketStartTime = marketStartTime;
        this.withOrders = withOrders;
        this.raceTypes = raceTypes;
    }

    public fromJson(json: any): void {
        if ('textQuery' in json) {
            this.textQuery = json.textQuery;
        }
        if ('exchangeIds' in json) {
            this.exchangeIds = json.exchangeIds;
        }
        if ('eventTypeIds' in json) {
            this.eventTypeIds = json.eventTypeIds;
        }
        if ('eventIds' in json) {
            this.eventIds = json.eventIds;
        }
        if ('competitionIds' in json) {
            this.competitionIds = json.competitionIds;
        }
        if ('marketIds' in json) {
            this.marketIds = json.marketIds;
        }
        if ('venues' in json) {
            this.venues = json.venues;
        }
        if ('bspOnly' in json) {
            this.bspOnly = json.bspOnly;
        }
        if ('turnInPlayEnabled' in json) {
            this.turnInPlayEnabled = json.turnInPlayEnabled;
        }
        if ('inPlayOnly' in json) {
            this.inPlayOnly = json.inPlayOnly;
        }
        if ('marketBettingTypes' in json) {
            this.marketBettingTypes = json.marketBettingTypes;
        }
        if ('marketCountries' in json) {
            this.marketCountries = json.marketCountries;
        }
        if ('marketTypeCodes' in json) {
            this.marketTypeCodes = json.marketTypeCodes;
        }
        if ('marketStartTime' in json) {
            this.marketStartTime.fromJson(json.marketStartTime);
        }
        if ('withOrders' in json) {
            this.withOrders = json.withOrders;
        }
        if ('raceTypes' in json) {
            this.raceTypes = json.raceTypes;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.textQuery !== null) {
            json.textQuery = this.textQuery;
        }
        if (this.exchangeIds.size > 0) {
            json.exchangeIds = this.exchangeIds;
        }
        if (this.eventTypeIds.size > 0) {
            json.eventTypeIds = this.eventTypeIds;
        }
        if (this.eventIds.size > 0) {
            json.eventIds = this.eventIds;
        }
        if (this.competitionIds.size > 0) {
            json.competitionIds = this.competitionIds;
        }
        if (this.marketIds.size > 0) {
            json.marketIds = this.marketIds;
        }
        if (this.venues.size > 0) {
            json.venues = this.venues;
        }
        if (this.bspOnly !== null) {
            json.bspOnly = this.bspOnly;
        }
        if (this.turnInPlayEnabled !== null) {
            json.turnInPlayEnabled = this.turnInPlayEnabled;
        }
        if (this.inPlayOnly !== null) {
            json.inPlayOnly = this.inPlayOnly;
        }
        if (this.marketBettingTypes.size > 0) {
            json.marketBettingTypes = this.marketBettingTypes;
        }
        if (this.marketCountries.size > 0) {
            json.marketCountries = this.marketCountries;
        }
        if (this.marketTypeCodes.size > 0) {
            json.marketTypeCodes = this.marketTypeCodes;
        }
        if (this.marketStartTime.isValid()) {
            json.marketStartTime = this.marketStartTime.toJson();
        }
        if (this.withOrders.size > 0) {
            json.withOrders = this.withOrders;
        }
        if (this.raceTypes.size > 0) {
            json.raceTypes = this.raceTypes;
        }
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getTextQuery(): string {
        return this.textQuery;
    }
    public setTextQuery(textQuery: string): void {
        this.textQuery = textQuery;
    }
    public getExchangeIds(): Set<string> {
        return this.exchangeIds;
    }
    public setExchangeIds(exchangeIds: Set<string>): void {
        this.exchangeIds = exchangeIds;
    }
    public getEventTypeIds(): Set<string> {
        return this.eventTypeIds;
    }
    public setEventTypeIds(eventTypeIds: Set<string>): void {
        this.eventTypeIds = eventTypeIds;
    }
    public getEventIds(): Set<string> {
        return this.eventIds;
    }
    public setEventIds(eventIds: Set<string>): void {
        this.eventIds = eventIds;
    }
    public getCompetitionIds(): Set<string> {
        return this.competitionIds;
    }
    public setCompetitionIds(competitionIds: Set<string>): void {
        this.competitionIds = competitionIds;
    }
    public getMarketIds(): Set<string> {
        return this.marketIds;
    }
    public setMarketIds(marketIds: Set<string>): void {
        this.marketIds = marketIds;
    }
    public getVenues(): Set<string> {
        return this.venues;
    }
    public setVenues(venues: Set<string>): void {
        this.venues = venues;
    }
    public getBspOnly(): boolean | null {
        return this.bspOnly;
    }
    public setBspOnly(bspOnly: boolean | null): void {
        this.bspOnly = bspOnly;
    }
    public getTurnInPlayEnabled(): boolean | null {
        return this.turnInPlayEnabled;
    }
    public setTurnInPlayEnabled(turnInPlayEnabled: boolean | null): void {
        this.turnInPlayEnabled = turnInPlayEnabled;
    }
    public getInPlayOnly(): boolean | null {
        return this.inPlayOnly;
    }
    public setInPlayOnly(inPlayOnly: boolean | null): void {
        this.inPlayOnly = inPlayOnly;
    }
    public getMarketBettingTypes(): Set<MarketBettingType> {
        return this.marketBettingTypes;
    }
    public setMarketBettingTypes(marketBettingTypes: Set<MarketBettingType>): void {
        this.marketBettingTypes = marketBettingTypes;
    }
    public getMarketCountries(): Set<string> {
        return this.marketCountries;
    }
    public setMarketCountries(marketCountries: Set<string>): void {
        this.marketCountries = marketCountries;
    }
    public getMarketTypeCodes(): Set<string> {
        return this.marketTypeCodes;
    }
    public setMarketTypeCodes(marketTypeCodes: Set<string>): void {
        this.marketTypeCodes = marketTypeCodes;
    }
    public getMarketStartTime(): TimeRange {
        return this.marketStartTime;
    }
    public setMarketStartTime(marketStartTime: TimeRange): void {
        this.marketStartTime = marketStartTime;
    }
    public getWithOrders(): Set<OrderStatus> {
        return this.withOrders;
    }
    public setWithOrders(withOrders: Set<OrderStatus>): void {
        this.withOrders = withOrders;
    }
    public getRaceTypes(): Set<string> {
        return this.raceTypes;
    }
    public setRaceTypes(raceTypes: Set<string>): void {
        this.raceTypes = raceTypes;
    }

}
