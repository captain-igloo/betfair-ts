"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
class HeartbeatRequest extends JsonRequest_1.default {
    constructor(preferredTimeoutSeconds = null) {
        super();
        this.preferredTimeoutSeconds = preferredTimeoutSeconds;
    }
    fromJson(json) {
        if ('preferredTimeoutSeconds' in json) {
            this.preferredTimeoutSeconds = json.preferredTimeoutSeconds;
        }
    }
    toJson() {
        const json = {};
        if (this.preferredTimeoutSeconds !== null) {
            json.preferredTimeoutSeconds = this.preferredTimeoutSeconds;
        }
        return json;
    }
    isValid() {
        return this.preferredTimeoutSeconds !== null;
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