/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import MarketBettingType from '../sport/enum/MarketBettingType';
import MarketLineRangeInfo, { IMarketLineRangeInfoOptions } from '../sport/MarketLineRangeInfo';
import PriceLadderDescription, { IPriceLadderDescriptionOptions } from '../sport/PriceLadderDescription';

export interface IMarketDescriptionOptions {
    persistenceEnabled: boolean;
    bspMarket: boolean;
    marketTime: Date | string;
    suspendTime: Date | string;
    settleTime?: Date | string;
    bettingType: MarketBettingType | string;
    turnInPlayEnabled: boolean;
    marketType: string;
    regulator: string;
    marketBaseRate: number;
    discountAllowed: boolean;
    wallet?: string;
    rules?: string;
    rulesHasDate?: boolean;
    clarifications?: string;
    eachWayDivisor?: number;
    lineRangeInfo?: MarketLineRangeInfo | IMarketLineRangeInfoOptions;
    raceType?: string;
    priceLadderDescription?: PriceLadderDescription | IPriceLadderDescriptionOptions;
}

export default class MarketDescription extends JsonMember {
    private persistenceEnabled: boolean;
    private bspMarket: boolean;
    private marketTime: Date;
    private suspendTime: Date;
    private settleTime?: Date;
    private bettingType: MarketBettingType;
    private turnInPlayEnabled: boolean;
    private marketType: string;
    private regulator: string;
    private marketBaseRate: number;
    private discountAllowed: boolean;
    private wallet?: string;
    private rules?: string;
    private rulesHasDate?: boolean;
    private clarifications?: string;
    private eachWayDivisor?: number;
    private lineRangeInfo?: MarketLineRangeInfo;
    private raceType?: string;
    private priceLadderDescription?: PriceLadderDescription;

    constructor(options: IMarketDescriptionOptions) {
        super();
        this.persistenceEnabled = options.persistenceEnabled;
        this.bspMarket = options.bspMarket;
        this.marketTime = this.fromJson(options.marketTime, Date);
        this.suspendTime = this.fromJson(options.suspendTime, Date);
        if (options.settleTime) {
            this.settleTime = this.fromJson(options.settleTime, Date);
        }
        this.bettingType = this.fromJson(options.bettingType, MarketBettingType);
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
        this.lineRangeInfo = options.lineRangeInfo && this.fromJson(options.lineRangeInfo, MarketLineRangeInfo);
        this.raceType = options.raceType;
        this.priceLadderDescription = options.priceLadderDescription && this.fromJson(options.priceLadderDescription, PriceLadderDescription);
    }

    public toJson(): IMarketDescriptionOptions {
        const json: IMarketDescriptionOptions = {
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

    public getPersistenceEnabled(): boolean {
        return this.persistenceEnabled;
    }
    public setPersistenceEnabled(persistenceEnabled: boolean): void {
        this.persistenceEnabled = persistenceEnabled;
    }
    public getBspMarket(): boolean {
        return this.bspMarket;
    }
    public setBspMarket(bspMarket: boolean): void {
        this.bspMarket = bspMarket;
    }
    public getMarketTime(): Date {
        return this.marketTime;
    }
    public setMarketTime(marketTime: Date): void {
        this.marketTime = marketTime;
    }
    public getSuspendTime(): Date {
        return this.suspendTime;
    }
    public setSuspendTime(suspendTime: Date): void {
        this.suspendTime = suspendTime;
    }
    public getSettleTime(): Date | undefined {
        return this.settleTime;
    }
    public setSettleTime(settleTime: Date): void {
        this.settleTime = settleTime;
    }
    public getBettingType(): MarketBettingType {
        return this.bettingType;
    }
    public setBettingType(bettingType: MarketBettingType): void {
        this.bettingType = bettingType;
    }
    public getTurnInPlayEnabled(): boolean {
        return this.turnInPlayEnabled;
    }
    public setTurnInPlayEnabled(turnInPlayEnabled: boolean): void {
        this.turnInPlayEnabled = turnInPlayEnabled;
    }
    public getMarketType(): string {
        return this.marketType;
    }
    public setMarketType(marketType: string): void {
        this.marketType = marketType;
    }
    public getRegulator(): string {
        return this.regulator;
    }
    public setRegulator(regulator: string): void {
        this.regulator = regulator;
    }
    public getMarketBaseRate(): number {
        return this.marketBaseRate;
    }
    public setMarketBaseRate(marketBaseRate: number): void {
        this.marketBaseRate = marketBaseRate;
    }
    public getDiscountAllowed(): boolean {
        return this.discountAllowed;
    }
    public setDiscountAllowed(discountAllowed: boolean): void {
        this.discountAllowed = discountAllowed;
    }
    public getWallet(): string | undefined {
        return this.wallet;
    }
    public setWallet(wallet: string): void {
        this.wallet = wallet;
    }
    public getRules(): string | undefined {
        return this.rules;
    }
    public setRules(rules: string): void {
        this.rules = rules;
    }
    public getRulesHasDate(): boolean | undefined {
        return this.rulesHasDate;
    }
    public setRulesHasDate(rulesHasDate: boolean): void {
        this.rulesHasDate = rulesHasDate;
    }
    public getClarifications(): string | undefined {
        return this.clarifications;
    }
    public setClarifications(clarifications: string): void {
        this.clarifications = clarifications;
    }
    public getEachWayDivisor(): number | undefined {
        return this.eachWayDivisor;
    }
    public setEachWayDivisor(eachWayDivisor: number): void {
        this.eachWayDivisor = eachWayDivisor;
    }
    public getLineRangeInfo(): MarketLineRangeInfo | undefined {
        return this.lineRangeInfo;
    }
    public setLineRangeInfo(lineRangeInfo: MarketLineRangeInfo): void {
        this.lineRangeInfo = lineRangeInfo;
    }
    public getRaceType(): string | undefined {
        return this.raceType;
    }
    public setRaceType(raceType: string): void {
        this.raceType = raceType;
    }
    public getPriceLadderDescription(): PriceLadderDescription | undefined {
        return this.priceLadderDescription;
    }
    public setPriceLadderDescription(priceLadderDescription: PriceLadderDescription): void {
        this.priceLadderDescription = priceLadderDescription;
    }

}
