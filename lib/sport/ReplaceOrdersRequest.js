"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
const MarketVersion_1 = require("../sport/MarketVersion");
const ReplaceInstruction_1 = require("../sport/ReplaceInstruction");
class ReplaceOrdersRequest extends JsonRequest_1.default {
    constructor(options) {
        super();
        this.marketId = options.marketId;
        this.instructions = this.arrayFromJson(options.instructions, ReplaceInstruction_1.default);
        this.customerRef = options.customerRef;
        this.marketVersion = options.marketVersion && this.fromJson(options.marketVersion, MarketVersion_1.default);
        this.async = options.async;
    }
    toJson() {
        const json = {
            marketId: this.marketId,
            instructions: this.instructions.map((value) => value.toJson()),
        };
        if (typeof this.customerRef !== 'undefined') {
            json.customerRef = this.customerRef;
        }
        if (this.marketVersion) {
            json.marketVersion = this.marketVersion.toJson();
        }
        if (typeof this.async !== 'undefined') {
            json.async = this.async;
        }
        return json;
    }
    getMarketId() {
        return this.marketId;
    }
    setMarketId(marketId) {
        this.marketId = marketId;
    }
    getInstructions() {
        return this.instructions;
    }
    setInstructions(instructions) {
        this.instructions = instructions;
    }
    getCustomerRef() {
        return this.customerRef;
    }
    setCustomerRef(customerRef) {
        this.customerRef = customerRef;
    }
    getMarketVersion() {
        return this.marketVersion;
    }
    setMarketVersion(marketVersion) {
        this.marketVersion = marketVersion;
    }
    getAsync() {
        return this.async;
    }
    setAsync(async) {
        this.async = async;
    }
}
exports.default = ReplaceOrdersRequest;
//# sourceMappingURL=ReplaceOrdersRequest.js.map