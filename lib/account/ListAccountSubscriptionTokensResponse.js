"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const AccountSubscription_1 = require("../account/AccountSubscription");
class ListAccountSubscriptionTokensResponse extends JsonResponse_1.default {
    constructor(options) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.accountSubscriptions = this.arrayFromJson(options, AccountSubscription_1.default);
            }
        }
    }
    toJson() {
        throw new Error('not implemented');
    }
    getAccountSubscriptions() {
        return this.accountSubscriptions;
    }
    setAccountSubscriptions(accountSubscriptions) {
        this.accountSubscriptions = accountSubscriptions;
    }
}
exports.default = ListAccountSubscriptionTokensResponse;
//# sourceMappingURL=ListAccountSubscriptionTokensResponse.js.map