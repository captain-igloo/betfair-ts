"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
class RemoveExposureLimitForMarketGroupResponse extends JsonResponse_1.default {
    constructor(response = '') {
        super();
        this.response = response;
    }
    fromJson(json) {
        if (this.validateJson(json)) {
            this.response = json.response;
        }
    }
    toJson() {
        let json = {};
        if (this.response !== '') {
            json.response = this.response;
        }
        return json;
    }
    isValid() {
        return this.response !== '';
    }
    getResponse() {
        return this.response;
    }
    setResponse(response) {
        this.response = response;
    }
}
exports.default = RemoveExposureLimitForMarketGroupResponse;
//# sourceMappingURL=RemoveExposureLimitForMarketGroupResponse.js.map