"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
class CreateDeveloperAppKeysRequest extends JsonRequest_1.default {
    constructor(options) {
        super();
        this.appName = options.appName;
    }
    toJson() {
        const json = {
            appName: this.appName,
        };
        return json;
    }
    getAppName() {
        return this.appName;
    }
    setAppName(appName) {
        this.appName = appName;
    }
}
exports.default = CreateDeveloperAppKeysRequest;
//# sourceMappingURL=CreateDeveloperAppKeysRequest.js.map