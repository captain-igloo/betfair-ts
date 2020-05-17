"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const SubscriptionTokenInfo_1 = require("../account/SubscriptionTokenInfo");
class AccountSubscription extends JsonMember_1.default {
    constructor(options) {
        super();
        this.subscriptionTokens = this.arrayFromJson(options.subscriptionTokens, SubscriptionTokenInfo_1.default);
        this.applicationName = options.applicationName;
        this.applicationVersionId = options.applicationVersionId;
    }
    toJson() {
        const json = {
            subscriptionTokens: this.subscriptionTokens.map((value) => value.toJson()),
        };
        if (typeof this.applicationName !== 'undefined') {
            json.applicationName = this.applicationName;
        }
        if (typeof this.applicationVersionId !== 'undefined') {
            json.applicationVersionId = this.applicationVersionId;
        }
        return json;
    }
    getSubscriptionTokens() {
        return this.subscriptionTokens;
    }
    setSubscriptionTokens(subscriptionTokens) {
        this.subscriptionTokens = subscriptionTokens;
    }
    getApplicationName() {
        return this.applicationName;
    }
    setApplicationName(applicationName) {
        this.applicationName = applicationName;
    }
    getApplicationVersionId() {
        return this.applicationVersionId;
    }
    setApplicationVersionId(applicationVersionId) {
        this.applicationVersionId = applicationVersionId;
    }
}
exports.default = AccountSubscription;
//# sourceMappingURL=AccountSubscription.js.map