/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export interface IItemDescriptionOptions {
    eventTypeDesc?: string;
    eventDesc?: string;
    marketDesc?: string;
    marketType?: string;
    marketStartTime?: Date | string;
    runnerDesc?: string;
    numberOfWinners?: number;
    eachWayDivisor?: number;
}

export default class ItemDescription extends JsonMember {
    private eventTypeDesc?: string;
    private eventDesc?: string;
    private marketDesc?: string;
    private marketType?: string;
    private marketStartTime?: Date;
    private runnerDesc?: string;
    private numberOfWinners?: number;
    private eachWayDivisor?: number;

    constructor(options: IItemDescriptionOptions) {
        super();
        this.eventTypeDesc = options.eventTypeDesc;
        this.eventDesc = options.eventDesc;
        this.marketDesc = options.marketDesc;
        this.marketType = options.marketType;
        if (options.marketStartTime) {
            this.marketStartTime = this.fromJson(options.marketStartTime, Date);
        }
        this.runnerDesc = options.runnerDesc;
        this.numberOfWinners = options.numberOfWinners;
        this.eachWayDivisor = options.eachWayDivisor;
    }

    public toJson(): IItemDescriptionOptions {
        const json: IItemDescriptionOptions = {
        };
        if (typeof this.eventTypeDesc !== 'undefined') {
            json.eventTypeDesc = this.eventTypeDesc;
        }
        if (typeof this.eventDesc !== 'undefined') {
            json.eventDesc = this.eventDesc;
        }
        if (typeof this.marketDesc !== 'undefined') {
            json.marketDesc = this.marketDesc;
        }
        if (typeof this.marketType !== 'undefined') {
            json.marketType = this.marketType;
        }
        if (typeof this.marketStartTime !== 'undefined') {
            json.marketStartTime = this.marketStartTime.toISOString();
        }
        if (typeof this.runnerDesc !== 'undefined') {
            json.runnerDesc = this.runnerDesc;
        }
        if (typeof this.numberOfWinners !== 'undefined') {
            json.numberOfWinners = this.numberOfWinners;
        }
        if (typeof this.eachWayDivisor !== 'undefined') {
            json.eachWayDivisor = this.eachWayDivisor;
        }
        return json;
    }

    public getEventTypeDesc(): string | undefined {
        return this.eventTypeDesc;
    }
    public setEventTypeDesc(eventTypeDesc: string): void {
        this.eventTypeDesc = eventTypeDesc;
    }
    public getEventDesc(): string | undefined {
        return this.eventDesc;
    }
    public setEventDesc(eventDesc: string): void {
        this.eventDesc = eventDesc;
    }
    public getMarketDesc(): string | undefined {
        return this.marketDesc;
    }
    public setMarketDesc(marketDesc: string): void {
        this.marketDesc = marketDesc;
    }
    public getMarketType(): string | undefined {
        return this.marketType;
    }
    public setMarketType(marketType: string): void {
        this.marketType = marketType;
    }
    public getMarketStartTime(): Date | undefined {
        return this.marketStartTime;
    }
    public setMarketStartTime(marketStartTime: Date): void {
        this.marketStartTime = marketStartTime;
    }
    public getRunnerDesc(): string | undefined {
        return this.runnerDesc;
    }
    public setRunnerDesc(runnerDesc: string): void {
        this.runnerDesc = runnerDesc;
    }
    public getNumberOfWinners(): number | undefined {
        return this.numberOfWinners;
    }
    public setNumberOfWinners(numberOfWinners: number): void {
        this.numberOfWinners = numberOfWinners;
    }
    public getEachWayDivisor(): number | undefined {
        return this.eachWayDivisor;
    }
    public setEachWayDivisor(eachWayDivisor: number): void {
        this.eachWayDivisor = eachWayDivisor;
    }

}
