"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const EventResult_1 = require("../sport/EventResult");
class ListEventsResponse extends JsonResponse_1.default {
    constructor(options) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.eventResults = this.arrayFromJson(options, EventResult_1.default);
            }
        }
    }
    toJson() {
        throw new Error('not implemented');
    }
    getEventResults() {
        return this.eventResults;
    }
    setEventResults(eventResults) {
        this.eventResults = eventResults;
    }
}
exports.default = ListEventsResponse;
//# sourceMappingURL=ListEventsResponse.js.map