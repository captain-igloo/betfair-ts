"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const EventType_1 = require("../sport/EventType");
class EventTypeResult extends JsonMember_1.default {
    constructor(options) {
        super();
        this.eventType = options.eventType && this.fromJson(options.eventType, EventType_1.default);
        this.marketCount = options.marketCount;
    }
    toJson() {
        const json = {};
        if (this.eventType) {
            json.eventType = this.eventType.toJson();
        }
        if (typeof this.marketCount !== 'undefined') {
            json.marketCount = this.marketCount;
        }
        return json;
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