"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class RunnerProfitAndLoss extends JsonMember_1.default {
    constructor(selectionId = null, ifWin = null, ifLose = null, ifPlace = null) {
        super();
        this.selectionId = selectionId;
        this.ifWin = ifWin;
        this.ifLose = ifLose;
        this.ifPlace = ifPlace;
    }
    fromJson(json) {
        if ('selectionId' in json) {
            this.selectionId = json.selectionId;
        }
        if ('ifWin' in json) {
            this.ifWin = json.ifWin;
        }
        if ('ifLose' in json) {
            this.ifLose = json.ifLose;
        }
        if ('ifPlace' in json) {
            this.ifPlace = json.ifPlace;
        }
    }
    toJson() {
        const json = {};
        if (this.selectionId !== null) {
            json.selectionId = this.selectionId;
        }
        if (this.ifWin !== null) {
            json.ifWin = this.ifWin;
        }
        if (this.ifLose !== null) {
            json.ifLose = this.ifLose;
        }
        if (this.ifPlace !== null) {
            json.ifPlace = this.ifPlace;
        }
        return json;
    }
    isValid() {
        return true;
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