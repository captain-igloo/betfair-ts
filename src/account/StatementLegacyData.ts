/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export interface IStatementLegacyDataOptions {
    avgPrice?: number;
    betSize?: number;
    betType?: string;
    betCategoryType?: string;
    commissionRate?: string;
    eventId?: number;
    eventTypeId?: number;
    fullMarketName?: string;
    grossBetAmount?: number;
    marketName?: string;
    marketType?: string;
    placedDate?: Date | string;
    selectionId?: number;
    selectionName?: string;
    startDate?: Date | string;
    transactionType?: string;
    transactionId?: number;
    winLose?: string;
}

export default class StatementLegacyData extends JsonMember {
    private avgPrice?: number;
    private betSize?: number;
    private betType?: string;
    private betCategoryType?: string;
    private commissionRate?: string;
    private eventId?: number;
    private eventTypeId?: number;
    private fullMarketName?: string;
    private grossBetAmount?: number;
    private marketName?: string;
    private marketType?: string;
    private placedDate?: Date;
    private selectionId?: number;
    private selectionName?: string;
    private startDate?: Date;
    private transactionType?: string;
    private transactionId?: number;
    private winLose?: string;

    constructor(options: IStatementLegacyDataOptions) {
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

    public toJson(): IStatementLegacyDataOptions {
        const json: IStatementLegacyDataOptions = {
        };
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

    public getAvgPrice(): number | undefined {
        return this.avgPrice;
    }
    public setAvgPrice(avgPrice: number): void {
        this.avgPrice = avgPrice;
    }
    public getBetSize(): number | undefined {
        return this.betSize;
    }
    public setBetSize(betSize: number): void {
        this.betSize = betSize;
    }
    public getBetType(): string | undefined {
        return this.betType;
    }
    public setBetType(betType: string): void {
        this.betType = betType;
    }
    public getBetCategoryType(): string | undefined {
        return this.betCategoryType;
    }
    public setBetCategoryType(betCategoryType: string): void {
        this.betCategoryType = betCategoryType;
    }
    public getCommissionRate(): string | undefined {
        return this.commissionRate;
    }
    public setCommissionRate(commissionRate: string): void {
        this.commissionRate = commissionRate;
    }
    public getEventId(): number | undefined {
        return this.eventId;
    }
    public setEventId(eventId: number): void {
        this.eventId = eventId;
    }
    public getEventTypeId(): number | undefined {
        return this.eventTypeId;
    }
    public setEventTypeId(eventTypeId: number): void {
        this.eventTypeId = eventTypeId;
    }
    public getFullMarketName(): string | undefined {
        return this.fullMarketName;
    }
    public setFullMarketName(fullMarketName: string): void {
        this.fullMarketName = fullMarketName;
    }
    public getGrossBetAmount(): number | undefined {
        return this.grossBetAmount;
    }
    public setGrossBetAmount(grossBetAmount: number): void {
        this.grossBetAmount = grossBetAmount;
    }
    public getMarketName(): string | undefined {
        return this.marketName;
    }
    public setMarketName(marketName: string): void {
        this.marketName = marketName;
    }
    public getMarketType(): string | undefined {
        return this.marketType;
    }
    public setMarketType(marketType: string): void {
        this.marketType = marketType;
    }
    public getPlacedDate(): Date | undefined {
        return this.placedDate;
    }
    public setPlacedDate(placedDate: Date): void {
        this.placedDate = placedDate;
    }
    public getSelectionId(): number | undefined {
        return this.selectionId;
    }
    public setSelectionId(selectionId: number): void {
        this.selectionId = selectionId;
    }
    public getSelectionName(): string | undefined {
        return this.selectionName;
    }
    public setSelectionName(selectionName: string): void {
        this.selectionName = selectionName;
    }
    public getStartDate(): Date | undefined {
        return this.startDate;
    }
    public setStartDate(startDate: Date): void {
        this.startDate = startDate;
    }
    public getTransactionType(): string | undefined {
        return this.transactionType;
    }
    public setTransactionType(transactionType: string): void {
        this.transactionType = transactionType;
    }
    public getTransactionId(): number | undefined {
        return this.transactionId;
    }
    public setTransactionId(transactionId: number): void {
        this.transactionId = transactionId;
    }
    public getWinLose(): string | undefined {
        return this.winLose;
    }
    public setWinLose(winLose: string): void {
        this.winLose = winLose;
    }

}
