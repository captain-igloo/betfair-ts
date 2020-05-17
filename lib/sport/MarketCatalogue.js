"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const Competition_1 = require("../sport/Competition");
const Event_1 = require("../sport/Event");
const EventType_1 = require("../sport/EventType");
const MarketDescription_1 = require("../sport/MarketDescription");
const RunnerCatalog_1 = require("../sport/RunnerCatalog");
class MarketCatalogue extends JsonMember_1.default {
    constructor(options) {
        super();
        this.marketId = options.marketId;
        this.marketName = options.marketName;
        if (options.marketStartTime) {
            this.marketStartTime = this.fromJson(options.marketStartTime, Date);
        }
        this.description = options.description && this.fromJson(options.description, MarketDescription_1.default);
        this.totalMatched = options.totalMatched;
        if (options.runners) {
            this.runners = this.arrayFromJson(options.runners, RunnerCatalog_1.default);
        }
        this.eventType = options.eventType && this.fromJson(options.eventType, EventType_1.default);
        this.competition = options.competition && this.fromJson(options.competition, Competition_1.default);
        this.event = options.event && this.fromJson(options.event, Event_1.default);
    }
    toJson() {
        const json = {
            marketId: this.marketId,
            marketName: this.marketName,
        };
        if (typeof this.marketStartTime !== 'undefined') {
            json.marketStartTime = this.marketStartTime.toISOString();
        }
        if (this.description) {
            json.description = this.description.toJson();
        }
        if (typeof this.totalMatched !== 'undefined') {
            json.totalMatched = this.totalMatched;
        }
        if (this.runners && this.runners.length > 0) {
            json.runners = this.runners.map((value) => value.toJson());
        }
        if (this.eventType) {
            json.eventType = this.eventType.toJson();
        }
        if (this.competition) {
            json.competition = this.competition.toJson();
        }
        if (this.event) {
            json.event = this.event.toJson();
        }
        return json;
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
//# sourceMappingURL=MarketCatalogue.js.map