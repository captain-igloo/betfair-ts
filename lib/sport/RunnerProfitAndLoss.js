"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class RunnerProfitAndLoss extends JsonMember_1.default {
    constructor(options) {
        super();
        this.selectionId = options.selectionId;
        this.ifWin = options.ifWin;
        this.ifLose = options.ifLose;
        this.ifPlace = options.ifPlace;
    }
    toJson() {
        const json = {};
        if (typeof this.selectionId !== 'undefined') {
            json.selectionId = this.selectionId;
        }
        if (typeof this.ifWin !== 'undefined') {
            json.ifWin = this.ifWin;
        }
        if (typeof this.ifLose !== 'undefined') {
            json.ifLose = this.ifLose;
        }
        if (typeof this.ifPlace !== 'undefined') {
            json.ifPlace = this.ifPlace;
        }
        return json;
    }
    getSelectionId() {
        return this.selectionId;
    }
    setSelectionId(selectionId) {
        this.selectionId = selectionId;
    }
    getIfWin() {
        return this.ifWin;
    }
    setIfWin(ifWin) {
        this.ifWin = ifWin;
    }
    getIfLose() {
        return this.ifLose;
    }
    setIfLose(ifLose) {
        this.ifLose = ifLose;
    }
    getIfPlace() {
        return this.ifPlace;
    }
    setIfPlace(ifPlace) {
        this.ifPlace = ifPlace;
    }
}
exports.default = RunnerProfitAndLoss;
//# sourceMappingURL=RunnerProfitAndLoss.js.map