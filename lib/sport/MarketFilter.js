"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const TimeRange_1 = require("../common/TimeRange");
class MarketFilter extends JsonMember_1.default {
    constructor(textQuery = '', exchangeIds = new Set(), eventTypeIds = new Set(), eventIds = new Set(), competitionIds = new Set(), marketIds = new Set(), venues = new Set(), bspOnly = null, turnInPlayEnabled = null, inPlayOnly = null, marketBettingTypes = new Set(), marketCountries = new Set(), marketTypeCodes = new Set(), marketStartTime = new TimeRange_1.default(), withOrders = new Set(), raceTypes = new Set()) {
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
    fromJson(json) {
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
    toJson() {
        const json = {};
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
    isValid() {
        return true;
    }
    getTextQuery() {
        return this.textQuery;
    }
    setTextQuery(textQuery) {
        this.textQuery = textQuery;
    }
    getExchangeIds() {
        return this.exchangeIds;
    }
    setExchangeIds(exchangeIds) {
        this.exchangeIds = exchangeIds;
    }
    getEventTypeIds() {
        return this.eventTypeIds;
    }
    setEventTypeIds(eventTypeIds) {
        this.eventTypeIds = eventTypeIds;
    }
    getEventIds() {
        return this.eventIds;
    }
    setEventIds(eventIds) {
        this.eventIds = eventIds;
    }
    getCompetitionIds() {
        return this.competitionIds;
    }
    setCompetitionIds(competitionIds) {
        this.competitionIds = competitionIds;
    }
    getMarketIds() {
        return this.marketIds;
    }
    setMarketIds(marketIds) {
        this.marketIds = marketIds;
    }
    getVenues() {
        return this.venues;
    }
    setVenues(venues) {
        this.venues = venues;
    }
    getBspOnly() {
        return this.bspOnly;
    }
    setBspOnly(bspOnly) {
        this.bspOnly = bspOnly;
    }
    getTurnInPlayEnabled() {
        return this.turnInPlayEnabled;
    }
    setTurnInPlayEnabled(turnInPlayEnabled) {
        this.turnInPlayEnabled = turnInPlayEnabled;
    }
    getInPlayOnly() {
        return this.inPlayOnly;
    }
    setInPlayOnly(inPlayOnly) {
        this.inPlayOnly = inPlayOnly;
    }
    getMarketBettingTypes() {
        return this.marketBettingTypes;
    }
    setMarketBettingTypes(marketBettingTypes) {
        this.marketBettingTypes = marketBettingTypes;
    }
    getMarketCountries() {
        return this.marketCountries;
    }
    setMarketCountries(marketCountries) {
        this.marketCountries = marketCountries;
    }
    getMarketTypeCodes() {
        return this.marketTypeCodes;
    }
    setMarketTypeCodes(marketTypeCodes) {
        this.marketTypeCodes = marketTypeCodes;
    }
    getMarketStartTime() {
        return this.marketStartTime;
    }
    setMarketStartTime(marketStartTime) {
        this.marketStartTime = marketStartTime;
    }
    getWithOrders() {
        return this.withOrders;
    }
    setWithOrders(withOrders) {
        this.withOrders = withOrders;
    }
    getRaceTypes() {
        return this.raceTypes;
    }
    setRaceTypes(raceTypes) {
        this.raceTypes = raceTypes;
    }
}
exports.default = MarketFilter;
