"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const MarketGroupType_1 = require("../sport/enum/MarketGroupType");
const ExposureLimit_1 = require("../sport/ExposureLimit");
const MarketGroupExposureLimit_1 = require("../sport/MarketGroupExposureLimit");
const MarketGroupId_1 = require("../sport/MarketGroupId");
class ExposureLimitsForMarketGroups extends JsonMember_1.default {
    constructor(marketGroupType = new MarketGroupType_1.default(), defaultLimit = new ExposureLimit_1.default(), groupLimits = [], blockedMarketGroups = []) {
        super();
        this.marketGroupType = marketGroupType;
        this.defaultLimit = defaultLimit;
        this.groupLimits = groupLimits;
        this.blockedMarketGroups = blockedMarketGroups;
    }
    fromJson(json) {
        if ('marketGroupType' in json) {
            this.marketGroupType.setValue(json.marketGroupType);
        }
        if ('defaultLimit' in json) {
            this.defaultLimit.fromJson(json.defaultLimit);
        }
        if ('groupLimits' in json) {
            this.groupLimits = json.groupLimits.map((groupLimitsJson) => {
                const element = new MarketGroupExposureLimit_1.default();
                element.fromJson(groupLimitsJson);
                return element;
            });
        }
        if ('blockedMarketGroups' in json) {
            this.blockedMarketGroups = json.blockedMarketGroups.map((blockedMarketGroupsJson) => {
                const element = new MarketGroupId_1.default();
                element.fromJson(blockedMarketGroupsJson);
                return element;
            });
        }
    }
    toJson() {
        const json = {};
        if (this.marketGroupType.isValid()) {
            json.marketGroupType = this.marketGroupType.getValue();
        }
        if (this.defaultLimit.isValid()) {
            json.defaultLimit = this.defaultLimit.toJson();
        }
        if (this.groupLimits.length > 0) {
            json.groupLimits = this.groupLimits.map((value) => value.toJson());
        }
        if (this.blockedMarketGroups.length > 0) {
            json.blockedMarketGroups = this.blockedMarketGroups.map((value) => value.toJson());
        }
        return json;
    }
    isValid() {
        return this.marketGroupType.isValid();
    }
    getMarketGroupType() {
        return this.marketGroupType;
    }
    setMarketGroupType(marketGroupType) {
        this.marketGroupType = marketGroupType;
    }
    getDefaultLimit() {
        return this.defaultLimit;
    }
    setDefaultLimit(defaultLimit) {
        this.defaultLimit = defaultLimit;
    }
    getGroupLimits() {
        return this.groupLimits;
    }
    setGroupLimits(groupLimits) {
        this.groupLimits = groupLimits;
    }
    getBlockedMarketGroups() {
        return this.blockedMarketGroups;
    }
    setBlockedMarketGroups(blockedMarketGroups) {
        this.blockedMarketGroups = blockedMarketGroups;
    }
}
exports.default = ExposureLimitsForMarketGroups;
//# sourceMappingURL=ExposureLimitsForMarketGroups.js.map