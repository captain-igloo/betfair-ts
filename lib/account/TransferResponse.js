"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
class TransferResponse extends JsonResponse_1.default {
    constructor(options) {
        super();
        if (this.validateJson(options)) {
            this.transactionId = options.transactionId;
        }
    }
    toJson() {
        const json = {};
        if (typeof this.transactionId !== 'undefined') {
            json.transactionId = this.transactionId;
        }
        return json;
    }
    getTransactionId() {
        return this.transactionId;
    }
    setTransactionId(transactionId) {
        this.transactionId = transactionId;
    }
}
exports.default = TransferResponse;
//# sourceMappingURL=TransferResponse.js.map