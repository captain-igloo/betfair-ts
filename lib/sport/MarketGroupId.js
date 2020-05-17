"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class MarketGroupId extends JsonMember_1.default {
    constructor(options) {
        super();
        this.eventId = options.eventId;
    }
    toJson() {
        const json = {};
        if (typeof this.eventId !== 'undefined') {
            json.eventId = this.eventId;
        }
        return json;
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