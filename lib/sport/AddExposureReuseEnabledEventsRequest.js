"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
class AddExposureReuseEnabledEventsRequest extends JsonRequest_1.default {
    constructor(options) {
        super();
        this.eventIds = options.eventIds;
    }
    toJson() {
        const json = {
            eventIds: this.eventIds,
        };
        return json;
    }
    getEventIds() {
        return this.eventIds;
    }
    setEventIds(eventIds) {
        this.eventIds = eventIds;
    }
}
exports.default = AddExposureReuseEnabledEventsRequest;
//# sourceMappingURL=AddExposureReuseEnabledEventsRequest.js.map