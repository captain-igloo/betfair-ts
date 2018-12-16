"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const MarketBettingType_1 = require("../sport/enum/MarketBettingType");
const MarketLineRangeInfo_1 = require("../sport/MarketLineRangeInfo");
const PriceLadderDescription_1 = require("../sport/PriceLadderDescription");
class MarketDescription extends JsonMember_1.default {
    constructor(persistenceEnabled = null, bspMarket = null, marketTime = null, suspendTime = null, settleTime = null, bettingType = new MarketBettingType_1.default(), turnInPlayEnabled = null, marketType = '', regulator = '', marketBaseRate = null, discountAllowed = null, wallet = '', rules = '', rulesHasDate = null, clarifications = '', eachWayDivisor = null, lineRangeInfo = new MarketLineRangeInfo_1.default(), raceType = '', priceLadderDescription = new PriceLadderDescription_1.default()) {
        super();
        this.persistenceEnabled = persistenceEnabled;
        this.bspMarket = bspMarket;
        this.marketTime = marketTime;
        this.suspendTime = suspendTime;
        this.settleTime = settleTime;
        this.bettingType = bettingType;
        this.turnInPlayEnabled = turnInPlayEnabled;
        this.marketType = marketType;
        this.regulator = regulator;
        this.marketBaseRate = marketBaseRate;
        this.discountAllowed = discountAllowed;
        this.wallet = wallet;
        this.rules = rules;
        this.rulesHasDate = rulesHasDate;
        this.clarifications = clarifications;
        this.eachWayDivisor = eachWayDivisor;
        this.lineRangeInfo = lineRangeInfo;
        this.raceType = raceType;
        this.priceLadderDescription = priceLadderDescription;
    }
    fromJson(json) {
        if ('persistenceEnabled' in json) {
            this.persistenceEnabled = json.persistenceEnabled;
        }
        if ('bspMarket' in json) {
            this.bspMarket = json.bspMarket;
        }
        if ('marketTime' in json) {
            this.marketTime = new Date(json.marketTime);
        }
        if ('suspendTime' in json) {
            this.suspendTime = new Date(json.suspendTime);
        }
        if ('settleTime' in json) {
            this.settleTime = new Date(json.settleTime);
        }
        if ('bettingType' in json) {
            this.bettingType.setValue(json.bettingType);
        }
        if ('turnInPlayEnabled' in json) {
            this.turnInPlayEnabled = json.turnInPlayEnabled;
        }
        if ('marketType' in json) {
            this.marketType = json.marketType;
        }
        if ('regulator' in json) {
            this.regulator = json.regulator;
        }
        if ('marketBaseRate' in json) {
            this.marketBaseRate = json.marketBaseRate;
        }
        if ('discountAllowed' in json) {
            this.discountAllowed = json.discountAllowed;
        }
        if ('wallet' in json) {
            this.wallet = json.wallet;
        }
        if ('rules' in json) {
            this.rules = json.rules;
        }
        if ('rulesHasDate' in json) {
            this.rulesHasDate = json.rulesHasDate;
        }
        if ('clarifications' in json) {
            this.clarifications = json.clarifications;
        }
        if ('eachWayDivisor' in json) {
            this.eachWayDivisor = json.eachWayDivisor;
        }
        if ('lineRangeInfo' in json) {
            this.lineRangeInfo.fromJson(json.lineRangeInfo);
        }
        if ('raceType' in json) {
            this.raceType = json.raceType;
        }
        if ('priceLadderDescription' in json) {
            this.priceLadderDescription.fromJson(json.priceLadderDescription);
        }
    }
    toJson() {
        const json = {};
        if (this.persistenceEnabled !== null) {
            json.persistenceEnabled = this.persistenceEnabled;
        }
        if (this.bspMarket !== null) {
            json.bspMarket = this.bspMarket;
        }
        if (this.marketTime !== null) {
            json.marketTime = this.marketTime.toISOString();
        }
        if (this.suspendTime !== null) {
            json.suspendTime = this.suspendTime.toISOString();
        }
        if (this.settleTime !== null) {
            json.settleTime = this.settleTime.toISOString();
        }
        if (this.bettingType.isValid()) {
            json.bettingType = this.bettingType;
        }
        if (this.turnInPlayEnabled !== null) {
            json.turnInPlayEnabled = this.turnInPlayEnabled;
        }
        if (this.marketType !== null) {
            json.marketType = this.marketType;
        }
        if (this.regulator !== null) {
            json.regulator = this.regulator;
        }
        if (this.marketBaseRate !== null) {
            json.marketBaseRate = this.marketBaseRate;
        }
        if (this.discountAllowed !== null) {
            json.discountAllowed = this.discountAllowed;
        }
        if (this.wallet !== null) {
            json.wallet = this.wallet;
        }
        if (this.rules !== null) {
            json.rules = this.rules;
        }
        if (this.rulesHasDate !== null) {
            json.rulesHasDate = this.rulesHasDate;
        }
        if (this.clarifications !== null) {
            json.clarifications = this.clarifications;
        }
        if (this.eachWayDivisor !== null) {
            json.eachWayDivisor = this.eachWayDivisor;
        }
        if (this.lineRangeInfo.isValid()) {
            json.lineRangeInfo = this.lineRangeInfo.toJson();
        }
        if (this.raceType !== null) {
            json.raceType = this.raceType;
        }
        if (this.priceLadderDescription.isValid()) {
            json.priceLadderDescription = this.priceLadderDescription.toJson();
        }
        return json;
    }
    isValid() {
        return this.persistenceEnabled !== null &&
            this.bspMarket !== null &&
            this.marketTime !== null &&
            this.suspendTime !== null &&
            this.bettingType.isValid() &&
            this.turnInPlayEnabled !== null &&
            this.marketType !== null &&
            this.regulator !== null &&
            this.marketBaseRate !== null &&
            this.discountAllowed !== null;
    }
    getPersistenceEnabled() {
        return this.persistenceEnabled;
    }
    setPersistenceEnabled(persistenceEnabled) {
        this.persistenceEnabled = persistenceEnabled;
    }
    getBspMarket() {
        return this.bspMarket;
    }
    setBspMarket(bspMarket) {
        this.bspMarket = bspMarket;
    }
    getMarketTime() {
        return this.marketTime;
    }
    setMarketTime(marketTime) {
        this.marketTime = marketTime;
    }
    getSuspendTime() {
        return this.suspendTime;
    }
    setSuspendTime(suspendTime) {
        this.suspendTime = suspendTime;
    }
    getSettleTime() {
        return this.settleTime;
    }
    setSettleTime(settleTime) {
        this.settleTime = settleTime;
    }
    getBettingType() {
        return this.bettingType;
    }
    setBettingType(bettingType) {
        this.bettingType = bettingType;
    }
    getTurnInPlayEnabled() {
        return this.turnInPlayEnabled;
    }
    setTurnInPlayEnabled(turnInPlayEnabled) {
        this.turnInPlayEnabled = turnInPlayEnabled;
    }
    getMarketType() {
        return this.marketType;
    }
    setMarketType(marketType) {
        this.marketType = marketType;
    }
    getRegulator() {
        return this.regulator;
    }
    setRegulator(regulator) {
        this.regulator = regulator;
    }
    getMarketBaseRate() {
        return this.marketBaseRate;
    }
    setMarketBaseRate(marketBaseRate) {
        this.marketBaseRate = marketBaseRate;
    }
    getDiscountAllowed() {
        return this.discountAllowed;
    }
    setDiscountAllowed(discountAllowed) {
        this.discountAllowed = discountAllowed;
    }
    getWallet() {
        return this.wallet;
    }
    setWallet(wallet) {
        this.wallet = wallet;
    }
    getRules() {
        return this.rules;
    }
    setRules(rules) {
        this.rules = rules;
    }
    getRulesHasDate() {
        return this.rulesHasDate;
    }
    setRulesHasDate(rulesHasDate) {
        this.rulesHasDate = rulesHasDate;
    }
    getClarifications() {
        return this.clarifications;
    }
    setClarifications(clarifications) {
        this.clarifications = clarifications;
    }
    getEachWayDivisor() {
        return this.eachWayDivisor;
    }
    setEachWayDivisor(eachWayDivisor) {
        this.eachWayDivisor = eachWayDivisor;
    }
    getLineRangeInfo() {
        return this.lineRangeInfo;
    }
    setLineRangeInfo(lineRangeInfo) {
        this.lineRangeInfo = lineRangeInfo;
    }
    getRaceType() {
        return this.raceType;
    }
    setRaceType(raceType) {
        this.raceType = raceType;
    }
    getPriceLadderDescription() {
        return this.priceLadderDescription;
    }
    setPriceLadderDescription(priceLadderDescription) {
        this.priceLadderDescription = priceLadderDescription;
    }
}
exports.default = MarketDescription;
