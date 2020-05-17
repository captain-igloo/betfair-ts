"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const ExposureLimit_1 = require("../sport/ExposureLimit");
const MarketGroupId_1 = require("../sport/MarketGroupId");
class MarketGroupExposureLimit extends JsonMember_1.default {
    constructor(options) {
        super();
        this.groupId = this.fromJson(options.groupId, MarketGroupId_1.default);
        this.limit = this.fromJson(options.limit, ExposureLimit_1.default);
    }
    toJson() {
        const json = {
            groupId: this.groupId.toJson(),
            limit: this.limit.toJson(),
        };
        return json;
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
//# sourceMappingURL=MarketGroupExposureLimit.js.map