/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import PersistenceType from '../sport/enum/PersistenceType';
import TimeInForce from '../sport/enum/TimeInForce';
import BetTargetType from '../sport/enum/BetTargetType';
export default class LimitOrder extends JsonMember {
    private size;
    private price;
    private persistenceType;
    private timeInForce;
    private minFillSize;
    private betTargetType;
    private betTargetSize;
    constructor(size?: number | null, price?: number | null, persistenceType?: PersistenceType, timeInForce?: TimeInForce, minFillSize?: number | null, betTargetType?: BetTargetType, betTargetSize?: number | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getSize(): number | null;
    setSize(size: number | null): void;
    getPrice(): number | null;
    setPrice(price: number | null): void;
    getPersistenceType(): PersistenceType;
    setPersistenceType(persistenceType: PersistenceType): void;
    getTimeInForce(): TimeInForce;
    setTimeInForce(timeInForce: TimeInForce): void;
    getMinFillSize(): number | null;
    setMinFillSize(minFillSize: number | null): void;
    getBetTargetType(): BetTargetType;
    setBetTargetType(betTargetType: BetTargetType): void;
    getBetTargetSize(): number | null;
    setBetTargetSize(betTargetSize: number | null): void;
}
