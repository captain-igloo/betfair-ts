"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const TimeRange_1 = require("../common/TimeRange");
const JsonRequest_1 = require("../JsonRequest");
const BetStatus_1 = require("../sport/enum/BetStatus");
const GroupBy_1 = require("../sport/enum/GroupBy");
const Side_1 = require("../sport/enum/Side");
const RunnerId_1 = require("../sport/RunnerId");
class ListClearedOrdersRequest extends JsonRequest_1.default {
    constructor(betStatus = new BetStatus_1.default(), eventTypeIds = new Set(), eventIds = new Set(), marketIds = new Set(), runnerIds = [], betIds = new Set(), customerOrderRefs = new Set(), customerStrategyRefs = new Set(), side = new Side_1.default(), settledDateRange = new TimeRange_1.default(), groupBy = new GroupBy_1.default(), includeItemDescription = null, locale = '', fromRecord = null, recordCount = null) {
        super();
        this.betStatus = betStatus;
        this.eventTypeIds = eventTypeIds;
        this.eventIds = eventIds;
        this.marketIds = marketIds;
        this.runnerIds = runnerIds;
        this.betIds = betIds;
        this.customerOrderRefs = customerOrderRefs;
        this.customerStrategyRefs = customerStrategyRefs;
        this.side = side;
        this.settledDateRange = settledDateRange;
        this.groupBy = groupBy;
        this.includeItemDescription = includeItemDescription;
        this.locale = locale;
        this.fromRecord = fromRecord;
        this.recordCount = recordCount;
    }
    fromJson(json) {
        if ('betStatus' in json) {
            this.betStatus.setValue(json.betStatus);
        }
        if ('eventTypeIds' in json) {
            this.eventTypeIds = json.eventTypeIds;
        }
        if ('eventIds' in json) {
            this.eventIds = json.eventIds;
        }
        if ('marketIds' in json) {
            this.marketIds = json.marketIds;
        }
        if ('runnerIds' in json) {
            this.runnerIds = json.runnerIds.map((runnerIdsJson) => {
                const element = new RunnerId_1.default();
                element.fromJson(runnerIdsJson);
                return element;
            });
        }
        if ('betIds' in json) {
            this.betIds = json.betIds;
        }
        if ('customerOrderRefs' in json) {
            this.customerOrderRefs = json.customerOrderRefs;
        }
        if ('customerStrategyRefs' in json) {
            this.customerStrategyRefs = json.customerStrategyRefs;
        }
        if ('side' in json) {
            this.side.setValue(json.side);
        }
        if ('settledDateRange' in json) {
            this.settledDateRange.fromJson(json.settledDateRange);
        }
        if ('groupBy' in json) {
            this.groupBy.setValue(json.groupBy);
        }
        if ('includeItemDescription' in json) {
            this.includeItemDescription = json.includeItemDescription;
        }
        if ('locale' in json) {
            this.locale = json.locale;
        }
        if ('fromRecord' in json) {
            this.fromRecord = json.fromRecord;
        }
        if ('recordCount' in json) {
            this.recordCount = json.recordCount;
        }
    }
    toJson() {
        const json = {};
        if (this.betStatus.isValid()) {
            json.betStatus = this.betStatus;
        }
        if (this.eventTypeIds.size > 0) {
            json.eventTypeIds = this.eventTypeIds;
        }
        if (this.eventIds.size > 0) {
            json.eventIds = this.eventIds;
        }
        if (this.marketIds.size > 0) {
            json.marketIds = this.marketIds;
        }
        if (this.runnerIds.length > 0) {
            json.runnerIds = this.runnerIds.map((value) => value.toJson());
        }
        if (this.betIds.size > 0) {
            json.betIds = this.betIds;
        }
        if (this.customerOrderRefs.size > 0) {
            json.customerOrderRefs = this.customerOrderRefs;
        }
        if (this.customerStrategyRefs.size > 0) {
            json.customerStrategyRefs = this.customerStrategyRefs;
        }
        if (this.side.isValid()) {
            json.side = this.side;
        }
        if (this.settledDateRange.isValid()) {
            json.settledDateRange = this.settledDateRange.toJson();
        }
        if (this.groupBy.isValid()) {
            json.groupBy = this.groupBy;
        }
        if (this.includeItemDescription !== null) {
            json.includeItemDescription = this.includeItemDescription;
        }
        if (this.locale !== null) {
            json.locale = this.locale;
        }
        if (this.fromRecord !== null) {
            json.fromRecord = this.fromRecord;
        }
        if (this.recordCount !== null) {
            json.recordCount = this.recordCount;
        }
        return json;
    }
    isValid() {
        return this.betStatus.isValid();
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