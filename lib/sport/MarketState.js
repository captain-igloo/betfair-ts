"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const KeyLineDescription_1 = require("../sport/KeyLineDescription");
class MarketState extends JsonMember_1.default {
    constructor(status = '', betDelay = null, bspReconciled = null, complete = null, inplay = null, numberOfActiveRunners = null, lastMatchTime = null, totalMatched = null, totalAvailable = null, keyLineDescription = new KeyLineDescription_1.default()) {
        super();
        this.status = status;
        this.betDelay = betDelay;
        this.bspReconciled = bspReconciled;
        this.complete = complete;
        this.inplay = inplay;
        this.numberOfActiveRunners = numberOfActiveRunners;
        this.lastMatchTime = lastMatchTime;
        this.totalMatched = totalMatched;
        this.totalAvailable = totalAvailable;
        this.keyLineDescription = keyLineDescription;
    }
    fromJson(json) {
        if ('status' in json) {
            this.status = json.status;
        }
        if ('betDelay' in json) {
            this.betDelay = json.betDelay;
        }
        if ('bspReconciled' in json) {
            this.bspReconciled = json.bspReconciled;
        }
        if ('complete' in json) {
            this.complete = json.complete;
        }
        if ('inplay' in json) {
            this.inplay = json.inplay;
        }
        if ('numberOfActiveRunners' in json) {
            this.numberOfActiveRunners = json.numberOfActiveRunners;
        }
        if ('lastMatchTime' in json) {
            this.lastMatchTime = new Date(json.lastMatchTime);
        }
        if ('totalMatched' in json) {
            this.totalMatched = json.totalMatched;
        }
        if ('totalAvailable' in json) {
            this.totalAvailable = json.totalAvailable;
        }
        if ('keyLineDescription' in json) {
            this.keyLineDescription.fromJson(json.keyLineDescription);
        }
    }
    toJson() {
        const json = {};
        if (this.status !== '') {
            json.status = this.status;
        }
        if (this.betDelay !== null) {
            json.betDelay = this.betDelay;
        }
        if (this.bspReconciled !== null) {
            json.bspReconciled = this.bspReconciled;
        }
        if (this.complete !== null) {
            json.complete = this.complete;
        }
        if (this.inplay !== null) {
            json.inplay = this.inplay;
        }
        if (this.numberOfActiveRunners !== null) {
            json.numberOfActiveRunners = this.numberOfActiveRunners;
        }
        if (this.lastMatchTime !== null) {
            json.lastMatchTime = this.lastMatchTime.toISOString();
        }
        if (this.totalMatched !== null) {
            json.totalMatched = this.totalMatched;
        }
        if (this.totalAvailable !== null) {
            json.totalAvailable = this.totalAvailable;
        }
        if (this.keyLineDescription.isValid()) {
            json.keyLineDescription = this.keyLineDescription.toJson();
        }
        return json;
    }
    isValid() {
        return this.status !== '' &&
            this.betDelay !== null &&
            this.bspReconciled !== null &&
            this.complete !== null &&
            this.inplay !== null &&
            this.numberOfActiveRunners !== null &&
            this.lastMatchTime !== null &&
            this.totalMatched !== null &&
            this.totalAvailable !== null;
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