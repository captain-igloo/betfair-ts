"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const KeyLineSelection_1 = require("../sport/KeyLineSelection");
class KeyLineDescription extends JsonMember_1.default {
    constructor(keyLine = []) {
        super();
        this.keyLine = keyLine;
    }
    fromJson(json) {
        if ('keyLine' in json) {
            this.keyLine = json.keyLine.map((keyLineJson) => {
                const element = new KeyLineSelection_1.default();
                element.fromJson(keyLineJson);
                return element;
            });
        }
    }
    toJson() {
        const json = {};
        if (this.keyLine.length > 0) {
            json.keyLine = this.keyLine.map((value) => value.toJson());
        }
        return json;
    }
    isValid() {
        return this.keyLine.length > 0;
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