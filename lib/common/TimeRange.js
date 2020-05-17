"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class TimeRange extends JsonMember_1.default {
    constructor(options) {
        super();
        if (options.from) {
            this.from = this.fromJson(options.from, Date);
        }
        if (options.to) {
            this.to = this.fromJson(options.to, Date);
        }
    }
    toJson() {
        const json = {};
        if (typeof this.from !== 'undefined') {
            json.from = this.from.toISOString();
        }
        if (typeof this.to !== 'undefined') {
            json.to = this.to.toISOString();
        }
        return json;
    }
    getFrom() {
        return this.from;
    }
    setFrom(from) {
        this.from = from;
    }
    getTo() {
        return this.to;
    }
    setTo(to) {
        this.to = to;
    }
}
exports.default = TimeRange;
//# sourceMappingURL=TimeRange.js.map