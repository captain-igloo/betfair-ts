"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const SubscriptionTokenInfo_1 = require("../account/SubscriptionTokenInfo");
const JsonMember_1 = require("../JsonMember");
class AccountSubscription extends JsonMember_1.default {
    constructor(subscriptionTokens = [], applicationName = '', applicationVersionId = '') {
        super();
        this.subscriptionTokens = subscriptionTokens;
        this.applicationName = applicationName;
        this.applicationVersionId = applicationVersionId;
    }
    fromJson(json) {
        if ('subscriptionTokens' in json) {
            this.subscriptionTokens = json.subscriptionTokens.map((subscriptionTokensJson) => {
                const element = new SubscriptionTokenInfo_1.default();
                element.fromJson(subscriptionTokensJson);
                return element;
            });
        }
        if ('applicationName' in json) {
            this.applicationName = json.applicationName;
        }
        if ('applicationVersionId' in json) {
            this.applicationVersionId = json.applicationVersionId;
        }
    }
    toJson() {
        const json = {};
        if (this.subscriptionTokens.length > 0) {
            json.subscriptionTokens = this.subscriptionTokens.map((value) => value.toJson());
        }
        if (this.applicationName !== null) {
            json.applicationName = this.applicationName;
        }
        if (this.applicationVersionId !== null) {
            json.applicationVersionId = this.applicationVersionId;
        }
        return json;
    }
    isValid() {
        return this.subscriptionTokens.length > 0;
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