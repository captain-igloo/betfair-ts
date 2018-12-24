"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const DeveloperApp_1 = require("../account/DeveloperApp");
const JsonResponse_1 = require("../JsonResponse");
class GetDeveloperAppKeysResponse extends JsonResponse_1.default {
    constructor(developerApps = []) {
        super();
        this.developerApps = developerApps;
    }
    fromJson(json) {
        if (this.validateJson(json)) {
            this.developerApps = json.map((developerAppsJson) => {
                const element = new DeveloperApp_1.default();
                element.fromJson(developerAppsJson);
                return element;
            });
        }
    }
    toJson() {
        const json = {};
        if (this.developerApps.length > 0) {
            json.developerApps = this.developerApps.map((value) => value.toJson());
        }
        return json;
    }
    isValid() {
        return this.developerApps.length > 0;
    }
    getDeveloperApps() {
        return this.developerApps;
    }
    setDeveloperApps(developerApps) {
        this.developerApps = developerApps;
    }
}
exports.default = GetDeveloperAppKeysResponse;
//# sourceMappingURL=GetDeveloperAppKeysResponse.js.map