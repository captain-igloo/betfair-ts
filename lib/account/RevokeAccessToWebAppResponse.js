"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const Status_1 = require("../account/enum/Status");
class RevokeAccessToWebAppResponse extends JsonResponse_1.default {
    constructor(options) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.response = this.fromJson(options, Status_1.default);
            }
        }
    }
    toJson() {
        throw new Error('not implemented');
    }
    getResponse() {
        return this.response;
    }
    setResponse(response) {
        this.response = response;
    }
}
exports.default = RevokeAccessToWebAppResponse;
//# sourceMappingURL=RevokeAccessToWebAppResponse.js.map