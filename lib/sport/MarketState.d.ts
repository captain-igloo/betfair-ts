/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import KeyLineDescription from '../sport/KeyLineDescription';
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
    private keyLineDescription;
    constructor(status?: string, betDelay?: number | null, bspReconciled?: boolean | null, complete?: boolean | null, inplay?: boolean | null, numberOfActiveRunners?: number | null, lastMatchTime?: Date | null, totalMatched?: number | null, totalAvailable?: number | null, keyLineDescription?: KeyLineDescription);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getStatus(): string;
    setStatus(status: string): void;
    getBetDelay(): number | null;
    setBetDelay(betDelay: number | null): void;
    getBspReconciled(): boolean | null;
    setBspReconciled(bspReconciled: boolean | null): void;
    getComplete(): boolean | null;
    setComplete(complete: boolean | null): void;
    getInplay(): boolean | null;
    setInplay(inplay: boolean | null): void;
    getNumberOfActiveRunners(): number | null;
    setNumberOfActiveRunners(numberOfActiveRunners: number | null): void;
    getLastMatchTime(): Date | null;
    setLastMatchTime(lastMatchTime: Date | null): void;
    getTotalMatched(): number | null;
    setTotalMatched(totalMatched: number | null): void;
    getTotalAvailable(): number | null;
    setTotalAvailable(totalAvailable: number | null): void;
    getKeyLineDescription(): KeyLineDescription;
    setKeyLineDescription(keyLineDescription: KeyLineDescription): void;
}
