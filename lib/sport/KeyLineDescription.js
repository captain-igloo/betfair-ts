"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const KeyLineSelection_1 = require("../sport/KeyLineSelection");
class KeyLineDescription extends JsonMember_1.default {
    constructor(options) {
        super();
        this.keyLine = this.arrayFromJson(options.keyLine, KeyLineSelection_1.default);
    }
    toJson() {
        const json = {
            keyLine: this.keyLine.map((value) => value.toJson()),
        };
        return json;
    }
    getKeyLine() {
        return this.keyLine;
    }
    setKeyLine(keyLine) {
        this.keyLine = keyLine;
    }
}
exports.default = KeyLineDescription;
//# sourceMappingURL=KeyLineDescription.js.map