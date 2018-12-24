"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class StatementLegacyData extends JsonMember_1.default {
    constructor(avgPrice = null, betSize = null, betType = '', betCategoryType = '', commissionRate = '', eventId = null, eventTypeId = null, fullMarketName = '', grossBetAmount = null, marketName = '', marketType = '', placedDate = null, selectionId = null, selectionName = '', startDate = null, transactionType = '', transactionId = null, winLose = '') {
        super();
        this.avgPrice = avgPrice;
        this.betSize = betSize;
        this.betType = betType;
        this.betCategoryType = betCategoryType;
        this.commissionRate = commissionRate;
        this.eventId = eventId;
        this.eventTypeId = eventTypeId;
        this.fullMarketName = fullMarketName;
        this.grossBetAmount = grossBetAmount;
        this.marketName = marketName;
        this.marketType = marketType;
        this.placedDate = placedDate;
        this.selectionId = selectionId;
        this.selectionName = selectionName;
        this.startDate = startDate;
        this.transactionType = transactionType;
        this.transactionId = transactionId;
        this.winLose = winLose;
    }
    fromJson(json) {
        if ('avgPrice' in json) {
            this.avgPrice = json.avgPrice;
        }
        if ('betSize' in json) {
            this.betSize = json.betSize;
        }
        if ('betType' in json) {
            this.betType = json.betType;
        }
        if ('betCategoryType' in json) {
            this.betCategoryType = json.betCategoryType;
        }
        if ('commissionRate' in json) {
            this.commissionRate = json.commissionRate;
        }
        if ('eventId' in json) {
            this.eventId = json.eventId;
        }
        if ('eventTypeId' in json) {
            this.eventTypeId = json.eventTypeId;
        }
        if ('fullMarketName' in json) {
            this.fullMarketName = json.fullMarketName;
        }
        if ('grossBetAmount' in json) {
            this.grossBetAmount = json.grossBetAmount;
        }
        if ('marketName' in json) {
            this.marketName = json.marketName;
        }
        if ('marketType' in json) {
            this.marketType = json.marketType;
        }
        if ('placedDate' in json) {
            this.placedDate = new Date(json.placedDate);
        }
        if ('selectionId' in json) {
            this.selectionId = json.selectionId;
        }
        if ('selectionName' in json) {
            this.selectionName = json.selectionName;
        }
        if ('startDate' in json) {
            this.startDate = new Date(json.startDate);
        }
        if ('transactionType' in json) {
            this.transactionType = json.transactionType;
        }
        if ('transactionId' in json) {
            this.transactionId = json.transactionId;
        }
        if ('winLose' in json) {
            this.winLose = json.winLose;
        }
    }
    toJson() {
        const json = {};
        if (this.avgPrice !== null) {
            json.avgPrice = this.avgPrice;
        }
        if (this.betSize !== null) {
            json.betSize = this.betSize;
        }
        if (this.betType !== null) {
            json.betType = this.betType;
        }
        if (this.betCategoryType !== null) {
            json.betCategoryType = this.betCategoryType;
        }
        if (this.commissionRate !== null) {
            json.commissionRate = this.commissionRate;
        }
        if (this.eventId !== null) {
            json.eventId = this.eventId;
        }
        if (this.eventTypeId !== null) {
            json.eventTypeId = this.eventTypeId;
        }
        if (this.fullMarketName !== null) {
            json.fullMarketName = this.fullMarketName;
        }
        if (this.grossBetAmount !== null) {
            json.grossBetAmount = this.grossBetAmount;
        }
        if (this.marketName !== null) {
            json.marketName = this.marketName;
        }
        if (this.marketType !== null) {
            json.marketType = this.marketType;
        }
        if (this.placedDate !== null) {
            json.placedDate = this.placedDate.toISOString();
        }
        if (this.selectionId !== null) {
            json.selectionId = this.selectionId;
        }
        if (this.selectionName !== null) {
            json.selectionName = this.selectionName;
        }
        if (this.startDate !== null) {
            json.startDate = this.startDate.toISOString();
        }
        if (this.transactionType !== null) {
            json.transactionType = this.transactionType;
        }
        if (this.transactionId !== null) {
            json.transactionId = this.transactionId;
        }
        if (this.winLose !== null) {
            json.winLose = this.winLose;
        }
        return json;
    }
    isValid() {
        return true;
    }
    getAvgPrice() {
        return this.avgPrice;
    }
    setAvgPrice(avgPrice) {
        this.avgPrice = avgPrice;
    }
    getBetSize() {
        return this.betSize;
    }
    setBetSize(betSize) {
        this.betSize = betSize;
    }
    getBetType() {
        return this.betType;
    }
    setBetType(betType) {
        this.betType = betType;
    }
    getBetCategoryType() {
        return this.betCategoryType;
    }
    setBetCategoryType(betCategoryType) {
        this.betCategoryType = betCategoryType;
    }
    getCommissionRate() {
        return this.commissionRate;
    }
    setCommissionRate(commissionRate) {
        this.commissionRate = commissionRate;
    }
    getEventId() {
        return this.eventId;
    }
    setEventId(eventId) {
        this.eventId = eventId;
    }
    getEventTypeId() {
        return this.eventTypeId;
    }
    setEventTypeId(eventTypeId) {
        this.eventTypeId = eventTypeId;
    }
    getFullMarketName() {
        return this.fullMarketName;
    }
    setFullMarketName(fullMarketName) {
        this.fullMarketName = fullMarketName;
    }
    getGrossBetAmount() {
        return this.grossBetAmount;
    }
    setGrossBetAmount(grossBetAmount) {
        this.grossBetAmount = grossBetAmount;
    }
    getMarketName() {
        return this.marketName;
    }
    setMarketName(marketName) {
        this.marketName = marketName;
    }
    getMarketType() {
        return this.marketType;
    }
    setMarketType(marketType) {
        this.marketType = marketType;
    }
    getPlacedDate() {
        return this.placedDate;
    }
    setPlacedDate(placedDate) {
        this.placedDate = placedDate;
    }
    getSelectionId() {
        return this.selectionId;
    }
    setSelectionId(selectionId) {
        this.selectionId = selectionId;
    }
    getSelectionName() {
        return this.selectionName;
    }
    setSelectionName(selectionName) {
        this.selectionName = selectionName;
    }
    getStartDate() {
        return this.startDate;
    }
    setStartDate(startDate) {
        this.startDate = startDate;
    }
    getTransactionType() {
        return this.transactionType;
    }
    setTransactionType(transactionType) {
        this.transactionType = transactionType;
    }
    getTransactionId() {
        return this.transactionId;
    }
    setTransactionId(transactionId) {
        this.transactionId = transactionId;
    }
    getWinLose() {
        return this.winLose;
    }
    setWinLose(winLose) {
        this.winLose = winLose;
    }
}
exports.default = StatementLegacyData;
//# sourceMappingURL=StatementLegacyData.js.map