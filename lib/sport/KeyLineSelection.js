"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class KeyLineSelection extends JsonMember_1.default {
    constructor(options) {
        super();
        this.selectionId = options.selectionId;
        this.handicap = options.handicap;
    }
    toJson() {
        const json = {
            selectionId: this.selectionId,
            handicap: this.handicap,
        };
        return json;
    }
    getSelectionId() {
        return this.selectionId;
    }
    setSelectionId(selectionId) {
        this.selectionId = selectionId;
    }
    getHandicap() {
        return this.handicap;
    }
    setHandicap(handicap) {
        this.handicap = handicap;
    }
}
exports.default = KeyLineSelection;
//# sourceMappingURL=KeyLineSelection.js.map