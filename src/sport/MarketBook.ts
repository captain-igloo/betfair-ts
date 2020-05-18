/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import MarketStatus from '../sport/enum/MarketStatus';
import KeyLineDescription, { IKeyLineDescriptionOptions } from '../sport/KeyLineDescription';
import Runner, { IRunnerOptions } from '../sport/Runner';

export interface IMarketBookOptions {
    marketId: string;
    isMarketDataDelayed: boolean;
    status?: MarketStatus | string;
    betDelay?: number;
    bspReconciled?: boolean;
    complete?: boolean;
    inplay?: boolean;
    numberOfWinners?: number;
    numberOfRunners?: number;
    numberOfActiveRunners?: number;
    lastMatchTime?: Date | string;
    totalMatched?: number;
    totalAvailable?: number;
    crossMatching?: boolean;
    runnersVoidable?: boolean;
    version?: number;
    runners?: (Runner | IRunnerOptions)[];
    keyLineDescription?: KeyLineDescription | IKeyLineDescriptionOptions;
}

export default class MarketBook extends JsonMember {
    private marketId: string;
    private isMarketDataDelayed: boolean;
    private status?: MarketStatus;
    private betDelay?: number;
    private bspReconciled?: boolean;
    private complete?: boolean;
    private inplay?: boolean;
    private numberOfWinners?: number;
    private numberOfRunners?: number;
    private numberOfActiveRunners?: number;
    private lastMatchTime?: Date;
    private totalMatched?: number;
    private totalAvailable?: number;
    private crossMatching?: boolean;
    private runnersVoidable?: boolean;
    private version?: number;
    private runners?: Runner[];
    private keyLineDescription?: KeyLineDescription;

    constructor(options: IMarketBookOptions) {
        super();
        this.marketId = options.marketId;
        this.isMarketDataDelayed = options.isMarketDataDelayed;
        if (options.status) {
            this.status = this.fromJson(options.status, MarketStatus);
        }
        this.betDelay = options.betDelay;
        this.bspReconciled = options.bspReconciled;
        this.complete = options.complete;
        this.inplay = options.inplay;
        this.numberOfWinners = options.numberOfWinners;
        this.numberOfRunners = options.numberOfRunners;
        this.numberOfActiveRunners = options.numberOfActiveRunners;
        if (options.lastMatchTime) {
            this.lastMatchTime = this.fromJson(options.lastMatchTime, Date);
        }
        this.totalMatched = options.totalMatched;
        this.totalAvailable = options.totalAvailable;
        this.crossMatching = options.crossMatching;
        this.runnersVoidable = options.runnersVoidable;
        this.version = options.version;
        if (options.runners) {
            this.runners = this.arrayFromJson(options.runners, Runner);
        }
        this.keyLineDescription = options.keyLineDescription && this.fromJson(options.keyLineDescription, KeyLineDescription);
    }

    public toJson(): IMarketBookOptions {
        const json: IMarketBookOptions = {
            marketId: this.marketId,
            isMarketDataDelayed: this.isMarketDataDelayed,
        };
        if (this.status) {
            json.status = this.status.getValue();
        }
        if (typeof this.betDelay !== 'undefined') {
            json.betDelay = this.betDelay;
        }
        if (typeof this.bspReconciled !== 'undefined') {
            json.bspReconciled = this.bspReconciled;
        }
        if (typeof this.complete !== 'undefined') {
            json.complete = this.complete;
        }
        if (typeof this.inplay !== 'undefined') {
            json.inplay = this.inplay;
        }
        if (typeof this.numberOfWinners !== 'undefined') {
            json.numberOfWinners = this.numberOfWinners;
        }
        if (typeof this.numberOfRunners !== 'undefined') {
            json.numberOfRunners = this.numberOfRunners;
        }
        if (typeof this.numberOfActiveRunners !== 'undefined') {
            json.numberOfActiveRunners = this.numberOfActiveRunners;
        }
        if (typeof this.lastMatchTime !== 'undefined') {
            json.lastMatchTime = this.lastMatchTime.toISOString();
        }
        if (typeof this.totalMatched !== 'undefined') {
            json.totalMatched = this.totalMatched;
        }
        if (typeof this.totalAvailable !== 'undefined') {
            json.totalAvailable = this.totalAvailable;
        }
        if (typeof this.crossMatching !== 'undefined') {
            json.crossMatching = this.crossMatching;
        }
        if (typeof this.runnersVoidable !== 'undefined') {
            json.runnersVoidable = this.runnersVoidable;
        }
        if (typeof this.version !== 'undefined') {
            json.version = this.version;
        }
        if (this.runners && this.runners.length > 0) {
            json.runners = this.runners.map((value) => value.toJson());
        }
        if (this.keyLineDescription) {
            json.keyLineDescription = this.keyLineDescription.toJson();
        }
        return json;
    }

