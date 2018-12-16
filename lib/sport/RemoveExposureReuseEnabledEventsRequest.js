"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
class RemoveExposureReuseEnabledEventsRequest extends JsonRequest_1.default {
    constructor(eventIds = []) {
        super();
        this.eventIds = eventIds;
    }
    fromJson(json) {
        if ('eventIds' in json) {
            this.eventIds = json.eventIds;
        }
    }
    toJson() {
        const json = {};
        if (this.eventIds.length > 0) {
            json.eventIds = this.eventIds;
        }
        return json;
    }
    isValid() {
        return this.eventIds.length > 0;
    }
    getEventIds() {
        return this.eventIds;
    }
    setEventIds(eventIds) {
        this.eventIds = eventIds;
    }
}
exports.default = RemoveExposureReuseEnabledEventsRequest;
