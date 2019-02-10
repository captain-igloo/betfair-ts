/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import MarketStatus from '../sport/enum/MarketStatus';
import KeyLineDescription from '../sport/KeyLineDescription';
import Runner from '../sport/Runner';

export default class MarketBook extends JsonMember {
    private marketId: string;
    private isMarketDataDelayed: boolean | null;
    private status: MarketStatus;
    private betDelay: number | null;
    private bspReconciled: boolean | null;
    private complete: boolean | null;
    private inplay: boolean | null;
    private numberOfWinners: number | null;
    private numberOfRunners: number | null;
    private numberOfActiveRunners: number | null;
    private lastMatchTime: Date | null;
    private totalMatched: number | null;
    private totalAvailable: number | null;
    private crossMatching: boolean | null;
    private runnersVoidable: boolean | null;
    private version: number | null;
    private runners: Runner[];
    private keyLineDescription: KeyLineDescription;

    constructor(
        marketId: string = '',
        isMarketDataDelayed: boolean | null = null,
        status: MarketStatus = new MarketStatus(),
        betDelay: number | null = null,
        bspReconciled: boolean | null = null,
        complete: boolean | null = null,
        inplay: boolean | null = null,
        numberOfWinners: number | null = null,
        numberOfRunners: number | null = null,
        numberOfActiveRunners: number | null = null,
        lastMatchTime: Date | null = null,
        totalMatched: number | null = null,
        totalAvailable: number | null = null,
        crossMatching: boolean | null = null,
        runnersVoidable: boolean | null = null,
        version: number | null = null,
        runners: Runner[] = [],
        keyLineDescription: KeyLineDescription = new KeyLineDescription(),
    ) {
        super();
        this.marketId = marketId;
        this.isMarketDataDelayed = isMarketDataDelayed;
        this.status = status;
        this.betDelay = betDelay;
        this.bspReconciled = bspReconciled;
        this.complete = complete;
        this.inplay = inplay;
        this.numberOfWinners = numberOfWinners;
        this.numberOfRunners = numberOfRunners;
        this.numberOfActiveRunners = numberOfActiveRunners;
        this.lastMatchTime = lastMatchTime;
        this.totalMatched = totalMatched;
        this.totalAvailable = totalAvailable;
        this.crossMatching = crossMatching;
        this.runnersVoidable = runnersVoidable;
        this.version = version;
        this.runners = runners;
        this.keyLineDescription = keyLineDescription;
    }

    public fromJson(json: any): void {
        if ('marketId' in json) {
            this.marketId = json.marketId;
        }
        if ('isMarketDataDelayed' in json) {
            this.isMarketDataDelayed = json.isMarketDataDelayed;
        }
        if ('status' in json) {
            this.status.setValue(json.status);
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
        if ('numberOfWinners' in json) {
            this.numberOfWinners = json.numberOfWinners;
        }
        if ('numberOfRunners' in json) {
            this.numberOfRunners = json.numberOfRunners;
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
        if ('crossMatching' in json) {
            this.crossMatching = json.crossMatching;
        }
        if ('runnersVoidable' in json) {
            this.runnersVoidable = json.runnersVoidable;
        }
        if ('version' in json) {
            this.version = json.version;
        }
        if ('runners' in json) {
            this.runners = json.runners.map((runnersJson: any) => {
                const element = new Runner();
                element.fromJson(runnersJson);
                return element;
            });
        }
        if ('keyLineDescription' in json) {
            this.keyLineDescription.fromJson(json.keyLineDescription);
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.marketId !== '') {
            json.marketId = this.marketId;
        }
        if (this.isMarketDataDelayed !== null) {
            json.isMarketDataDelayed = this.isMarketDataDelayed;
        }
        if (this.status.isValid()) {
            json.status = this.status.getValue();
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
        if (this.numberOfWinners !== null) {
            json.numberOfWinners = this.numberOfWinners;
        }
        if (this.numberOfRunners !== null) {
            json.numberOfRunners = this.numberOfRunners;
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
        if (this.crossMatching !== null) {
            json.crossMatching = this.crossMatching;
        }
        if (this.runnersVoidable !== null) {
            json.runnersVoidable = this.runnersVoidable;
        }
        if (this.version !== null) {
            json.version = this.version;
        }
        if (this.runners.length > 0) {
            json.runners = this.runners.map((value) => value.toJson());
        }
        if (this.keyLineDescription.isValid()) {
            json.keyLineDescription = this.keyLineDescription.toJson();
        }
        return json;
    }

    public isValid(): boolean {
        return this.marketId !== '' &&
            this.isMarketDataDelayed !== null;
    }

    public getMarketId(): string {
        return this.marketId;
    }
    public setMarketId(marketId: string): void {
        this.marketId = marketId;
    }
    public getIsMarketDataDelayed(): boolean | null {
        return this.isMarketDataDelayed;
    }
    public setIsMarketDataDelayed(isMarketDataDelayed: boolean | null): void {
        this.isMarketDataDelayed = isMarketDataDelayed;
    }
    public getStatus(): MarketStatus {
        return this.status;
    }
    public setStatus(status: MarketStatus): void {
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
    public getNumberOfWinners(): number | null {
        return this.numberOfWinners;
    }
    public setNumberOfWinners(numberOfWinners: number | null): void {
        this.numberOfWinners = numberOfWinners;
    }
    public getNumberOfRunners(): number | null {
        return this.numberOfRunners;
    }
    public setNumberOfRunners(numberOfRunners: number | null): void {
        this.numberOfRunners = numberOfRunners;
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
    public getCrossMatching(): boolean | null {
        return this.crossMatching;
    }
    public setCrossMatching(crossMatching: boolean | null): void {
        this.crossMatching = crossMatching;
    }
    public getRunnersVoidable(): boolean | null {
        return this.runnersVoidable;
    }
    public setRunnersVoidable(runnersVoidable: boolean | null): void {
        this.runnersVoidable = runnersVoidable;
    }
    public getVersion(): number | null {
        return this.version;
    }
    public setVersion(version: number | null): void {
        this.version = version;
    }
    public getRunners(): Runner[] {
        return this.runners;
    }
    public setRunners(runners: Runner[]): void {
        this.runners = runners;
    }
    public getKeyLineDescription(): KeyLineDescription {
        return this.keyLineDescription;
    }
    public setKeyLineDescription(keyLineDescription: KeyLineDescription): void {
        this.keyLineDescription = keyLineDescription;
    }

}
