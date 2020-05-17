"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
const TimeRange_1 = require("../common/TimeRange");
const OrderBy_1 = require("../sport/enum/OrderBy");
const OrderProjection_1 = require("../sport/enum/OrderProjection");
const SortDir_1 = require("../sport/enum/SortDir");
class ListCurrentOrdersRequest extends JsonRequest_1.default {
    constructor(options) {
        super();
        this.betIds = options.betIds && this.setFromJson(options.betIds);
        this.marketIds = options.marketIds && this.setFromJson(options.marketIds);
        if (options.orderProjection) {
            this.orderProjection = this.fromJson(options.orderProjection, OrderProjection_1.default);
        }
        this.customerOrderRefs = options.customerOrderRefs && this.setFromJson(options.customerOrderRefs);
        this.customerStrategyRefs = options.customerStrategyRefs && this.setFromJson(options.customerStrategyRefs);
        this.placedDateRange = options.placedDateRange && this.fromJson(options.placedDateRange, TimeRange_1.default);
        this.dateRange = options.dateRange && this.fromJson(options.dateRange, TimeRange_1.default);
        if (options.orderBy) {
            this.orderBy = this.fromJson(options.orderBy, OrderBy_1.default);
        }
        if (options.sortDir) {
            this.sortDir = this.fromJson(options.sortDir, SortDir_1.default);
        }
        this.fromRecord = options.fromRecord;
        this.recordCount = options.recordCount;
    }
    toJson() {
        const json = {};
        if (this.betIds && this.betIds.size > 0) {
            json.betIds = this.setToJson(this.betIds);
        }
        if (this.marketIds && this.marketIds.size > 0) {
            json.marketIds = this.setToJson(this.marketIds);
        }
        if (this.orderProjection) {
            json.orderProjection = this.orderProjection.getValue();
        }
        if (this.customerOrderRefs && this.customerOrderRefs.size > 0) {
            json.customerOrderRefs = this.setToJson(this.customerOrderRefs);
        }
        if (this.customerStrategyRefs && this.customerStrategyRefs.size > 0) {
            json.customerStrategyRefs = this.setToJson(this.customerStrategyRefs);
        }
        if (this.placedDateRange) {
            json.placedDateRange = this.placedDateRange.toJson();
        }
        if (this.dateRange) {
            json.dateRange = this.dateRange.toJson();
        }
        if (this.orderBy) {
            json.orderBy = this.orderBy.getValue();
        }
        if (this.sortDir) {
            json.sortDir = this.sortDir.getValue();
        }
        if (typeof this.fromRecord !== 'undefined') {
            json.fromRecord = this.fromRecord;
        }
        if (typeof this.recordCount !== 'undefined') {
            json.recordCount = this.recordCount;
        }
        return json;
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