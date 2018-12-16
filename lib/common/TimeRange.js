"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class TimeRange extends JsonMember_1.default {
    constructor(from = null, to = null) {
        super();
        this.from = from;
        this.to = to;
    }
    fromJson(json) {
        if ('from' in json) {
            this.from = new Date(json.from);
        }
        if ('to' in json) {
            this.to = new Date(json.to);
        }
    }
    toJson() {
        const json = {};
        if (this.from !== null) {
            json.from = this.from.toISOString();
        }
        if (this.to !== null) {
            json.to = this.to.toISOString();
        }
        return json;
    }
    isValid() {
        return true;
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
