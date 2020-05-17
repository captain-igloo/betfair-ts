"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const KeyLineDescription_1 = require("../sport/KeyLineDescription");
class MarketState extends JsonMember_1.default {
    constructor(options) {
        super();
        this.status = options.status;
        this.betDelay = options.betDelay;
        this.bspReconciled = options.bspReconciled;
        this.complete = options.complete;
        this.inplay = options.inplay;
        this.numberOfActiveRunners = options.numberOfActiveRunners;
        this.lastMatchTime = this.fromJson(options.lastMatchTime, Date);
        this.totalMatched = options.totalMatched;
        this.totalAvailable = options.totalAvailable;
        this.keyLineDescription = options.keyLineDescription && this.fromJson(options.keyLineDescription, KeyLineDescription_1.default);
    }
    toJson() {
        const json = {
            status: this.status,
            betDelay: this.betDelay,
            bspReconciled: this.bspReconciled,
            complete: this.complete,
            inplay: this.inplay,
            numberOfActiveRunners: this.numberOfActiveRunners,
            lastMatchTime: this.lastMatchTime.toISOString(),
            totalMatched: this.totalMatched,
            totalAvailable: this.totalAvailable,
        };
        if (this.keyLineDescription) {
            json.keyLineDescription = this.keyLineDescription.toJson();
        }
        return json;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    getBetDelay() {
        return this.betDelay;
    }
    setBetDelay(betDelay) {
        this.betDelay = betDelay;
    }
    getBspReconciled() {
        return this.bspReconciled;
    }
    setBspReconciled(bspReconciled) {
        this.bspReconciled = bspReconciled;
    }
    getComplete() {
        return this.complete;
    }
    setComplete(complete) {
        this.complete = complete;
    }
    getInplay() {
        return this.inplay;
    }
    setInplay(inplay) {
        this.inplay = inplay;
    }
    getNumberOfActiveRunners() {
        return this.numberOfActiveRunners;
    }
    setNumberOfActiveRunners(numberOfActiveRunners) {
        this.numberOfActiveRunners = numberOfActiveRunners;
    }
    getLastMatchTime() {
        return this.lastMatchTime;
    }
    setLastMatchTime(lastMatchTime) {
        this.lastMatchTime = lastMatchTime;
    }
    getTotalMatched() {
        return this.totalMatched;
    }
    setTotalMatched(totalMatched) {
        this.totalMatched = totalMatched;
    }
    getTotalAvailable() {
        return this.totalAvailable;
    }
    setTotalAvailable(totalAvailable) {
        this.totalAvailable = totalAvailable;
    }
    getKeyLineDescription() {
        return this.keyLineDescription;
    }
    setKeyLineDescription(keyLineDescription) {
        this.keyLineDescription = keyLineDescription;
    }
}
exports.default = MarketState;
//# sourceMappingURL=MarketState.js.map