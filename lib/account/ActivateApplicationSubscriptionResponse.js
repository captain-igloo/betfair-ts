"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const Status_1 = require("../account/enum/Status");
class ActivateApplicationSubscriptionResponse extends JsonResponse_1.default {
    constructor(response = new Status_1.default()) {
        super();
        this.response = response;
    }
    fromJson(json) {
        if (this.validateJson(json)) {
            this.response.setValue(json);
        }
    }
    toJson() {
        let json = {};
        if (this.response.isValid()) {
            json = this.response.getValue();
        }
        return json;
    }
    isValid() {
        return this.response.isValid();
    }
    getResponse() {
        return this.response;
    }
    setResponse(response) {
        this.response = response;
    }
}
exports.default = ActivateApplicationSubscriptionResponse;
//# sourceMappingURL=ActivateApplicationSubscriptionResponse.js.map