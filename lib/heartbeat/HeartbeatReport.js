"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const ActionPerformed_1 = require("../heartbeat/enum/ActionPerformed");
class HeartbeatReport extends JsonResponse_1.default {
    constructor(options) {
        super();
        if (this.validateJson(options)) {
            if (options.actionPerformed) {
                this.actionPerformed = this.fromJson(options.actionPerformed, ActionPerformed_1.default);
            }
            this.actualTimeoutSeconds = options.actualTimeoutSeconds;
        }
    }
    toJson() {
        const json = {};
        if (this.actionPerformed) {
            json.actionPerformed = this.actionPerformed.getValue();
        }
        if (typeof this.actualTimeoutSeconds !== 'undefined') {
            json.actualTimeoutSeconds = this.actualTimeoutSeconds;
        }
        return json;
    }
    getActionPerformed() {
        return this.actionPerformed;
    }
    setActionPerformed(actionPerformed) {
        this.actionPerformed = actionPerformed;
    }
    getActualTimeoutSeconds() {
        return this.actualTimeoutSeconds;
    }
    setActualTimeoutSeconds(actualTimeoutSeconds) {
        this.actualTimeoutSeconds = actualTimeoutSeconds;
    }
}
exports.default = HeartbeatReport;
//# sourceMappingURL=HeartbeatReport.js.map