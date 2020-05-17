/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import BetTargetType from '../sport/enum/BetTargetType';
import PersistenceType from '../sport/enum/PersistenceType';
import TimeInForce from '../sport/enum/TimeInForce';
export interface ILimitOrderOptions {
    size?: number;
    price: number;
    persistenceType?: PersistenceType | string;
    timeInForce?: TimeInForce | string;
    minFillSize?: number;
    betTargetType?: BetTargetType | string;
    betTargetSize?: number;
}
export default class LimitOrder extends JsonMember {
    private size?;
    private price;
    private persistenceType?;
    private timeInForce?;
    private minFillSize?;
    private betTargetType?;
    private betTargetSize?;
    constructor(options: ILimitOrderOptions);
    toJson(): ILimitOrderOptions;
    getSize(): number | undefined;
    setSize(size: number): void;
    getPrice(): number;
    setPrice(price: number): void;
    getPersistenceType(): PersistenceType | undefined;
    setPersistenceType(persistenceType: PersistenceType): void;
    getTimeInForce(): TimeInForce | undefined;
    setTimeInForce(timeInForce: TimeInForce): void;
    getMinFillSize(): number | undefined;
    setMinFillSize(minFillSize: number): void;
    getBetTargetType(): BetTargetType | undefined;
    setBetTargetType(betTargetType: BetTargetType): void;
    getBetTargetSize(): number | undefined;
    setBetTargetSize(betTargetSize: number): void;
}
