"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const PriceLadderType_1 = require("../sport/enum/PriceLadderType");
class PriceLadderDescription extends JsonMember_1.default {
    constructor(type = new PriceLadderType_1.default()) {
        super();
        this.type = type;
    }
    fromJson(json) {
        if ('type' in json) {
            this.type.setValue(json.type);
        }
    }
    toJson() {
        const json = {};
        if (this.type.isValid()) {
            json.type = this.type;
        }
        return json;
    }
    isValid() {
        return this.type.isValid();
    }
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
    }
}
exports.default = PriceLadderDescription;
//# sourceMappingURL=PriceLadderDescription.js.map