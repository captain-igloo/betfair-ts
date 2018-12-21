"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const ApplicationSubscription_1 = require("../account/ApplicationSubscription");
const JsonResponse_1 = require("../JsonResponse");
class ListApplicationSubscriptionTokensResponse extends JsonResponse_1.default {
    constructor(applicationSubscriptions = []) {
        super();
        this.applicationSubscriptions = applicationSubscriptions;
    }
    fromJson(json) {
        if (this.validateJson(json)) {
            if ('applicationSubscriptions' in json) {
                this.applicationSubscriptions = json.map((applicationSubscriptionsJson) => {
                    const element = new ApplicationSubscription_1.default();
                    element.fromJson(applicationSubscriptionsJson);
                    return element;
                });
            }
        }
    }
    toJson() {
        const json = {};
        if (this.applicationSubscriptions.length > 0) {
            json.applicationSubscriptions = this.applicationSubscriptions.map((value) => value.toJson());
        }
        return json;
    }
    isValid() {
        return this.applicationSubscriptions.length > 0;
    }
    getApplicationSubscriptions() {
        return this.applicationSubscriptions;
    }
    setApplicationSubscriptions(applicationSubscriptions) {
        this.applicationSubscriptions = applicationSubscriptions;
    }
}
exports.default = ListApplicationSubscriptionTokensResponse;
