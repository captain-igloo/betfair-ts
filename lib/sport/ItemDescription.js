"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class ItemDescription extends JsonMember_1.default {
    constructor(eventTypeDesc = '', eventDesc = '', marketDesc = '', marketType = '', marketStartTime = null, runnerDesc = '', numberOfWinners = null, eachWayDivisor = null) {
        super();
        this.eventTypeDesc = eventTypeDesc;
        this.eventDesc = eventDesc;
        this.marketDesc = marketDesc;
        this.marketType = marketType;
        this.marketStartTime = marketStartTime;
        this.runnerDesc = runnerDesc;
        this.numberOfWinners = numberOfWinners;
        this.eachWayDivisor = eachWayDivisor;
    }
    fromJson(json) {
        if ('eventTypeDesc' in json) {
            this.eventTypeDesc = json.eventTypeDesc;
        }
        if ('eventDesc' in json) {
            this.eventDesc = json.eventDesc;
        }
        if ('marketDesc' in json) {
            this.marketDesc = json.marketDesc;
        }
        if ('marketType' in json) {
            this.marketType = json.marketType;
        }
        if ('marketStartTime' in json) {
            this.marketStartTime = new Date(json.marketStartTime);
        }
        if ('runnerDesc' in json) {
            this.runnerDesc = json.runnerDesc;
        }
        if ('numberOfWinners' in json) {
            this.numberOfWinners = json.numberOfWinners;
        }
        if ('eachWayDivisor' in json) {
            this.eachWayDivisor = json.eachWayDivisor;
        }
    }
    toJson() {
        const json = {};
        if (this.eventTypeDesc !== '') {
            json.eventTypeDesc = this.eventTypeDesc;
        }
        if (this.eventDesc !== '') {
            json.eventDesc = this.eventDesc;
        }
        if (this.marketDesc !== '') {
            json.marketDesc = this.marketDesc;
        }
        if (this.marketType !== '') {
            json.marketType = this.marketType;
        }
        if (this.marketStartTime !== null) {
            json.marketStartTime = this.marketStartTime.toISOString();
        }
        if (this.runnerDesc !== '') {
            json.runnerDesc = this.runnerDesc;
        }
        if (this.numberOfWinners !== null) {
            json.numberOfWinners = this.numberOfWinners;
        }
        if (this.eachWayDivisor !== null) {
            json.eachWayDivisor = this.eachWayDivisor;
        }
        return json;
    }
    isValid() {
        return true;
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