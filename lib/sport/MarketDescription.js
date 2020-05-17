"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const MarketBettingType_1 = require("../sport/enum/MarketBettingType");
const MarketLineRangeInfo_1 = require("../sport/MarketLineRangeInfo");
const PriceLadderDescription_1 = require("../sport/PriceLadderDescription");
class MarketDescription extends JsonMember_1.default {
    constructor(options) {
        super();
        this.persistenceEnabled = options.persistenceEnabled;
        this.bspMarket = options.bspMarket;
        this.marketTime = this.fromJson(options.marketTime, Date);
        this.suspendTime = this.fromJson(options.suspendTime, Date);
        if (options.settleTime) {
            this.settleTime = this.fromJson(options.settleTime, Date);
        }
        this.bettingType = this.fromJson(options.bettingType, MarketBettingType_1.default);
        this.turnInPlayEnabled = options.turnInPlayEnabled;
        this.marketType = options.marketType;
        this.regulator = options.regulator;
        this.marketBaseRate = options.marketBaseRate;
        this.discountAllowed = options.discountAllowed;
        this.wallet = options.wallet;
        this.rules = options.rules;
        this.rulesHasDate = options.rulesHasDate;
        this.clarifications = options.clarifications;
        this.eachWayDivisor = options.eachWayDivisor;
        this.lineRangeInfo = options.lineRangeInfo && this.fromJson(options.lineRangeInfo, MarketLineRangeInfo_1.default);
        this.raceType = options.raceType;
        this.priceLadderDescription = options.priceLadderDescription && this.fromJson(options.priceLadderDescription, PriceLadderDescription_1.default);
    }
    toJson() {
        const json = {
            persistenceEnabled: this.persistenceEnabled,
            bspMarket: this.bspMarket,
            marketTime: this.marketTime.toISOString(),
            suspendTime: this.suspendTime.toISOString(),
            bettingType: this.bettingType.getValue(),
            turnInPlayEnabled: this.turnInPlayEnabled,
            marketType: this.marketType,
            regulator: this.regulator,
            marketBaseRate: this.marketBaseRate,
            discountAllowed: this.discountAllowed,
        };
        if (typeof this.settleTime !== 'undefined') {
            json.settleTime = this.settleTime.toISOString();
        }
        if (typeof this.wallet !== 'undefined') {
            json.wallet = this.wallet;
        }
        if (typeof this.rules !== 'undefined') {
            json.rules = this.rules;
        }
        if (typeof this.rulesHasDate !== 'undefined') {
            json.rulesHasDate = this.rulesHasDate;
        }
        if (typeof this.clarifications !== 'undefined') {
            json.clarifications = this.clarifications;
        }
        if (typeof this.eachWayDivisor !== 'undefined') {
            json.eachWayDivisor = this.eachWayDivisor;
        }
        if (this.lineRangeInfo) {
            json.lineRangeInfo = this.lineRangeInfo.toJson();
        }
        if (typeof this.raceType !== 'undefined') {
            json.raceType = this.raceType;
        }
        if (this.priceLadderDescription) {
            json.priceLadderDescription = this.priceLadderDescription.toJson();
        }
        return json;
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
//# sourceMappingURL=MarketDescription.js.map