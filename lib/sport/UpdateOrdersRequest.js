"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
const UpdateInstruction_1 = require("../sport/UpdateInstruction");
class UpdateOrdersRequest extends JsonRequest_1.default {
    constructor(options) {
        super();
        this.marketId = options.marketId;
        this.instructions = this.arrayFromJson(options.instructions, UpdateInstruction_1.default);
        this.customerRef = options.customerRef;
    }
    toJson() {
        const json = {
            marketId: this.marketId,
            instructions: this.instructions.map((value) => value.toJson()),
        };
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
exports.default = UpdateOrdersRequest;
//# sourceMappingURL=UpdateOrdersRequest.js.map