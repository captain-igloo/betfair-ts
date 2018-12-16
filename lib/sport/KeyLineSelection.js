"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class KeyLineSelection extends JsonMember_1.default {
    constructor(selectionId = null, handicap = null) {
        super();
        this.selectionId = selectionId;
        this.handicap = handicap;
    }
    fromJson(json) {
        if ('selectionId' in json) {
            this.selectionId = json.selectionId;
        }
        if ('handicap' in json) {
            this.handicap = json.handicap;
        }
    }
    toJson() {
        const json = {};
        if (this.selectionId !== null) {
            json.selectionId = this.selectionId;
        }
        if (this.handicap !== null) {
            json.handicap = this.handicap;
        }
        return json;
    }
    isValid() {
        return this.selectionId !== null &&
            this.handicap !== null;
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
