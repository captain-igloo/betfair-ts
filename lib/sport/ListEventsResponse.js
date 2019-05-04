"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const EventResult_1 = require("../sport/EventResult");
class ListEventsResponse extends JsonResponse_1.default {
    constructor(eventResults = []) {
        super();
        this.eventResults = eventResults;
    }
    fromJson(json) {
        if (this.validateJson(json)) {
            this.eventResults = json.map((eventResultsJson) => {
                const element = new EventResult_1.default();
                element.fromJson(eventResultsJson);
                return element;
            });
        }
    }
    toJson() {
        let json = {};
        if (this.eventResults.length > 0) {
            json.eventResults = this.eventResults.map((value) => value.toJson());
        }
        return json;
    }
    isValid() {
        return this.eventResults.length > 0;
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