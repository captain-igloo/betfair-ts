/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import KeyLineDescription, { IKeyLineDescriptionOptions } from '../sport/KeyLineDescription';

export interface IMarketStateOptions {
    status: string;
    betDelay: number;
    bspReconciled: boolean;
    complete: boolean;
    inplay: boolean;
    numberOfActiveRunners: number;
    lastMatchTime: Date | string;
    totalMatched: number;
    totalAvailable: number;
    keyLineDescription?: KeyLineDescription | IKeyLineDescriptionOptions;
}

export default class MarketState extends JsonMember {
    private status: string;
    private betDelay: number;
    private bspReconciled: boolean;
    private complete: boolean;
    private inplay: boolean;
    private numberOfActiveRunners: number;
    private lastMatchTime: Date;
    private totalMatched: number;
    private totalAvailable: number;
    private keyLineDescription?: KeyLineDescription;

    constructor(options: IMarketStateOptions) {
        super();
        this.status = options.status;
        this.betDelay = options.betDelay;
        this.bspReconciled = options.bspReconciled;
        this.complete = options.complete;
        this.inplay = options.inplay;
        this.numberOfActiveRunners = options.numberOfActiveRunners;
        this.lastMatchTime = this.fromJson(options.lastMatchTime, Date);
        this.totalMatched = options.totalMatched;
        this.totalAvailable = options.totalAvailable;
        this.keyLineDescription = options.keyLineDescription && this.fromJson(options.keyLineDescription, KeyLineDescription);
    }

    public toJson(): IMarketStateOptions {
        const json: IMarketStateOptions = {
            status: this.status,
            betDelay: this.betDelay,
            bspReconciled: this.bspReconciled,
            complete: this.complete,
            inplay: this.inplay,
            numberOfActiveRunners: this.numberOfActiveRunners,
            lastMatchTime: this.lastMatchTime.toISOString(),
            totalMatched: this.totalMatched,
            totalAvailable: this.totalAvailable,
        };
        if (this.keyLineDescription) {
            json.keyLineDescription = this.keyLineDescription.toJson();
        }
        return json;
    }

    public getStatus(): string {
        return this.status;
    }
    public setStatus(status: string): void {
        this.status = status;
    }
    public getBetDelay(): number {
        return this.betDelay;
    }
    public setBetDelay(betDelay: number): void {
        this.betDelay = betDelay;
    }
    public getBspReconciled(): boolean {
        return this.bspReconciled;
    }
    public setBspReconciled(bspReconciled: boolean): void {
        this.bspReconciled = bspReconciled;
    }
    public getComplete(): boolean {
        return this.complete;
    }
    public setComplete(complete: boolean): void {
        this.complete = complete;
    }
    public getInplay(): boolean {
        return this.inplay;
    }
    public setInplay(inplay: boolean): void {
        this.inplay = inplay;
    }
    public getNumberOfActiveRunners(): number {
        return this.numberOfActiveRunners;
    }
    public setNumberOfActiveRunners(numberOfActiveRunners: number): void {
        this.numberOfActiveRunners = numberOfActiveRunners;
    }
    public getLastMatchTime(): Date {
        return this.lastMatchTime;
    }
    public setLastMatchTime(lastMatchTime: Date): void {
        this.lastMatchTime = lastMatchTime;
    }
    public getTotalMatched(): number {
        return this.totalMatched;
    }
    public setTotalMatched(totalMatched: number): void {
        this.totalMatched = totalMatched;
    }
    public getTotalAvailable(): number {
        return this.totalAvailable;
    }
    public setTotalAvailable(totalAvailable: number): void {
        this.totalAvailable = totalAvailable;
    }
    public getKeyLineDescription(): KeyLineDescription | undefined {
        return this.keyLineDescription;
    }
    public setKeyLineDescription(keyLineDescription: KeyLineDescription): void {
        this.keyLineDescription = keyLineDescription;
    }

}
