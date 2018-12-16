"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const AccountSubscription_1 = require("../account/AccountSubscription");
class ListAccountSubscriptionTokensResponse extends JsonResponse_1.default {
    constructor(accountSubscriptions = []) {
        super();
        this.accountSubscriptions = accountSubscriptions;
    }
    fromJson(json) {
        if (this.validateJson(json)) {
            this.accountSubscriptions = json.map((accountSubscriptionsJson) => {
                const element = new AccountSubscription_1.default();
                element.fromJson(accountSubscriptionsJson);
                return element;
            });
        }
    }
    toJson() {
        const json = {};
        if (this.accountSubscriptions.length > 0) {
            json.accountSubscriptions = this.accountSubscriptions.map((value) => value.toJson());
        }
        return json;
    }
    isValid() {
        return this.accountSubscriptions.length > 0;
    }
    getAccountSubscriptions() {
        return this.accountSubscriptions;
    }
    setAccountSubscriptions(accountSubscriptions) {
        this.accountSubscriptions = accountSubscriptions;
    }
}
exports.default = ListAccountSubscriptionTokensResponse;
