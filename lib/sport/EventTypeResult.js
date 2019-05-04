"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const EventType_1 = require("../sport/EventType");
class EventTypeResult extends JsonMember_1.default {
    constructor(eventType = new EventType_1.default(), marketCount = null) {
        super();
        this.eventType = eventType;
        this.marketCount = marketCount;
    }
    fromJson(json) {
        if ('eventType' in json) {
            this.eventType.fromJson(json.eventType);
        }
        if ('marketCount' in json) {
            this.marketCount = json.marketCount;
        }
    }
    toJson() {
        const json = {};
        if (this.eventType.isValid()) {
            json.eventType = this.eventType.toJson();
        }
        if (this.marketCount !== null) {
            json.marketCount = this.marketCount;
        }
        return json;
    }
    isValid() {
        return true;
    }
    getEventType() {
        return this.eventType;
    }
    setEventType(eventType) {
        this.eventType = eventType;
    }
    getMarketCount() {
        return this.marketCount;
    }
    setMarketCount(marketCount) {
        this.marketCount = marketCount;
    }
}
exports.default = EventTypeResult;
//# sourceMappingURL=EventTypeResult.js.map