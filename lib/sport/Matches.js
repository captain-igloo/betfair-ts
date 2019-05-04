"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const Match_1 = require("../sport/Match");
class Matches extends JsonMember_1.default {
    constructor(matches = []) {
        super();
        this.matches = matches;
    }
    fromJson(json) {
        if ('matches' in json) {
            this.matches = json.matches.map((matchesJson) => {
                const element = new Match_1.default();
                element.fromJson(matchesJson);
                return element;
            });
        }
    }
    toJson() {
        const json = {};
        if (this.matches.length > 0) {
            json.matches = this.matches.map((value) => value.toJson());
        }
        return json;
    }
    isValid() {
        return true;
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