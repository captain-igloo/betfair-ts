/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import KeyLineDescription from '../sport/KeyLineDescription';

export default class MarketState extends JsonMember {
    private status: string;
    private betDelay: number | null;
    private bspReconciled: boolean | null;
    private complete: boolean | null;
    private inplay: boolean | null;
    private numberOfActiveRunners: number | null;
    private lastMatchTime: Date | null;
    private totalMatched: number | null;
    private totalAvailable: number | null;
    private keyLineDescription: KeyLineDescription;

    constructor(
        status: string = '',
        betDelay: number | null = null,
        bspReconciled: boolean | null = null,
        complete: boolean | null = null,
        inplay: boolean | null = null,
        numberOfActiveRunners: number | null = null,
        lastMatchTime: Date | null = null,
        totalMatched: number | null = null,
        totalAvailable: number | null = null,
        keyLineDescription: KeyLineDescription = new KeyLineDescription(),
    ) {
        super();
        this.status = status;
        this.betDelay = betDelay;
        this.bspReconciled = bspReconciled;
        this.complete = complete;
        this.inplay = inplay;
        this.numberOfActiveRunners = numberOfActiveRunners;
        this.lastMatchTime = lastMatchTime;
        this.totalMatched = totalMatched;
        this.totalAvailable = totalAvailable;
        this.keyLineDescription = keyLineDescription;
    }

    public fromJson(json: any): void {
        if ('status' in json) {
            this.status = json.status;
        }
        if ('betDelay' in json) {
            this.betDelay = json.betDelay;
        }
        if ('bspReconciled' in json) {
            this.bspReconciled = json.bspReconciled;
        }
        if ('complete' in json) {
            this.complete = json.complete;
        }
        if ('inplay' in json) {
            this.inplay = json.inplay;
        }
        if ('numberOfActiveRunners' in json) {
            this.numberOfActiveRunners = json.numberOfActiveRunners;
        }
        if ('lastMatchTime' in json) {
            this.lastMatchTime = new Date(json.lastMatchTime);
        }
        if ('totalMatched' in json) {
            this.totalMatched = json.totalMatched;
        }
        if ('totalAvailable' in json) {
            this.totalAvailable = json.totalAvailable;
        }
        if ('keyLineDescription' in json) {
            this.keyLineDescription.fromJson(json.keyLineDescription);
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.status !== '') {
            json.status = this.status;
        }
        if (this.betDelay !== null) {
            json.betDelay = this.betDelay;
        }
        if (this.bspReconciled !== null) {
            json.bspReconciled = this.bspReconciled;
        }
        if (this.complete !== null) {
            json.complete = this.complete;
        }
        if (this.inplay !== null) {
            json.inplay = this.inplay;
        }
        if (this.numberOfActiveRunners !== null) {
            json.numberOfActiveRunners = this.numberOfActiveRunners;
        }
        if (this.lastMatchTime !== null) {
            json.lastMatchTime = this.lastMatchTime.toISOString();
        }
        if (this.totalMatched !== null) {
            json.totalMatched = this.totalMatched;
        }
        if (this.totalAvailable !== null) {
            json.totalAvailable = this.totalAvailable;
        }
        if (this.keyLineDescription.isValid()) {
            json.keyLineDescription = this.keyLineDescription.toJson();
        }
        return json;
    }

    public isValid(): boolean {
        return this.status !== '' &&
            this.betDelay !== null &&
            this.bspReconciled !== null &&
            this.complete !== null &&
            this.inplay !== null &&
            this.numberOfActiveRunners !== null &&
            this.lastMatchTime !== null &&
            this.totalMatched !== null &&
            this.totalAvailable !== null;
    }

    public getStatus(): string {
        return this.status;
    }
    public setStatus(status: string): void {
        this.status = status;
    }
    public getBetDelay(): number | null {
        return this.betDelay;
    }
    public setBetDelay(betDelay: number | null): void {
        this.betDelay = betDelay;
    }
    public getBspReconciled(): boolean | null {
        return this.bspReconciled;
    }
    public setBspReconciled(bspReconciled: boolean | null): void {
        this.bspReconciled = bspReconciled;
    }
    public getComplete(): boolean | null {
        return this.complete;
    }
    public setComplete(complete: boolean | null): void {
        this.complete = complete;
    }
    public getInplay(): boolean | null {
        return this.inplay;
    }
    public setInplay(inplay: boolean | null): void {
        this.inplay = inplay;
    }
    public getNumberOfActiveRunners(): number | null {
        return this.numberOfActiveRunners;
    }
    public setNumberOfActiveRunners(numberOfActiveRunners: number | null): void {
        this.numberOfActiveRunners = numberOfActiveRunners;
    }
    public getLastMatchTime(): Date | null {
        return this.lastMatchTime;
    }
    public setLastMatchTime(lastMatchTime: Date | null): void {
        this.lastMatchTime = lastMatchTime;
    }
    public getTotalMatched(): number | null {
        return this.totalMatched;
    }
    public setTotalMatched(totalMatched: number | null): void {
        this.totalMatched = totalMatched;
    }
    public getTotalAvailable(): number | null {
        return this.totalAvailable;
    }
    public setTotalAvailable(totalAvailable: number | null): void {
        this.totalAvailable = totalAvailable;
    }
    public getKeyLineDescription(): KeyLineDescription {
        return this.keyLineDescription;
    }
    public setKeyLineDescription(keyLineDescription: KeyLineDescription): void {
        this.keyLineDescription = keyLineDescription;
    }

}
