"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
class CreateDeveloperAppKeysRequest extends JsonRequest_1.default {
    constructor(appName = '') {
        super();
        this.appName = appName;
    }
    fromJson(json) {
        if ('appName' in json) {
            this.appName = json.appName;
        }
    }
    toJson() {
        const json = {};
        if (this.appName !== null) {
            json.appName = this.appName;
        }
        return json;
    }
    isValid() {
        return this.appName !== null;
    }
    getAppName() {
        return this.appName;
    }
    setAppName(appName) {
        this.appName = appName;
    }
}
exports.default = CreateDeveloperAppKeysRequest;
