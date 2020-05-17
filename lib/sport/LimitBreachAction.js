"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const LimitBreachActionType_1 = require("../sport/enum/LimitBreachActionType");
class LimitBreachAction extends JsonMember_1.default {
    constructor(options) {
        super();
        this.actionType = this.fromJson(options.actionType, LimitBreachActionType_1.default);
    }
    toJson() {
        const json = {
            actionType: this.actionType.getValue(),
        };
        return json;
    }
    getActionType() {
        return this.actionType;
    }
    setActionType(actionType) {
        this.actionType = actionType;
    }
}
exports.default = LimitBreachAction;
//# sourceMappingURL=LimitBreachAction.js.map