"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const MarketGroupId_1 = require("../sport/MarketGroupId");
const ExposureLimit_1 = require("../sport/ExposureLimit");
class MarketGroupExposureLimit extends JsonMember_1.default {
    constructor(groupId = new MarketGroupId_1.default(), limit = new ExposureLimit_1.default()) {
        super();
        this.groupId = groupId;
        this.limit = limit;
    }
    fromJson(json) {
        if ('groupId' in json) {
            this.groupId.fromJson(json.groupId);
        }
        if ('limit' in json) {
            this.limit.fromJson(json.limit);
        }
    }
    toJson() {
        const json = {};
        if (this.groupId.isValid()) {
            json.groupId = this.groupId.toJson();
        }
        if (this.limit.isValid()) {
            json.limit = this.limit.toJson();
        }
        return json;
    }
    isValid() {
        return this.groupId.isValid() &&
            this.limit.isValid();
    }
    getGroupId() {
        return this.groupId;
    }
    setGroupId(groupId) {
        this.groupId = groupId;
    }
    getLimit() {
        return this.limit;
    }
    setLimit(limit) {
        this.limit = limit;
    }
}
exports.default = MarketGroupExposureLimit;
