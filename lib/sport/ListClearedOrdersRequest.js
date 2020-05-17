"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
const TimeRange_1 = require("../common/TimeRange");
const BetStatus_1 = require("../sport/enum/BetStatus");
const GroupBy_1 = require("../sport/enum/GroupBy");
const Side_1 = require("../sport/enum/Side");
const RunnerId_1 = require("../sport/RunnerId");
class ListClearedOrdersRequest extends JsonRequest_1.default {
    constructor(options) {
        super();
        this.betStatus = this.fromJson(options.betStatus, BetStatus_1.default);
        this.eventTypeIds = options.eventTypeIds && this.setFromJson(options.eventTypeIds);
        this.eventIds = options.eventIds && this.setFromJson(options.eventIds);
        this.marketIds = options.marketIds && this.setFromJson(options.marketIds);
        if (options.runnerIds) {
            this.runnerIds = this.arrayFromJson(options.runnerIds, RunnerId_1.default);
        }
        this.betIds = options.betIds && this.setFromJson(options.betIds);
        this.customerOrderRefs = options.customerOrderRefs && this.setFromJson(options.customerOrderRefs);
        this.customerStrategyRefs = options.customerStrategyRefs && this.setFromJson(options.customerStrategyRefs);
        if (options.side) {
            this.side = this.fromJson(options.side, Side_1.default);
        }
        this.settledDateRange = options.settledDateRange && this.fromJson(options.settledDateRange, TimeRange_1.default);
        if (options.groupBy) {
            this.groupBy = this.fromJson(options.groupBy, GroupBy_1.default);
        }
        this.includeItemDescription = options.includeItemDescription;
        this.locale = options.locale;
        this.fromRecord = options.fromRecord;
        this.recordCount = options.recordCount;
    }
    toJson() {
        const json = {
            betStatus: this.betStatus.getValue(),
        };
        if (this.eventTypeIds && this.eventTypeIds.size > 0) {
            json.eventTypeIds = this.setToJson(this.eventTypeIds);
        }
        if (this.eventIds && this.eventIds.size > 0) {
            json.eventIds = this.setToJson(this.eventIds);
        }
        if (this.marketIds && this.marketIds.size > 0) {
            json.marketIds = this.setToJson(this.marketIds);
        }
        if (this.runnerIds && this.runnerIds.length > 0) {
            json.runnerIds = this.runnerIds.map((value) => value.toJson());
        }
        if (this.betIds && this.betIds.size > 0) {
            json.betIds = this.setToJson(this.betIds);
        }
        if (this.customerOrderRefs && this.customerOrderRefs.size > 0) {
            json.customerOrderRefs = this.setToJson(this.customerOrderRefs);
        }
        if (this.customerStrategyRefs && this.customerStrategyRefs.size > 0) {
            json.customerStrategyRefs = this.setToJson(this.customerStrategyRefs);
        }
        if (this.side) {
            json.side = this.side.getValue();
        }
        if (this.settledDateRange) {
            json.settledDateRange = this.settledDateRange.toJson();
        }
        if (this.groupBy) {
            json.groupBy = this.groupBy.getValue();
        }
        if (typeof this.includeItemDescription !== 'undefined') {
            json.includeItemDescription = this.includeItemDescription;
        }
        if (typeof this.locale !== 'undefined') {
            json.locale = this.locale;
        }
        if (typeof this.fromRecord !== 'undefined') {
            json.fromRecord = this.fromRecord;
        }
        if (typeof this.recordCount !== 'undefined') {
            json.recordCount = this.recordCount;
        }
        return json;
    }
    getBetStatus() {
        return this.betStatus;
    }
    setBetStatus(betStatus) {
        this.betStatus = betStatus;
    }
    getEventTypeIds() {
        return this.eventTypeIds;
    }
    setEventTypeIds(eventTypeIds) {
        this.eventTypeIds = eventTypeIds;
    }
    getEventIds() {
        return this.eventIds;
    }
    setEventIds(eventIds) {
        this.eventIds = eventIds;
    }
    getMarketIds() {
        return this.marketIds;
    }
    setMarketIds(marketIds) {
        this.marketIds = marketIds;
    }
    getRunnerIds() {
        return this.runnerIds;
    }
    setRunnerIds(runnerIds) {
        this.runnerIds = runnerIds;
    }
    getBetIds() {
        return this.betIds;
    }
    setBetIds(betIds) {
        this.betIds = betIds;
    }
    getCustomerOrderRefs() {
        return this.customerOrderRefs;
    }
    setCustomerOrderRefs(customerOrderRefs) {
        this.customerOrderRefs = customerOrderRefs;
    }
    getCustomerStrategyRefs() {
        return this.customerStrategyRefs;
    }
    setCustomerStrategyRefs(customerStrategyRefs) {
        this.customerStrategyRefs = customerStrategyRefs;
    }
    getSide() {
        return this.side;
    }
    setSide(side) {
        this.side = side;
    }
    getSettledDateRange() {
        return this.settledDateRange;
    }
    setSettledDateRange(settledDateRange) {
        this.settledDateRange = settledDateRange;
    }
    getGroupBy() {
        return this.groupBy;
    }
    setGroupBy(groupBy) {
        this.groupBy = groupBy;
    }
    getIncludeItemDescription() {
        return this.includeItemDescription;
    }
    setIncludeItemDescription(includeItemDescription) {
        this.includeItemDescription = includeItemDescription;
    }
    getLocale() {
        return this.locale;
    }
    setLocale(locale) {
        this.locale = locale;
    }
    getFromRecord() {
        return this.fromRecord;
    }
    setFromRecord(fromRecord) {
        this.fromRecord = fromRecord;
    }
    getRecordCount() {
        return this.recordCount;
    }
    setRecordCount(recordCount) {
        this.recordCount = recordCount;
    }
}
exports.default = ListClearedOrdersRequest;
//# sourceMappingURL=ListClearedOrdersRequest.js.map