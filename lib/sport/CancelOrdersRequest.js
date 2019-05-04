"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
const CancelInstruction_1 = require("../sport/CancelInstruction");
class CancelOrdersRequest extends JsonRequest_1.default {
    constructor(marketId = '', instructions = [], customerRef = '') {
        super();
        this.marketId = marketId;
        this.instructions = instructions;
        this.customerRef = customerRef;
    }
    fromJson(json) {
        if ('marketId' in json) {
            this.marketId = json.marketId;
        }
        if ('instructions' in json) {
            this.instructions = json.instructions.map((instructionsJson) => {
                const element = new CancelInstruction_1.default();
                element.fromJson(instructionsJson);
                return element;
            });
        }
        if ('customerRef' in json) {
            this.customerRef = json.customerRef;
        }
    }
    toJson() {
        const json = {};
        if (this.marketId !== '') {
            json.marketId = this.marketId;
        }
        if (this.instructions.length > 0) {
            json.instructions = this.instructions.map((value) => value.toJson());
        }
        if (this.customerRef !== '') {
            json.customerRef = this.customerRef;
        }
        return json;
    }
    isValid() {
        return true;
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