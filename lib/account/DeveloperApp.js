"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const DeveloperAppVersion_1 = require("../account/DeveloperAppVersion");
class DeveloperApp extends JsonResponse_1.default {
    constructor(options) {
        super();
        if (this.validateJson(options)) {
            this.appName = options.appName;
            this.appId = options.appId;
            if (options.appVersions) {
                this.appVersions = this.arrayFromJson(options.appVersions, DeveloperAppVersion_1.default);
            }
        }
    }
    toJson() {
        const json = {};
        if (typeof this.appName !== 'undefined') {
            json.appName = this.appName;
        }
        if (typeof this.appId !== 'undefined') {
            json.appId = this.appId;
        }
        if (this.appVersions && this.appVersions.length > 0) {
            json.appVersions = this.appVersions.map((value) => value.toJson());
        }
        return json;
    }
    getAppName() {
        return this.appName;
    }
    setAppName(appName) {
        this.appName = appName;
    }
    getAppId() {
        return this.appId;
    }
    setAppId(appId) {
        this.appId = appId;
    }
    getAppVersions() {
        return this.appVersions;
    }
    setAppVersions(appVersions) {
        this.appVersions = appVersions;
    }
}
exports.default = DeveloperApp;
//# sourceMappingURL=DeveloperApp.js.map