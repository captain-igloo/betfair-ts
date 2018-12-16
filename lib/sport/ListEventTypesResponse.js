"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const EventTypeResult_1 = require("../sport/EventTypeResult");
class ListEventTypesResponse extends JsonResponse_1.default {
    constructor(eventTypeResults = []) {
        super();
        this.eventTypeResults = eventTypeResults;
    }
    fromJson(json) {
        if (this.validateJson(json)) {
            this.eventTypeResults = json.map((eventTypeResultsJson) => {
                const element = new EventTypeResult_1.default();
                element.fromJson(eventTypeResultsJson);
                return element;
            });
        }
    }
    toJson() {
        const json = {};
        if (this.eventTypeResults.length > 0) {
            json.eventTypeResults = this.eventTypeResults.map((value) => value.toJson());
        }
        return json;
    }
    isValid() {
        return this.eventTypeResults.length > 0;
    }
    getEventTypeResults() {
        return this.eventTypeResults;
    }
    setEventTypeResults(eventTypeResults) {
        this.eventTypeResults = eventTypeResults;
    }
}
exports.default = ListEventTypesResponse;
