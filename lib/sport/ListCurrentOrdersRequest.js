"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const TimeRange_1 = require("../common/TimeRange");
const JsonRequest_1 = require("../JsonRequest");
const OrderBy_1 = require("../sport/enum/OrderBy");
const OrderProjection_1 = require("../sport/enum/OrderProjection");
const SortDir_1 = require("../sport/enum/SortDir");
class ListCurrentOrdersRequest extends JsonRequest_1.default {
    constructor(betIds = new Set(), marketIds = new Set(), orderProjection = new OrderProjection_1.default(), customerOrderRefs = new Set(), customerStrategyRefs = new Set(), placedDateRange = new TimeRange_1.default(), dateRange = new TimeRange_1.default(), orderBy = new OrderBy_1.default(), sortDir = new SortDir_1.default(), fromRecord = null, recordCount = null) {
        super();
        this.betIds = betIds;
        this.marketIds = marketIds;
        this.orderProjection = orderProjection;
        this.customerOrderRefs = customerOrderRefs;
        this.customerStrategyRefs = customerStrategyRefs;
        this.placedDateRange = placedDateRange;
        this.dateRange = dateRange;
        this.orderBy = orderBy;
        this.sortDir = sortDir;
        this.fromRecord = fromRecord;
        this.recordCount = recordCount;
    }
    fromJson(json) {
        if ('betIds' in json) {
            this.betIds = json.betIds;
        }
        if ('marketIds' in json) {
            this.marketIds = json.marketIds;
        }
        if ('orderProjection' in json) {
            this.orderProjection.setValue(json.orderProjection);
        }
        if ('customerOrderRefs' in json) {
            this.customerOrderRefs = json.customerOrderRefs;
        }
        if ('customerStrategyRefs' in json) {
            this.customerStrategyRefs = json.customerStrategyRefs;
        }
        if ('placedDateRange' in json) {
            this.placedDateRange.fromJson(json.placedDateRange);
        }
        if ('dateRange' in json) {
            this.dateRange.fromJson(json.dateRange);
        }
        if ('orderBy' in json) {
            this.orderBy.setValue(json.orderBy);
        }
        if ('sortDir' in json) {
            this.sortDir.setValue(json.sortDir);
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
        if (this.betIds.size > 0) {
            json.betIds = this.betIds;
        }
        if (this.marketIds.size > 0) {
            json.marketIds = this.marketIds;
        }
        if (this.orderProjection.isValid()) {
            json.orderProjection = this.orderProjection;
        }
        if (this.customerOrderRefs.size > 0) {
            json.customerOrderRefs = this.customerOrderRefs;
        }
        if (this.customerStrategyRefs.size > 0) {
            json.customerStrategyRefs = this.customerStrategyRefs;
        }
        if (this.placedDateRange.isValid()) {
            json.placedDateRange = this.placedDateRange.toJson();
        }
        if (this.dateRange.isValid()) {
            json.dateRange = this.dateRange.toJson();
        }
        if (this.orderBy.isValid()) {
            json.orderBy = this.orderBy;
        }
        if (this.sortDir.isValid()) {
            json.sortDir = this.sortDir;
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
        return true;
    }
    getBetIds() {
        return this.betIds;
    }
    setBetIds(betIds) {
        this.betIds = betIds;
    }
    getMarketIds() {
        return this.marketIds;
    }
    setMarketIds(marketIds) {
        this.marketIds = marketIds;
    }
    getOrderProjection() {
        return this.orderProjection;
    }
    setOrderProjection(orderProjection) {
        this.orderProjection = orderProjection;
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
    getPlacedDateRange() {
        return this.placedDateRange;
    }
    setPlacedDateRange(placedDateRange) {
        this.placedDateRange = placedDateRange;
    }
    getDateRange() {
        return this.dateRange;
    }
    setDateRange(dateRange) {
        this.dateRange = dateRange;
    }
    getOrderBy() {
        return this.orderBy;
    }
    setOrderBy(orderBy) {
        this.orderBy = orderBy;
    }
    getSortDir() {
        return this.sortDir;
    }
    setSortDir(sortDir) {
        this.sortDir = sortDir;
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
exports.default = ListCurrentOrdersRequest;
//# sourceMappingURL=ListCurrentOrdersRequest.js.map