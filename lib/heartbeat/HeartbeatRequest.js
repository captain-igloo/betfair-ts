"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
class HeartbeatRequest extends JsonRequest_1.default {
    constructor(options) {
        super();
        this.preferredTimeoutSeconds = options.preferredTimeoutSeconds;
    }
    toJson() {
        const json = {
            preferredTimeoutSeconds: this.preferredTimeoutSeconds,
        };
        return json;
    }
    getPreferredTimeoutSeconds() {
        return this.preferredTimeoutSeconds;
    }
    setPreferredTimeoutSeconds(preferredTimeoutSeconds) {
        this.preferredTimeoutSeconds = preferredTimeoutSeconds;
    }
}
exports.default = HeartbeatRequest;
//# sourceMappingURL=HeartbeatRequest.js.map