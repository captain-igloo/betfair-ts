"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const IncludeItem_1 = require("../account/enum/IncludeItem");
const Wallet_1 = require("../account/enum/Wallet");
const TimeRange_1 = require("../common/TimeRange");
const JsonRequest_1 = require("../JsonRequest");
class GetAccountStatementRequest extends JsonRequest_1.default {
    constructor(locale = '', fromRecord = null, recordCount = null, itemDateRange = new TimeRange_1.default(), includeItem = new IncludeItem_1.default(), wallet = new Wallet_1.default()) {
        super();
        this.locale = locale;
        this.fromRecord = fromRecord;
        this.recordCount = recordCount;
        this.itemDateRange = itemDateRange;
        this.includeItem = includeItem;
        this.wallet = wallet;
    }
    fromJson(json) {
        if ('locale' in json) {
            this.locale = json.locale;
        }
        if ('fromRecord' in json) {
            this.fromRecord = json.fromRecord;
        }
        if ('recordCount' in json) {
            this.recordCount = json.recordCount;
        }
        if ('itemDateRange' in json) {
            this.itemDateRange.fromJson(json.itemDateRange);
        }
        if ('includeItem' in json) {
            this.includeItem.setValue(json.includeItem);
        }
        if ('wallet' in json) {
            this.wallet.setValue(json.wallet);
        }
    }
    toJson() {
        const json = {};
        if (this.locale !== null) {
            json.locale = this.locale;
        }
        if (this.fromRecord !== null) {
            json.fromRecord = this.fromRecord;
        }
        if (this.recordCount !== null) {
            json.recordCount = this.recordCount;
        }
        if (this.itemDateRange.isValid()) {
            json.itemDateRange = this.itemDateRange.toJson();
        }
        if (this.includeItem.isValid()) {
            json.includeItem = this.includeItem;
        }
        if (this.wallet.isValid()) {
            json.wallet = this.wallet;
        }
        return json;
    }
    isValid() {
        return true;
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
