"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
const CancelInstruction_1 = require("../sport/CancelInstruction");
class CancelOrdersRequest extends JsonRequest_1.default {
    constructor(options) {
        super();
        this.marketId = options.marketId;
        if (options.instructions) {
            this.instructions = this.arrayFromJson(options.instructions, CancelInstruction_1.default);
        }
        this.customerRef = options.customerRef;
    }
    toJson() {
        const json = {};
        if (typeof this.marketId !== 'undefined') {
            json.marketId = this.marketId;
        }
        if (this.instructions && this.instructions.length > 0) {
            json.instructions = this.instructions.map((value) => value.toJson());
        }
        if (typeof this.customerRef !== 'undefined') {
            json.customerRef = this.customerRef;
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
}
exports.default = CancelOrdersRequest;
//# sourceMappingURL=CancelOrdersRequest.js.map