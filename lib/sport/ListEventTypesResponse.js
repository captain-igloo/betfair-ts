"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const EventTypeResult_1 = require("../sport/EventTypeResult");
class ListEventTypesResponse extends JsonResponse_1.default {
    constructor(options) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.eventTypeResults = this.arrayFromJson(options, EventTypeResult_1.default);
            }
        }
    }
    toJson() {
        throw new Error('not implemented');
    }
    getEventTypeResults() {
        return this.eventTypeResults;
    }
    setEventTypeResults(eventTypeResults) {
        this.eventTypeResults = eventTypeResults;
    }
}
exports.default = ListEventTypesResponse;
//# sourceMappingURL=ListEventTypesResponse.js.map