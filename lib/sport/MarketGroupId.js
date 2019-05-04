"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class MarketGroupId extends JsonMember_1.default {
    constructor(eventId = null) {
        super();
        this.eventId = eventId;
    }
    fromJson(json) {
        if ('eventId' in json) {
            this.eventId = json.eventId;
        }
    }
    toJson() {
        const json = {};
        if (this.eventId !== null) {
            json.eventId = this.eventId;
        }
        return json;
    }
    isValid() {
        return true;
    }
    getEventId() {
        return this.eventId;
    }
    setEventId(eventId) {
        this.eventId = eventId;
    }
}
exports.default = MarketGroupId;
//# sourceMappingURL=MarketGroupId.js.map