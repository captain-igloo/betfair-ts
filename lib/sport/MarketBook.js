"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const MarketStatus_1 = require("../sport/enum/MarketStatus");
const KeyLineDescription_1 = require("../sport/KeyLineDescription");
const Runner_1 = require("../sport/Runner");
class MarketBook extends JsonMember_1.default {
    constructor(options) {
        super();
        this.marketId = options.marketId;
        this.isMarketDataDelayed = options.isMarketDataDelayed;
        if (options.status) {
            this.status = this.fromJson(options.status, MarketStatus_1.default);
        }
        this.betDelay = options.betDelay;
        this.bspReconciled = options.bspReconciled;
        this.complete = options.complete;
        this.inplay = options.inplay;
        this.numberOfWinners = options.numberOfWinners;
        this.numberOfRunners = options.numberOfRunners;
        this.numberOfActiveRunners = options.numberOfActiveRunners;
        if (options.lastMatchTime) {
            this.lastMatchTime = this.fromJson(options.lastMatchTime, Date);
        }
        this.totalMatched = options.totalMatched;
        this.totalAvailable = options.totalAvailable;
        this.crossMatching = options.crossMatching;
        this.runnersVoidable = options.runnersVoidable;
        this.version = options.version;
        if (options.runners) {
            this.runners = this.arrayFromJson(options.runners, Runner_1.default);
        }
        this.keyLineDescription = options.keyLineDescription && this.fromJson(options.keyLineDescription, KeyLineDescription_1.default);
    }
    toJson() {
        const json = {
            marketId: this.marketId,
            isMarketDataDelayed: this.isMarketDataDelayed,
        };
        if (this.status) {
            json.status = this.status.getValue();
        }
        if (typeof this.betDelay !== 'undefined') {
            json.betDelay = this.betDelay;
        }
        if (typeof this.bspReconciled !== 'undefined') {
            json.bspReconciled = this.bspReconciled;
        }
        if (typeof this.complete !== 'undefined') {
            json.complete = this.complete;
        }
        if (typeof this.inplay !== 'undefined') {
            json.inplay = this.inplay;
        }
        if (typeof this.numberOfWinners !== 'undefined') {
            json.numberOfWinners = this.numberOfWinners;
        }
        if (typeof this.numberOfRunners !== 'undefined') {
            json.numberOfRunners = this.numberOfRunners;
        }
        if (typeof this.numberOfActiveRunners !== 'undefined') {
            json.numberOfActiveRunners = this.numberOfActiveRunners;
        }
        if (typeof this.lastMatchTime !== 'undefined') {
            json.lastMatchTime = this.lastMatchTime.toISOString();
        }
        if (typeof this.totalMatched !== 'undefined') {
            json.totalMatched = this.totalMatched;
        }
        if (typeof this.totalAvailable !== 'undefined') {
            json.totalAvailable = this.totalAvailable;
        }
        if (typeof this.crossMatching !== 'undefined') {
            json.crossMatching = this.crossMatching;
        }
        if (typeof this.runnersVoidable !== 'undefined') {
            json.runnersVoidable = this.runnersVoidable;
        }
        if (typeof this.version !== 'undefined') {
            json.version = this.version;
        }
        if (this.runners && this.runners.length > 0) {
            json.runners = this.runners.map((value) => value.toJson());
        }
        if (this.keyLineDescription) {
            json.keyLineDescription = this.keyLineDescription.toJson();
        }
        return json;
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
//# sourceMappingURL=MarketBook.js.map