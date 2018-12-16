/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

export default class StatementLegacyData extends JsonMember {
    private avgPrice: number | null;
    private betSize: number | null;
    private betType: string;
    private betCategoryType: string;
    private commissionRate: string;
    private eventId: number | null;
    private eventTypeId: number | null;
    private fullMarketName: string;
    private grossBetAmount: number | null;
    private marketName: string;
    private marketType: string;
    private placedDate: Date | null;
    private selectionId: number | null;
    private selectionName: string;
    private startDate: Date | null;
    private transactionType: string;
    private transactionId: number | null;
    private winLose: string;

    constructor(
        avgPrice: number | null = null,
        betSize: number | null = null,
        betType: string = '',
        betCategoryType: string = '',
        commissionRate: string = '',
        eventId: number | null = null,
        eventTypeId: number | null = null,
        fullMarketName: string = '',
        grossBetAmount: number | null = null,
        marketName: string = '',
        marketType: string = '',
        placedDate: Date | null = null,
        selectionId: number | null = null,
        selectionName: string = '',
        startDate: Date | null = null,
        transactionType: string = '',
        transactionId: number | null = null,
        winLose: string = '',
    ) {
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

    public fromJson(json: any): void {
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

    public toJson(): any {
        const json: any = {};
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

    public isValid(): boolean {
        return true;
    }

    public getAvgPrice(): number | null {
        return this.avgPrice;
    }
    public setAvgPrice(avgPrice: number | null): void {
        this.avgPrice = avgPrice;
    }
    public getBetSize(): number | null {
        return this.betSize;
    }
    public setBetSize(betSize: number | null): void {
        this.betSize = betSize;
    }
    public getBetType(): string {
        return this.betType;
    }
    public setBetType(betType: string): void {
        this.betType = betType;
    }
    public getBetCategoryType(): string {
        return this.betCategoryType;
    }
    public setBetCategoryType(betCategoryType: string): void {
        this.betCategoryType = betCategoryType;
    }
    public getCommissionRate(): string {
        return this.commissionRate;
    }
    public setCommissionRate(commissionRate: string): void {
        this.commissionRate = commissionRate;
    }
    public getEventId(): number | null {
        return this.eventId;
    }
    public setEventId(eventId: number | null): void {
        this.eventId = eventId;
    }
    public getEventTypeId(): number | null {
        return this.eventTypeId;
    }
    public setEventTypeId(eventTypeId: number | null): void {
        this.eventTypeId = eventTypeId;
    }
    public getFullMarketName(): string {
        return this.fullMarketName;
    }
    public setFullMarketName(fullMarketName: string): void {
        this.fullMarketName = fullMarketName;
    }
    public getGrossBetAmount(): number | null {
        return this.grossBetAmount;
    }
    public setGrossBetAmount(grossBetAmount: number | null): void {
        this.grossBetAmount = grossBetAmount;
    }
    public getMarketName(): string {
        return this.marketName;
    }
    public setMarketName(marketName: string): void {
        this.marketName = marketName;
    }
    public getMarketType(): string {
        return this.marketType;
    }
    public setMarketType(marketType: string): void {
        this.marketType = marketType;
    }
    public getPlacedDate(): Date | null {
        return this.placedDate;
    }
    public setPlacedDate(placedDate: Date | null): void {
        this.placedDate = placedDate;
    }
    public getSelectionId(): number | null {
        return this.selectionId;
    }
    public setSelectionId(selectionId: number | null): void {
        this.selectionId = selectionId;
    }
    public getSelectionName(): string {
        return this.selectionName;
    }
    public setSelectionName(selectionName: string): void {
        this.selectionName = selectionName;
    }
    public getStartDate(): Date | null {
        return this.startDate;
    }
    public setStartDate(startDate: Date | null): void {
        this.startDate = startDate;
    }
    public getTransactionType(): string {
        return this.transactionType;
    }
    public setTransactionType(transactionType: string): void {
        this.transactionType = transactionType;
    }
    public getTransactionId(): number | null {
        return this.transactionId;
    }
    public setTransactionId(transactionId: number | null): void {
        this.transactionId = transactionId;
    }
    public getWinLose(): string {
        return this.winLose;
    }
    public setWinLose(winLose: string): void {
        this.winLose = winLose;
    }

}
