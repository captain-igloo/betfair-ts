"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class MarketVersion extends JsonMember_1.default {
    constructor(options) {
        super();
        this.version = options.version;
    }
    toJson() {
        const json = {};
        if (typeof this.version !== 'undefined') {
            json.version = this.version;
        }
        return json;
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