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
    private eventTypeDesc?;
    private eventDesc?;
    private marketDesc?;
    private marketType?;
    private marketStartTime?;
    private runnerDesc?;
    private numberOfWinners?;
    private eachWayDivisor?;
    constructor(options: IItemDescriptionOptions);
    toJson(): IItemDescriptionOptions;
    getEventTypeDesc(): string | undefined;
    setEventTypeDesc(eventTypeDesc: string): void;
    getEventDesc(): string | undefined;
    setEventDesc(eventDesc: string): void;
    getMarketDesc(): string | undefined;
    setMarketDesc(marketDesc: string): void;
    getMarketType(): string | undefined;
    setMarketType(marketType: string): void;
    getMarketStartTime(): Date | undefined;
    setMarketStartTime(marketStartTime: Date): void;
    getRunnerDesc(): string | undefined;
    setRunnerDesc(runnerDesc: string): void;
    getNumberOfWinners(): number | undefined;
    setNumberOfWinners(numberOfWinners: number): void;
    getEachWayDivisor(): number | undefined;
    setEachWayDivisor(eachWayDivisor: number): void;
}
