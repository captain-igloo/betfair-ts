"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class ItemDescription extends JsonMember_1.default {
    constructor(options) {
        super();
        this.eventTypeDesc = options.eventTypeDesc;
        this.eventDesc = options.eventDesc;
        this.marketDesc = options.marketDesc;
        this.marketType = options.marketType;
        if (options.marketStartTime) {
            this.marketStartTime = this.fromJson(options.marketStartTime, Date);
        }
        this.runnerDesc = options.runnerDesc;
        this.numberOfWinners = options.numberOfWinners;
        this.eachWayDivisor = options.eachWayDivisor;
    }
    toJson() {
        const json = {};
        if (typeof this.eventTypeDesc !== 'undefined') {
            json.eventTypeDesc = this.eventTypeDesc;
        }
        if (typeof this.eventDesc !== 'undefined') {
            json.eventDesc = this.eventDesc;
        }
        if (typeof this.marketDesc !== 'undefined') {
            json.marketDesc = this.marketDesc;
        }
        if (typeof this.marketType !== 'undefined') {
            json.marketType = this.marketType;
        }
        if (typeof this.marketStartTime !== 'undefined') {
            json.marketStartTime = this.marketStartTime.toISOString();
        }
        if (typeof this.runnerDesc !== 'undefined') {
            json.runnerDesc = this.runnerDesc;
        }
        if (typeof this.numberOfWinners !== 'undefined') {
            json.numberOfWinners = this.numberOfWinners;
        }
        if (typeof this.eachWayDivisor !== 'undefined') {
            json.eachWayDivisor = this.eachWayDivisor;
        }
        return json;
    }
    getEventTypeDesc() {
        return this.eventTypeDesc;
    }
    setEventTypeDesc(eventTypeDesc) {
        this.eventTypeDesc = eventTypeDesc;
    }
    getEventDesc() {
        return this.eventDesc;
    }
    setEventDesc(eventDesc) {
        this.eventDesc = eventDesc;
    }
    getMarketDesc() {
        return this.marketDesc;
    }
    setMarketDesc(marketDesc) {
        this.marketDesc = marketDesc;
    }
    getMarketType() {
        return this.marketType;
    }
    setMarketType(marketType) {
        this.marketType = marketType;
    }
    getMarketStartTime() {
        return this.marketStartTime;
    }
    setMarketStartTime(marketStartTime) {
        this.marketStartTime = marketStartTime;
    }
    getRunnerDesc() {
        return this.runnerDesc;
    }
    setRunnerDesc(runnerDesc) {
        this.runnerDesc = runnerDesc;
    }
    getNumberOfWinners() {
        return this.numberOfWinners;
    }
    setNumberOfWinners(numberOfWinners) {
        this.numberOfWinners = numberOfWinners;
    }
    getEachWayDivisor() {
        return this.eachWayDivisor;
    }
    setEachWayDivisor(eachWayDivisor) {
        this.eachWayDivisor = eachWayDivisor;
    }
}
exports.default = ItemDescription;
//# sourceMappingURL=ItemDescription.js.map