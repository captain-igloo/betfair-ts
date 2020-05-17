"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
class ActivateApplicationSubscriptionRequest extends JsonRequest_1.default {
    constructor(options) {
        super();
        this.subscriptionToken = options.subscriptionToken;
    }
    toJson() {
        const json = {
            subscriptionToken: this.subscriptionToken,
        };
        return json;
    }
    getSubscriptionToken() {
        return this.subscriptionToken;
    }
    setSubscriptionToken(subscriptionToken) {
        this.subscriptionToken = subscriptionToken;
    }
}
exports.default = ActivateApplicationSubscriptionRequest;
//# sourceMappingURL=ActivateApplicationSubscriptionRequest.js.map