/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export default class ItemDescription extends JsonMember {
    private eventTypeDesc: string;
    private eventDesc: string;
    private marketDesc: string;
    private marketType: string;
    private marketStartTime: Date | null;
    private runnerDesc: string;
    private numberOfWinners: number | null;
    private eachWayDivisor: number | null;

    constructor(
        eventTypeDesc: string = '',
        eventDesc: string = '',
        marketDesc: string = '',
        marketType: string = '',
        marketStartTime: Date | null = null,
        runnerDesc: string = '',
        numberOfWinners: number | null = null,
        eachWayDivisor: number | null = null,
    ) {
        super();
        this.eventTypeDesc = eventTypeDesc;
        this.eventDesc = eventDesc;
        this.marketDesc = marketDesc;
        this.marketType = marketType;
        this.marketStartTime = marketStartTime;
        this.runnerDesc = runnerDesc;
        this.numberOfWinners = numberOfWinners;
        this.eachWayDivisor = eachWayDivisor;
    }

    public fromJson(json: any): void {
        if ('eventTypeDesc' in json) {
            this.eventTypeDesc = json.eventTypeDesc;
        }
        if ('eventDesc' in json) {
            this.eventDesc = json.eventDesc;
        }
        if ('marketDesc' in json) {
            this.marketDesc = json.marketDesc;
        }
        if ('marketType' in json) {
            this.marketType = json.marketType;
        }
        if ('marketStartTime' in json) {
            this.marketStartTime = new Date(json.marketStartTime);
        }
        if ('runnerDesc' in json) {
            this.runnerDesc = json.runnerDesc;
        }
        if ('numberOfWinners' in json) {
            this.numberOfWinners = json.numberOfWinners;
        }
        if ('eachWayDivisor' in json) {
            this.eachWayDivisor = json.eachWayDivisor;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.eventTypeDesc !== '') {
            json.eventTypeDesc = this.eventTypeDesc;
        }
        if (this.eventDesc !== '') {
            json.eventDesc = this.eventDesc;
        }
        if (this.marketDesc !== '') {
            json.marketDesc = this.marketDesc;
        }
        if (this.marketType !== '') {
            json.marketType = this.marketType;
        }
        if (this.marketStartTime !== null) {
            json.marketStartTime = this.marketStartTime.toISOString();
        }
        if (this.runnerDesc !== '') {
            json.runnerDesc = this.runnerDesc;
        }
        if (this.numberOfWinners !== null) {
            json.numberOfWinners = this.numberOfWinners;
        }
        if (this.eachWayDivisor !== null) {
            json.eachWayDivisor = this.eachWayDivisor;
        }
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getEventTypeDesc(): string {
        return this.eventTypeDesc;
    }
    public setEventTypeDesc(eventTypeDesc: string): void {
        this.eventTypeDesc = eventTypeDesc;
    }
    public getEventDesc(): string {
        return this.eventDesc;
    }
    public setEventDesc(eventDesc: string): void {
        this.eventDesc = eventDesc;
    }
    public getMarketDesc(): string {
        return this.marketDesc;
    }
    public setMarketDesc(marketDesc: string): void {
        this.marketDesc = marketDesc;
    }
    public getMarketType(): string {
        return this.marketType;
    }
    public setMarketType(marketType: string): void {
        this.marketType = marketType;
    }
    public getMarketStartTime(): Date | null {
        return this.marketStartTime;
    }
    public setMarketStartTime(marketStartTime: Date | null): void {
        this.marketStartTime = marketStartTime;
    }
    public getRunnerDesc(): string {
        return this.runnerDesc;
    }
    public setRunnerDesc(runnerDesc: string): void {
        this.runnerDesc = runnerDesc;
    }
    public getNumberOfWinners(): number | null {
        return this.numberOfWinners;
    }
    public setNumberOfWinners(numberOfWinners: number | null): void {
        this.numberOfWinners = numberOfWinners;
    }
    public getEachWayDivisor(): number | null {
        return this.eachWayDivisor;
    }
    public setEachWayDivisor(eachWayDivisor: number | null): void {
        this.eachWayDivisor = eachWayDivisor;
    }

}
