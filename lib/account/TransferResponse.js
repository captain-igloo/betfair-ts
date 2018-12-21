"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
class TransferResponse extends JsonResponse_1.default {
    constructor(transactionId = '') {
        super();
        this.transactionId = transactionId;
    }
    fromJson(json) {
        if (this.validateJson(json)) {
            if ('transactionId' in json) {
                this.transactionId = json.transactionId;
            }
        }
    }
    toJson() {
        const json = {};
        if (this.transactionId !== null) {
            json.transactionId = this.transactionId;
        }
        return json;
    }
    isValid() {
        return this.transactionId !== null;
    }
    getTransactionId() {
        return this.transactionId;
    }
    setTransactionId(transactionId) {
        this.transactionId = transactionId;
    }
}
exports.default = TransferResponse;
