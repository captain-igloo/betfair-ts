"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
class IsAccountSubscribedToWebAppRequest extends JsonRequest_1.default {
    constructor(options) {
        super();
        this.vendorId = options.vendorId;
    }
    toJson() {
        const json = {
            vendorId: this.vendorId,
        };
        return json;
    }
    getVendorId() {
        return this.vendorId;
    }
    setVendorId(vendorId) {
        this.vendorId = vendorId;
    }
}
exports.default = IsAccountSubscribedToWebAppRequest;
//# sourceMappingURL=IsAccountSubscribedToWebAppRequest.js.map