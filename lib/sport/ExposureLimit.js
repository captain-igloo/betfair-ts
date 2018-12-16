"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const LimitBreachAction_1 = require("../sport/LimitBreachAction");
class ExposureLimit extends JsonMember_1.default {
    constructor(matched = null, total = null, limitBreachAction = new LimitBreachAction_1.default()) {
        super();
        this.matched = matched;
        this.total = total;
        this.limitBreachAction = limitBreachAction;
    }
    fromJson(json) {
        if ('matched' in json) {
            this.matched = json.matched;
        }
        if ('total' in json) {
            this.total = json.total;
        }
        if ('limitBreachAction' in json) {
            this.limitBreachAction.fromJson(json.limitBreachAction);
        }
    }
    toJson() {
        const json = {};
        if (this.matched !== null) {
            json.matched = this.matched;
        }
        if (this.total !== null) {
            json.total = this.total;
        }
        if (this.limitBreachAction.isValid()) {
            json.limitBreachAction = this.limitBreachAction.toJson();
        }
        return json;
    }
    isValid() {
        return true;
    }
    getMatched() {
        return this.matched;
    }
    setMatched(matched) {
        this.matched = matched;
    }
    getTotal() {
        return this.total;
    }
    setTotal(total) {
        this.total = total;
    }
    getLimitBreachAction() {
        return this.limitBreachAction;
    }
    setLimitBreachAction(limitBreachAction) {
        this.limitBreachAction = limitBreachAction;
    }
}
exports.default = ExposureLimit;
