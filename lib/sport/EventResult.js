"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const Event_1 = require("../sport/Event");
class EventResult extends JsonMember_1.default {
    constructor(options) {
        super();
        this.event = options.event && this.fromJson(options.event, Event_1.default);
        this.marketCount = options.marketCount;
    }
    toJson() {
        const json = {};
        if (this.event) {
            json.event = this.event.toJson();
        }
        if (typeof this.marketCount !== 'undefined') {
            json.marketCount = this.marketCount;
        }
        return json;
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
//# sourceMappingURL=EventResult.js.map