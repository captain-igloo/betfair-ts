/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export default class ItemDescription extends JsonMember {
    private eventTypeDesc;
    private eventDesc;
    private marketDesc;
    private marketType;
    private marketStartTime;
    private runnerDesc;
    private numberOfWinners;
    private eachWayDivisor;
    constructor(eventTypeDesc?: string, eventDesc?: string, marketDesc?: string, marketType?: string, marketStartTime?: Date | null, runnerDesc?: string, numberOfWinners?: number | null, eachWayDivisor?: number | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getEventTypeDesc(): string;
    setEventTypeDesc(eventTypeDesc: string): void;
    getEventDesc(): string;
    setEventDesc(eventDesc: string): void;
    getMarketDesc(): string;
    setMarketDesc(marketDesc: string): void;
    getMarketType(): string;
    setMarketType(marketType: string): void;
    getMarketStartTime(): Date | null;
    setMarketStartTime(marketStartTime: Date | null): void;
    getRunnerDesc(): string;
    setRunnerDesc(runnerDesc: string): void;
    getNumberOfWinners(): number | null;
    setNumberOfWinners(numberOfWinners: number | null): void;
    getEachWayDivisor(): number | null;
    setEachWayDivisor(eachWayDivisor: number | null): void;
}
