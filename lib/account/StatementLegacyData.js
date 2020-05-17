"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class StatementLegacyData extends JsonMember_1.default {
    constructor(options) {
        super();
        this.avgPrice = options.avgPrice;
        this.betSize = options.betSize;
        this.betType = options.betType;
        this.betCategoryType = options.betCategoryType;
        this.commissionRate = options.commissionRate;
        this.eventId = options.eventId;
        this.eventTypeId = options.eventTypeId;
        this.fullMarketName = options.fullMarketName;
        this.grossBetAmount = options.grossBetAmount;
        this.marketName = options.marketName;
        this.marketType = options.marketType;
        if (options.placedDate) {
            this.placedDate = this.fromJson(options.placedDate, Date);
        }
        this.selectionId = options.selectionId;
        this.selectionName = options.selectionName;
        if (options.startDate) {
            this.startDate = this.fromJson(options.startDate, Date);
        }
        this.transactionType = options.transactionType;
        this.transactionId = options.transactionId;
        this.winLose = options.winLose;
    }
    toJson() {
        const json = {};
        if (typeof this.avgPrice !== 'undefined') {
            json.avgPrice = this.avgPrice;
        }
        if (typeof this.betSize !== 'undefined') {
            json.betSize = this.betSize;
        }
        if (typeof this.betType !== 'undefined') {
            json.betType = this.betType;
        }
        if (typeof this.betCategoryType !== 'undefined') {
            json.betCategoryType = this.betCategoryType;
        }
        if (typeof this.commissionRate !== 'undefined') {
            json.commissionRate = this.commissionRate;
        }
        if (typeof this.eventId !== 'undefined') {
            json.eventId = this.eventId;
        }
        if (typeof this.eventTypeId !== 'undefined') {
            json.eventTypeId = this.eventTypeId;
        }
        if (typeof this.fullMarketName !== 'undefined') {
            json.fullMarketName = this.fullMarketName;
        }
        if (typeof this.grossBetAmount !== 'undefined') {
            json.grossBetAmount = this.grossBetAmount;
        }
        if (typeof this.marketName !== 'undefined') {
            json.marketName = this.marketName;
        }
        if (typeof this.marketType !== 'undefined') {
            json.marketType = this.marketType;
        }
        if (typeof this.placedDate !== 'undefined') {
            json.placedDate = this.placedDate.toISOString();
        }
        if (typeof this.selectionId !== 'undefined') {
            json.selectionId = this.selectionId;
        }
        if (typeof this.selectionName !== 'undefined') {
            json.selectionName = this.selectionName;
        }
        if (typeof this.startDate !== 'undefined') {
            json.startDate = this.startDate.toISOString();
        }
        if (typeof this.transactionType !== 'undefined') {
            json.transactionType = this.transactionType;
        }
        if (typeof this.transactionId !== 'undefined') {
            json.transactionId = this.transactionId;
        }
        if (typeof this.winLose !== 'undefined') {
            json.winLose = this.winLose;
        }
        return json;
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