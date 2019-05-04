"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const ItemClass_1 = require("../account/enum/ItemClass");
const StatementLegacyData_1 = require("../account/StatementLegacyData");
class StatementItem extends JsonMember_1.default {
    constructor(refId = '', itemDate = null, amount = null, balance = null, itemClass = new ItemClass_1.default(), itemClassData = new Map(), legacyData = new StatementLegacyData_1.default()) {
        super();
        this.refId = refId;
        this.itemDate = itemDate;
        this.amount = amount;
        this.balance = balance;
        this.itemClass = itemClass;
        this.itemClassData = itemClassData;
        this.legacyData = legacyData;
    }
    fromJson(json) {
        if ('refId' in json) {
            this.refId = json.refId;
        }
        if ('itemDate' in json) {
            this.itemDate = new Date(json.itemDate);
        }
        if ('amount' in json) {
            this.amount = json.amount;
        }
        if ('balance' in json) {
            this.balance = json.balance;
        }
        if ('itemClass' in json) {
            this.itemClass.setValue(json.itemClass);
        }
        if ('itemClassData' in json) {
            Object.keys(json.itemClassData).forEach((key) => {
                this.itemClassData.set(key, json.itemClassData[key]);
            });
        }
        if ('legacyData' in json) {
            this.legacyData.fromJson(json.legacyData);
        }
    }
    toJson() {
        const json = {};
        if (this.refId !== '') {
            json.refId = this.refId;
        }
        if (this.itemDate !== null) {
            json.itemDate = this.itemDate.toISOString();
        }
        if (this.amount !== null) {
            json.amount = this.amount;
        }
        if (this.balance !== null) {
            json.balance = this.balance;
        }
        if (this.itemClass.isValid()) {
            json.itemClass = this.itemClass.getValue();
        }
        if (this.itemClassData.size > 0) {
            json.itemClassData = {};
            this.itemClassData.forEach((value, key) => {
                json.itemClassData.key = value;
            });
        }
        if (this.legacyData.isValid()) {
            json.legacyData = this.legacyData.toJson();
        }
        return json;
    }
    isValid() {
        return this.itemDate !== null;
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