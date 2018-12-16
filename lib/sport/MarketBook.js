"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const MarketStatus_1 = require("../sport/enum/MarketStatus");
const Runner_1 = require("../sport/Runner");
const KeyLineDescription_1 = require("../sport/KeyLineDescription");
class MarketBook extends JsonMember_1.default {
    constructor(marketId = '', isMarketDataDelayed = null, status = new MarketStatus_1.default(), betDelay = null, bspReconciled = null, complete = null, inplay = null, numberOfWinners = null, numberOfRunners = null, numberOfActiveRunners = null, lastMatchTime = null, totalMatched = null, totalAvailable = null, crossMatching = null, runnersVoidable = null, version = null, runners = [], keyLineDescription = new KeyLineDescription_1.default()) {
        super();
        this.marketId = marketId;
        this.isMarketDataDelayed = isMarketDataDelayed;
        this.status = status;
        this.betDelay = betDelay;
        this.bspReconciled = bspReconciled;
        this.complete = complete;
        this.inplay = inplay;
        this.numberOfWinners = numberOfWinners;
        this.numberOfRunners = numberOfRunners;
        this.numberOfActiveRunners = numberOfActiveRunners;
        this.lastMatchTime = lastMatchTime;
        this.totalMatched = totalMatched;
        this.totalAvailable = totalAvailable;
        this.crossMatching = crossMatching;
        this.runnersVoidable = runnersVoidable;
        this.version = version;
        this.runners = runners;
        this.keyLineDescription = keyLineDescription;
    }
    fromJson(json) {
        if ('marketId' in json) {
            this.marketId = json.marketId;
        }
        if ('isMarketDataDelayed' in json) {
            this.isMarketDataDelayed = json.isMarketDataDelayed;
        }
        if ('status' in json) {
            this.status.setValue(json.status);
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
        if ('numberOfWinners' in json) {
            this.numberOfWinners = json.numberOfWinners;
        }
        if ('numberOfRunners' in json) {
            this.numberOfRunners = json.numberOfRunners;
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
        if ('crossMatching' in json) {
            this.crossMatching = json.crossMatching;
        }
        if ('runnersVoidable' in json) {
            this.runnersVoidable = json.runnersVoidable;
        }
        if ('version' in json) {
            this.version = json.version;
        }
        if ('runners' in json) {
            this.runners = json.runners.map((runnersJson) => {
                const element = new Runner_1.default();
                element.fromJson(runnersJson);
                return element;
            });
        }
        if ('keyLineDescription' in json) {
            this.keyLineDescription.fromJson(json.keyLineDescription);
        }
    }
    toJson() {
        const json = {};
        if (this.marketId !== null) {
            json.marketId = this.marketId;
        }
        if (this.isMarketDataDelayed !== null) {
            json.isMarketDataDelayed = this.isMarketDataDelayed;
        }
        if (this.status.isValid()) {
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
        if (this.numberOfWinners !== null) {
            json.numberOfWinners = this.numberOfWinners;
        }
        if (this.numberOfRunners !== null) {
            json.numberOfRunners = this.numberOfRunners;
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
        if (this.crossMatching !== null) {
            json.crossMatching = this.crossMatching;
        }
        if (this.runnersVoidable !== null) {
            json.runnersVoidable = this.runnersVoidable;
        }
        if (this.version !== null) {
            json.version = this.version;
        }
        if (this.runners.length > 0) {
            json.runners = this.runners.map((value) => value.toJson());
        }
        if (this.keyLineDescription.isValid()) {
            json.keyLineDescription = this.keyLineDescription.toJson();
        }
        return json;
    }
    isValid() {
        return this.marketId !== null &&
            this.isMarketDataDelayed !== null;
    }
    getMarketId() {
        return this.marketId;
    }
    setMarketId(marketId) {
        this.marketId = marketId;
    }
    getIsMarketDataDelayed() {
        return this.isMarketDataDelayed;
    }
    setIsMarketDataDelayed(isMarketDataDelayed) {
        this.isMarketDataDelayed = isMarketDataDelayed;
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
    getNumberOfWinners() {
        return this.numberOfWinners;
    }
    setNumberOfWinners(numberOfWinners) {
        this.numberOfWinners = numberOfWinners;
    }
    getNumberOfRunners() {
        return this.numberOfRunners;
    }
    setNumberOfRunners(numberOfRunners) {
        this.numberOfRunners = numberOfRunners;
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
    getCrossMatching() {
        return this.crossMatching;
    }
    setCrossMatching(crossMatching) {
        this.crossMatching = crossMatching;
    }
    getRunnersVoidable() {
        return this.runnersVoidable;
    }
    setRunnersVoidable(runnersVoidable) {
        this.runnersVoidable = runnersVoidable;
    }
    getVersion() {
        return this.version;
    }
    setVersion(version) {
        this.version = version;
    }
    getRunners() {
        return this.runners;
    }
    setRunners(runners) {
        this.runners = runners;
    }
    getKeyLineDescription() {
        return this.keyLineDescription;
    }
    setKeyLineDescription(keyLineDescription) {
        this.keyLineDescription = keyLineDescription;
    }
}
exports.default = MarketBook;