    public getMarketId(): string {
        return this.marketId;
    }
    public setMarketId(marketId: string): void {
        this.marketId = marketId;
    }
    public getIsMarketDataDelayed(): boolean {
        return this.isMarketDataDelayed;
    }
    public setIsMarketDataDelayed(isMarketDataDelayed: boolean): void {
        this.isMarketDataDelayed = isMarketDataDelayed;
    }
    public getStatus(): MarketStatus | undefined {
        return this.status;
    }
    public setStatus(status: MarketStatus): void {
        this.status = status;
    }
    public getBetDelay(): number | undefined {
        return this.betDelay;
    }
    public setBetDelay(betDelay: number): void {
        this.betDelay = betDelay;
    }
    public getBspReconciled(): boolean | undefined {
        return this.bspReconciled;
    }
    public setBspReconciled(bspReconciled: boolean): void {
        this.bspReconciled = bspReconciled;
    }
    public getComplete(): boolean | undefined {
        return this.complete;
    }
    public setComplete(complete: boolean): void {
        this.complete = complete;
    }
    public getInplay(): boolean | undefined {
        return this.inplay;
    }
    public setInplay(inplay: boolean): void {
        this.inplay = inplay;
    }
    public getNumberOfWinners(): number | undefined {
        return this.numberOfWinners;
    }
    public setNumberOfWinners(numberOfWinners: number): void {
        this.numberOfWinners = numberOfWinners;
    }
    public getNumberOfRunners(): number | undefined {
        return this.numberOfRunners;
    }
    public setNumberOfRunners(numberOfRunners: number): void {
        this.numberOfRunners = numberOfRunners;
    }
    public getNumberOfActiveRunners(): number | undefined {
        return this.numberOfActiveRunners;
    }
    public setNumberOfActiveRunners(numberOfActiveRunners: number): void {
        this.numberOfActiveRunners = numberOfActiveRunners;
    }
    public getLastMatchTime(): Date | undefined {
        return this.lastMatchTime;
    }
    public setLastMatchTime(lastMatchTime: Date): void {
        this.lastMatchTime = lastMatchTime;
    }
    public getTotalMatched(): number | undefined {
        return this.totalMatched;
    }
    public setTotalMatched(totalMatched: number): void {
        this.totalMatched = totalMatched;
    }
    public getTotalAvailable(): number | undefined {
        return this.totalAvailable;
    }
    public setTotalAvailable(totalAvailable: number): void {
        this.totalAvailable = totalAvailable;
    }
    public getCrossMatching(): boolean | undefined {
        return this.crossMatching;
    }
    public setCrossMatching(crossMatching: boolean): void {
        this.crossMatching = crossMatching;
    }
    public getRunnersVoidable(): boolean | undefined {
        return this.runnersVoidable;
    }
    public setRunnersVoidable(runnersVoidable: boolean): void {
        this.runnersVoidable = runnersVoidable;
    }
    public getVersion(): number | undefined {
        return this.version;
    }
    public setVersion(version: number): void {
        this.version = version;
    }
    public getRunners(): Runner[] | undefined {
        return this.runners;
    }
    public setRunners(runners: Runner[]): void {
        this.runners = runners;
    }
    public getKeyLineDescription(): KeyLineDescription | undefined {
        return this.keyLineDescription;
    }
    public setKeyLineDescription(keyLineDescription: KeyLineDescription): void {
        this.keyLineDescription = keyLineDescription;
    }

}
