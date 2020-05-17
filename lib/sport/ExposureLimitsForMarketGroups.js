"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const MarketGroupType_1 = require("../sport/enum/MarketGroupType");
const ExposureLimit_1 = require("../sport/ExposureLimit");
const MarketGroupExposureLimit_1 = require("../sport/MarketGroupExposureLimit");
const MarketGroupId_1 = require("../sport/MarketGroupId");
class ExposureLimitsForMarketGroups extends JsonMember_1.default {
    constructor(options) {
        super();
        this.marketGroupType = this.fromJson(options.marketGroupType, MarketGroupType_1.default);
        this.defaultLimit = options.defaultLimit && this.fromJson(options.defaultLimit, ExposureLimit_1.default);
        if (options.groupLimits) {
            this.groupLimits = this.arrayFromJson(options.groupLimits, MarketGroupExposureLimit_1.default);
        }
        if (options.blockedMarketGroups) {
            this.blockedMarketGroups = this.arrayFromJson(options.blockedMarketGroups, MarketGroupId_1.default);
        }
    }
    toJson() {
        const json = {
            marketGroupType: this.marketGroupType.getValue(),
        };
        if (this.defaultLimit) {
            json.defaultLimit = this.defaultLimit.toJson();
        }
        if (this.groupLimits && this.groupLimits.length > 0) {
            json.groupLimits = this.groupLimits.map((value) => value.toJson());
        }
        if (this.blockedMarketGroups && this.blockedMarketGroups.length > 0) {
            json.blockedMarketGroups = this.blockedMarketGroups.map((value) => value.toJson());
        }
        return json;
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