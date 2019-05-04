"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
class IsAccountSubscribedToWebAppResponse extends JsonResponse_1.default {
    constructor(response = null) {
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
        if (this.response !== null) {
            json.response = this.response;
        }
        return json;
    }
    isValid() {
        return this.response !== null;
    }
    getResponse() {
        return this.response;
    }
    setResponse(response) {
        this.response = response;
    }
}
exports.default = IsAccountSubscribedToWebAppResponse;
//# sourceMappingURL=IsAccountSubscribedToWebAppResponse.js.map