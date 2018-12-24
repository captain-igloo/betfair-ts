"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const TimeRangeResult_1 = require("../sport/TimeRangeResult");
class ListTimeRangesResponse extends JsonResponse_1.default {
    constructor(timeRangeResults = []) {
        super();
        this.timeRangeResults = timeRangeResults;
    }
    fromJson(json) {
        if (this.validateJson(json)) {
            this.timeRangeResults = json.map((timeRangeResultsJson) => {
                const element = new TimeRangeResult_1.default();
                element.fromJson(timeRangeResultsJson);
                return element;
            });
        }
    }
    toJson() {
        const json = {};
        if (this.timeRangeResults.length > 0) {
            json.timeRangeResults = this.timeRangeResults.map((value) => value.toJson());
        }
        return json;
    }
    isValid() {
        return this.timeRangeResults.length > 0;
    }
    getTimeRangeResults() {
        return this.timeRangeResults;
    }
    setTimeRangeResults(timeRangeResults) {
        this.timeRangeResults = timeRangeResults;
    }
}
exports.default = ListTimeRangesResponse;
//# sourceMappingURL=ListTimeRangesResponse.js.map