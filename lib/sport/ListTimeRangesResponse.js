"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const TimeRangeResult_1 = require("../sport/TimeRangeResult");
class ListTimeRangesResponse extends JsonResponse_1.default {
    constructor(options) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.timeRangeResults = this.arrayFromJson(options, TimeRangeResult_1.default);
            }
        }
    }
    toJson() {
        throw new Error('not implemented');
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