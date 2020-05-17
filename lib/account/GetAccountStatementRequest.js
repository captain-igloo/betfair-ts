"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
const IncludeItem_1 = require("../account/enum/IncludeItem");
const Wallet_1 = require("../account/enum/Wallet");
const TimeRange_1 = require("../common/TimeRange");
class GetAccountStatementRequest extends JsonRequest_1.default {
    constructor(options) {
        super();
        this.locale = options.locale;
        this.fromRecord = options.fromRecord;
        this.recordCount = options.recordCount;
        this.itemDateRange = options.itemDateRange && this.fromJson(options.itemDateRange, TimeRange_1.default);
        if (options.includeItem) {
            this.includeItem = this.fromJson(options.includeItem, IncludeItem_1.default);
        }
        if (options.wallet) {
            this.wallet = this.fromJson(options.wallet, Wallet_1.default);
        }
    }
    toJson() {
        const json = {};
        if (typeof this.locale !== 'undefined') {
            json.locale = this.locale;
        }
        if (typeof this.fromRecord !== 'undefined') {
            json.fromRecord = this.fromRecord;
        }
        if (typeof this.recordCount !== 'undefined') {
            json.recordCount = this.recordCount;
        }
        if (this.itemDateRange) {
            json.itemDateRange = this.itemDateRange.toJson();
        }
        if (this.includeItem) {
            json.includeItem = this.includeItem.getValue();
        }
        if (this.wallet) {
            json.wallet = this.wallet.getValue();
        }
        return json;
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
    getItemDateRange() {
        return this.itemDateRange;
    }
    setItemDateRange(itemDateRange) {
        this.itemDateRange = itemDateRange;
    }
    getIncludeItem() {
        return this.includeItem;
    }
    setIncludeItem(includeItem) {
        this.includeItem = includeItem;
    }
    getWallet() {
        return this.wallet;
    }
    setWallet(wallet) {
        this.wallet = wallet;
    }
}
exports.default = GetAccountStatementRequest;
//# sourceMappingURL=GetAccountStatementRequest.js.map