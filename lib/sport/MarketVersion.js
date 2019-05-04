"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class MarketVersion extends JsonMember_1.default {
    constructor(version = null) {
        super();
        this.version = version;
    }
    fromJson(json) {
        if ('version' in json) {
            this.version = json.version;
        }
    }
    toJson() {
        const json = {};
        if (this.version !== null) {
            json.version = this.version;
        }
        return json;
    }
    isValid() {
        return true;
    }
    getVersion() {
        return this.version;
    }
    setVersion(version) {
        this.version = version;
    }
}
exports.default = MarketVersion;
//# sourceMappingURL=MarketVersion.js.map