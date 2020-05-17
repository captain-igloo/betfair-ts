"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const LimitBreachAction_1 = require("../sport/LimitBreachAction");
class ExposureLimit extends JsonMember_1.default {
    constructor(options) {
        super();
        this.matched = options.matched;
        this.total = options.total;
        this.limitBreachAction = options.limitBreachAction && this.fromJson(options.limitBreachAction, LimitBreachAction_1.default);
    }
    toJson() {
        const json = {};
        if (typeof this.matched !== 'undefined') {
            json.matched = this.matched;
        }
        if (typeof this.total !== 'undefined') {
            json.total = this.total;
        }
        if (this.limitBreachAction) {
            json.limitBreachAction = this.limitBreachAction.toJson();
        }
        return json;
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
//# sourceMappingURL=ExposureLimit.js.map