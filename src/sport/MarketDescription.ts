/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import MarketBettingType from '../sport/enum/MarketBettingType';
import MarketLineRangeInfo from '../sport/MarketLineRangeInfo';
import PriceLadderDescription from '../sport/PriceLadderDescription';

export default class MarketDescription extends JsonMember {
    private persistenceEnabled: boolean | null;
    private bspMarket: boolean | null;
    private marketTime: Date | null;
    private suspendTime: Date | null;
    private settleTime: Date | null;
    private bettingType: MarketBettingType;
    private turnInPlayEnabled: boolean | null;
    private marketType: string;
    private regulator: string;
    private marketBaseRate: number | null;
    private discountAllowed: boolean | null;
    private wallet: string;
    private rules: string;
    private rulesHasDate: boolean | null;
    private clarifications: string;
    private eachWayDivisor: number | null;
    private lineRangeInfo: MarketLineRangeInfo;
    private raceType: string;
    private priceLadderDescription: PriceLadderDescription;

    constructor(
        persistenceEnabled: boolean | null = null,
        bspMarket: boolean | null = null,
        marketTime: Date | null = null,
        suspendTime: Date | null = null,
        settleTime: Date | null = null,
        bettingType: MarketBettingType = new MarketBettingType(),
        turnInPlayEnabled: boolean | null = null,
        marketType: string = '',
        regulator: string = '',
        marketBaseRate: number | null = null,
        discountAllowed: boolean | null = null,
        wallet: string = '',
        rules: string = '',
        rulesHasDate: boolean | null = null,
        clarifications: string = '',
        eachWayDivisor: number | null = null,
        lineRangeInfo: MarketLineRangeInfo = new MarketLineRangeInfo(),
        raceType: string = '',
        priceLadderDescription: PriceLadderDescription = new PriceLadderDescription(),
    ) {
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

    public fromJson(json: any): void {
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

    public toJson(): any {
        const json: any = {};
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

    public isValid(): boolean {
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

    public getPersistenceEnabled(): boolean | null {
        return this.persistenceEnabled;
    }
    public setPersistenceEnabled(persistenceEnabled: boolean | null): void {
        this.persistenceEnabled = persistenceEnabled;
    }
    public getBspMarket(): boolean | null {
        return this.bspMarket;
    }
    public setBspMarket(bspMarket: boolean | null): void {
        this.bspMarket = bspMarket;
    }
    public getMarketTime(): Date | null {
        return this.marketTime;
    }
    public setMarketTime(marketTime: Date | null): void {
        this.marketTime = marketTime;
    }
    public getSuspendTime(): Date | null {
        return this.suspendTime;
    }
    public setSuspendTime(suspendTime: Date | null): void {
        this.suspendTime = suspendTime;
    }
    public getSettleTime(): Date | null {
        return this.settleTime;
    }
    public setSettleTime(settleTime: Date | null): void {
        this.settleTime = settleTime;
    }
    public getBettingType(): MarketBettingType {
        return this.bettingType;
    }
    public setBettingType(bettingType: MarketBettingType): void {
        this.bettingType = bettingType;
    }
    public getTurnInPlayEnabled(): boolean | null {
        return this.turnInPlayEnabled;
    }
    public setTurnInPlayEnabled(turnInPlayEnabled: boolean | null): void {
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
    public getMarketBaseRate(): number | null {
        return this.marketBaseRate;
    }
    public setMarketBaseRate(marketBaseRate: number | null): void {
        this.marketBaseRate = marketBaseRate;
    }
    public getDiscountAllowed(): boolean | null {
        return this.discountAllowed;
    }
    public setDiscountAllowed(discountAllowed: boolean | null): void {
        this.discountAllowed = discountAllowed;
    }
    public getWallet(): string {
        return this.wallet;
    }
    public setWallet(wallet: string): void {
        this.wallet = wallet;
    }
    public getRules(): string {
        return this.rules;
    }
    public setRules(rules: string): void {
        this.rules = rules;
    }
    public getRulesHasDate(): boolean | null {
        return this.rulesHasDate;
    }
    public setRulesHasDate(rulesHasDate: boolean | null): void {
        this.rulesHasDate = rulesHasDate;
    }
    public getClarifications(): string {
        return this.clarifications;
    }
    public setClarifications(clarifications: string): void {
        this.clarifications = clarifications;
    }
    public getEachWayDivisor(): number | null {
        return this.eachWayDivisor;
    }
    public setEachWayDivisor(eachWayDivisor: number | null): void {
        this.eachWayDivisor = eachWayDivisor;
    }
    public getLineRangeInfo(): MarketLineRangeInfo {
        return this.lineRangeInfo;
    }
    public setLineRangeInfo(lineRangeInfo: MarketLineRangeInfo): void {
        this.lineRangeInfo = lineRangeInfo;
    }
    public getRaceType(): string {
        return this.raceType;
    }
    public setRaceType(raceType: string): void {
        this.raceType = raceType;
    }
    public getPriceLadderDescription(): PriceLadderDescription {
        return this.priceLadderDescription;
    }
    public setPriceLadderDescription(priceLadderDescription: PriceLadderDescription): void {
        this.priceLadderDescription = priceLadderDescription;
    }

}
