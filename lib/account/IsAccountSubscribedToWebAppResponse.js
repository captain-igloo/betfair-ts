"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
class IsAccountSubscribedToWebAppResponse extends JsonResponse_1.default {
    constructor(options) {
        super();
        if (this.validateJson(options)) {
            this.response = options;
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
exports.default = IsAccountSubscribedToWebAppResponse;
//# sourceMappingURL=IsAccountSubscribedToWebAppResponse.js.map