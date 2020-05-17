"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const Match_1 = require("../sport/Match");
class Matches extends JsonMember_1.default {
    constructor(options) {
        super();
        if (options.matches) {
            this.matches = this.arrayFromJson(options.matches, Match_1.default);
        }
    }
    toJson() {
        const json = {};
        if (this.matches && this.matches.length > 0) {
            json.matches = this.matches.map((value) => value.toJson());
        }
        return json;
    }
    getMatches() {
        return this.matches;
    }
    setMatches(matches) {
        this.matches = matches;
    }
}
exports.default = Matches;
//# sourceMappingURL=Matches.js.map