"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const Event_1 = require("../sport/Event");
class EventResult extends JsonMember_1.default {
    constructor(event = new Event_1.default(), marketCount = null) {
        super();
        this.event = event;
        this.marketCount = marketCount;
    }
    fromJson(json) {
        if ('event' in json) {
            this.event.fromJson(json.event);
        }
        if ('marketCount' in json) {
            this.marketCount = json.marketCount;
        }
    }
    toJson() {
        const json = {};
        if (this.event.isValid()) {
            json.event = this.event.toJson();
        }
        if (this.marketCount !== null) {
            json.marketCount = this.marketCount;
        }
        return json;
    }
    isValid() {
        return true;
    }
    getEvent() {
        return this.event;
    }
    setEvent(event) {
        this.event = event;
    }
    getMarketCount() {
        return this.marketCount;
    }
    setMarketCount(marketCount) {
        this.marketCount = marketCount;
    }
}
exports.default = EventResult;
