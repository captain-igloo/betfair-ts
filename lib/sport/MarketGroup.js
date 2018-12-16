"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const MarketGroupType_1 = require("../sport/enum/MarketGroupType");
const MarketGroupId_1 = require("../sport/MarketGroupId");
class MarketGroup extends JsonMember_1.default {
    constructor(type = new MarketGroupType_1.default(), id = new MarketGroupId_1.default()) {
        super();
        this.type = type;
        this.id = id;
    }
    fromJson(json) {
        if ('type' in json) {
            this.type.setValue(json.type);
        }
        if ('id' in json) {
            this.id.fromJson(json.id);
        }
    }
    toJson() {
        const json = {};
        if (this.type.isValid()) {
            json.type = this.type;
        }
        if (this.id.isValid()) {
            json.id = this.id.toJson();
        }
        return json;
    }
    isValid() {
        return this.type.isValid() &&
            this.id.isValid();
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
