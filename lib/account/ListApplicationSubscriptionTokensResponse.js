"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const ApplicationSubscription_1 = require("../account/ApplicationSubscription");
class ListApplicationSubscriptionTokensResponse extends JsonResponse_1.default {
    constructor(options) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.applicationSubscriptions = this.arrayFromJson(options, ApplicationSubscription_1.default);
            }
        }
    }
    toJson() {
        throw new Error('not implemented');
    }
    getApplicationSubscriptions() {
        return this.applicationSubscriptions;
    }
    setApplicationSubscriptions(applicationSubscriptions) {
        this.applicationSubscriptions = applicationSubscriptions;
    }
}
exports.default = ListApplicationSubscriptionTokensResponse;
//# sourceMappingURL=ListApplicationSubscriptionTokensResponse.js.map