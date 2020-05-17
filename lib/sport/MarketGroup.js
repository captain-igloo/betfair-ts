"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const MarketGroupType_1 = require("../sport/enum/MarketGroupType");
const MarketGroupId_1 = require("../sport/MarketGroupId");
class MarketGroup extends JsonMember_1.default {
    constructor(options) {
        super();
        this.type = this.fromJson(options.type, MarketGroupType_1.default);
        this.id = this.fromJson(options.id, MarketGroupId_1.default);
    }
    toJson() {
        const json = {
            type: this.type.getValue(),
            id: this.id.toJson(),
        };
        return json;
    }
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
}
exports.default = MarketGroup;
//# sourceMappingURL=MarketGroup.js.map