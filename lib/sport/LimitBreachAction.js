"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const LimitBreachActionType_1 = require("../sport/enum/LimitBreachActionType");
class LimitBreachAction extends JsonMember_1.default {
    constructor(actionType = new LimitBreachActionType_1.default()) {
        super();
        this.actionType = actionType;
    }
    fromJson(json) {
        if ('actionType' in json) {
            this.actionType.setValue(json.actionType);
        }
    }
    toJson() {
        const json = {};
        if (this.actionType.isValid()) {
            json.actionType = this.actionType;
        }
        return json;
    }
    isValid() {
        return this.actionType.isValid();
    }
    getActionType() {
        return this.actionType;
    }
    setActionType(actionType) {
        this.actionType = actionType;
    }
}
exports.default = LimitBreachAction;
