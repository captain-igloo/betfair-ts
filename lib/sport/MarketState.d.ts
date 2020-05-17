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
    private status;
    private betDelay;
    private bspReconciled;
    private complete;
    private inplay;
    private numberOfActiveRunners;
    private lastMatchTime;
    private totalMatched;
    private totalAvailable;
    private keyLineDescription?;
    constructor(options: IMarketStateOptions);
    toJson(): IMarketStateOptions;
    getStatus(): string;
    setStatus(status: string): void;
    getBetDelay(): number;
    setBetDelay(betDelay: number): void;
    getBspReconciled(): boolean;
    setBspReconciled(bspReconciled: boolean): void;
    getComplete(): boolean;
    setComplete(complete: boolean): void;
    getInplay(): boolean;
    setInplay(inplay: boolean): void;
    getNumberOfActiveRunners(): number;
    setNumberOfActiveRunners(numberOfActiveRunners: number): void;
    getLastMatchTime(): Date;
    setLastMatchTime(lastMatchTime: Date): void;
    getTotalMatched(): number;
    setTotalMatched(totalMatched: number): void;
    getTotalAvailable(): number;
    setTotalAvailable(totalAvailable: number): void;
    getKeyLineDescription(): KeyLineDescription | undefined;
    setKeyLineDescription(keyLineDescription: KeyLineDescription): void;
}
