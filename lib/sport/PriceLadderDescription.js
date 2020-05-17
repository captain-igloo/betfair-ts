"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const PriceLadderType_1 = require("../sport/enum/PriceLadderType");
class PriceLadderDescription extends JsonMember_1.default {
    constructor(options) {
        super();
        this.type = this.fromJson(options.type, PriceLadderType_1.default);
    }
    toJson() {
        const json = {
            type: this.type.getValue(),
        };
        return json;
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