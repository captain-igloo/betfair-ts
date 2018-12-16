"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const MarketDescription_1 = require("../sport/MarketDescription");
const RunnerCatalog_1 = require("../sport/RunnerCatalog");
const EventType_1 = require("../sport/EventType");
const Competition_1 = require("../sport/Competition");
const Event_1 = require("../sport/Event");
class MarketCatalogue extends JsonMember_1.default {
    constructor(marketId = '', marketName = '', marketStartTime = null, description = new MarketDescription_1.default(), totalMatched = null, runners = [], eventType = new EventType_1.default(), competition = new Competition_1.default(), event = new Event_1.default()) {
        super();
        this.marketId = marketId;
        this.marketName = marketName;
        this.marketStartTime = marketStartTime;
        this.description = description;
        this.totalMatched = totalMatched;
        this.runners = runners;
        this.eventType = eventType;
        this.competition = competition;
        this.event = event;
    }
    fromJson(json) {
        if ('marketId' in json) {
            this.marketId = json.marketId;
        }
        if ('marketName' in json) {
            this.marketName = json.marketName;
        }
        if ('marketStartTime' in json) {
            this.marketStartTime = new Date(json.marketStartTime);
        }
        if ('description' in json) {
            this.description.fromJson(json.description);
        }
        if ('totalMatched' in json) {
            this.totalMatched = json.totalMatched;
        }
        if ('runners' in json) {
            this.runners = json.runners.map((runnersJson) => {
                const element = new RunnerCatalog_1.default();
                element.fromJson(runnersJson);
                return element;
            });
        }
        if ('eventType' in json) {
            this.eventType.fromJson(json.eventType);
        }
        if ('competition' in json) {
            this.competition.fromJson(json.competition);
        }
        if ('event' in json) {
            this.event.fromJson(json.event);
        }
    }
    toJson() {
        const json = {};
        if (this.marketId !== null) {
            json.marketId = this.marketId;
        }
        if (this.marketName !== null) {
            json.marketName = this.marketName;
        }
        if (this.marketStartTime !== null) {
            json.marketStartTime = this.marketStartTime.toISOString();
        }
        if (this.description.isValid()) {
            json.description = this.description.toJson();
        }
        if (this.totalMatched !== null) {
            json.totalMatched = this.totalMatched;
        }
        if (this.runners.length > 0) {
            json.runners = this.runners.map((value) => value.toJson());
        }
        if (this.eventType.isValid()) {
            json.eventType = this.eventType.toJson();
        }
        if (this.competition.isValid()) {
            json.competition = this.competition.toJson();
        }
        if (this.event.isValid()) {
            json.event = this.event.toJson();
        }
        return json;
    }
    isValid() {
        return this.marketId !== null &&
            this.marketName !== null;
    }
    getMarketId() {
        return this.marketId;
    }
    setMarketId(marketId) {
        this.marketId = marketId;
    }
    getMarketName() {
        return this.marketName;
    }
    setMarketName(marketName) {
        this.marketName = marketName;
    }
    getMarketStartTime() {
        return this.marketStartTime;
    }
    setMarketStartTime(marketStartTime) {
        this.marketStartTime = marketStartTime;
    }
    getDescription() {
        return this.description;
    }
    setDescription(description) {
        this.description = description;
    }
    getTotalMatched() {
        return this.totalMatched;
    }
    setTotalMatched(totalMatched) {
        this.totalMatched = totalMatched;
    }
    getRunners() {
        return this.runners;
    }
    setRunners(runners) {
        this.runners = runners;
    }
    getEventType() {
        return this.eventType;
    }
    setEventType(eventType) {
        this.eventType = eventType;
    }
    getCompetition() {
        return this.competition;
    }
    setCompetition(competition) {
        this.competition = competition;
    }
    getEvent() {
        return this.event;
    }
    setEvent(event) {
        this.event = event;
    }
}
exports.default = MarketCatalogue;
