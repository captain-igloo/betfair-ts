"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const ItemClass_1 = require("../account/enum/ItemClass");
const StatementLegacyData_1 = require("../account/StatementLegacyData");
class StatementItem extends JsonMember_1.default {
    constructor(options) {
        super();
        this.refId = options.refId;
        this.itemDate = this.fromJson(options.itemDate, Date);
        this.amount = options.amount;
        this.balance = options.balance;
        if (options.itemClass) {
            this.itemClass = this.fromJson(options.itemClass, ItemClass_1.default);
        }
        if (options.itemClassData) {
            this.itemClassData = this.mapFromJson(options.itemClassData);
        }
        this.legacyData = options.legacyData && this.fromJson(options.legacyData, StatementLegacyData_1.default);
    }
    toJson() {
        const json = {
            itemDate: this.itemDate.toISOString(),
        };
        if (typeof this.refId !== 'undefined') {
            json.refId = this.refId;
        }
        if (typeof this.amount !== 'undefined') {
            json.amount = this.amount;
        }
        if (typeof this.balance !== 'undefined') {
            json.balance = this.balance;
        }
        if (this.itemClass) {
            json.itemClass = this.itemClass.getValue();
        }
        if (this.itemClassData && this.itemClassData.size > 0) {
            json.itemClassData = {};
            this.itemClassData.forEach((value, key) => {
                json.itemClassData[key] = value;
            });
        }
        if (this.legacyData) {
            json.legacyData = this.legacyData.toJson();
        }
        return json;
    }
    getRefId() {
        return this.refId;
    }
    setRefId(refId) {
        this.refId = refId;
    }
    getItemDate() {
        return this.itemDate;
    }
    setItemDate(itemDate) {
        this.itemDate = itemDate;
    }
    getAmount() {
        return this.amount;
    }
    setAmount(amount) {
        this.amount = amount;
    }
    getBalance() {
        return this.balance;
    }
    setBalance(balance) {
        this.balance = balance;
    }
    getItemClass() {
        return this.itemClass;
    }
    setItemClass(itemClass) {
        this.itemClass = itemClass;
    }
    getItemClassData() {
        return this.itemClassData;
    }
    setItemClassData(itemClassData) {
        this.itemClassData = itemClassData;
    }
    getLegacyData() {
        return this.legacyData;
    }
    setLegacyData(legacyData) {
        this.legacyData = legacyData;
    }
}
exports.default = StatementItem;
//# sourceMappingURL=StatementItem.js.map