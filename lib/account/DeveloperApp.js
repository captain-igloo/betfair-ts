"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const DeveloperAppVersion_1 = require("../account/DeveloperAppVersion");
const JsonResponse_1 = require("../JsonResponse");
class DeveloperApp extends JsonResponse_1.default {
    constructor(appName = '', appId = null, appVersions = []) {
        super();
        this.appName = appName;
        this.appId = appId;
        this.appVersions = appVersions;
    }
    fromJson(json) {
        if ('appName' in json) {
            this.appName = json.appName;
        }
        if ('appId' in json) {
            this.appId = json.appId;
        }
        if ('appVersions' in json) {
            this.appVersions = json.appVersions.map((appVersionsJson) => {
                const element = new DeveloperAppVersion_1.default();
                element.fromJson(appVersionsJson);
                return element;
            });
        }
    }
    toJson() {
        const json = {};
        if (this.appName !== null) {
            json.appName = this.appName;
        }
        if (this.appId !== null) {
            json.appId = this.appId;
        }
        if (this.appVersions.length > 0) {
            json.appVersions = this.appVersions.map((value) => value.toJson());
        }
        return json;
    }
    isValid() {
        return this.appName !== null &&
            this.appId !== null &&
            this.appVersions.length > 0;
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
