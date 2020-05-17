"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const DeveloperApp_1 = require("../account/DeveloperApp");
class GetDeveloperAppKeysResponse extends JsonResponse_1.default {
    constructor(options) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.developerApps = this.arrayFromJson(options, DeveloperApp_1.default);
            }
        }
    }
    toJson() {
        throw new Error('not implemented');
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