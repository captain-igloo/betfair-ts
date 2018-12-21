"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const ActionPerformed_1 = require("../heartbeat/enum/ActionPerformed");
const JsonResponse_1 = require("../JsonResponse");
class HeartbeatReport extends JsonResponse_1.default {
    constructor(actionPerformed = new ActionPerformed_1.default(), actualTimeoutSeconds = null) {
        super();
        this.actionPerformed = actionPerformed;
        this.actualTimeoutSeconds = actualTimeoutSeconds;
    }
    fromJson(json) {
        if (this.validateJson(json)) {
            if ('actionPerformed' in json) {
                this.actionPerformed.setValue(json.actionPerformed);
            }
            if ('actualTimeoutSeconds' in json) {
                this.actualTimeoutSeconds = json.actualTimeoutSeconds;
            }
        }
    }
    toJson() {
        const json = {};
        if (this.actionPerformed.isValid()) {
            json.actionPerformed = this.actionPerformed;
        }
        if (this.actualTimeoutSeconds !== null) {
            json.actualTimeoutSeconds = this.actualTimeoutSeconds;
        }
        return json;
    }
    isValid() {
        return this.actionPerformed.isValid() &&
            this.actualTimeoutSeconds !== null;
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
