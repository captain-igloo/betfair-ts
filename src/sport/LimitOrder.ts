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
    private size?: number;
    private price: number;
    private persistenceType?: PersistenceType;
    private timeInForce?: TimeInForce;
    private minFillSize?: number;
    private betTargetType?: BetTargetType;
    private betTargetSize?: number;

    constructor(options: ILimitOrderOptions) {
        super();
        this.size = options.size;
        this.price = options.price;
        if (options.persistenceType) {
            this.persistenceType = this.fromJson(options.persistenceType, PersistenceType);
        }
        if (options.timeInForce) {
            this.timeInForce = this.fromJson(options.timeInForce, TimeInForce);
        }
        this.minFillSize = options.minFillSize;
        if (options.betTargetType) {
            this.betTargetType = this.fromJson(options.betTargetType, BetTargetType);
        }
        this.betTargetSize = options.betTargetSize;
    }

    public toJson(): ILimitOrderOptions {
        const json: ILimitOrderOptions = {
            price: this.price,
        };
        if (typeof this.size !== 'undefined') {
            json.size = this.size;
        }
        if (this.persistenceType) {
            json.persistenceType = this.persistenceType.getValue();
        }
        if (this.timeInForce) {
            json.timeInForce = this.timeInForce.getValue();
        }
        if (typeof this.minFillSize !== 'undefined') {
            json.minFillSize = this.minFillSize;
        }
        if (this.betTargetType) {
            json.betTargetType = this.betTargetType.getValue();
        }
        if (typeof this.betTargetSize !== 'undefined') {
            json.betTargetSize = this.betTargetSize;
        }
        return json;
    }

    public getSize(): number | undefined {
        return this.size;
    }
    public setSize(size: number): void {
        this.size = size;
    }
    public getPrice(): number {
        return this.price;
    }
    public setPrice(price: number): void {
        this.price = price;
    }
    public getPersistenceType(): PersistenceType | undefined {
        return this.persistenceType;
    }
    public setPersistenceType(persistenceType: PersistenceType): void {
        this.persistenceType = persistenceType;
    }
    public getTimeInForce(): TimeInForce | undefined {
        return this.timeInForce;
    }
    public setTimeInForce(timeInForce: TimeInForce): void {
        this.timeInForce = timeInForce;
    }
    public getMinFillSize(): number | undefined {
        return this.minFillSize;
    }
    public setMinFillSize(minFillSize: number): void {
        this.minFillSize = minFillSize;
    }
    public getBetTargetType(): BetTargetType | undefined {
        return this.betTargetType;
    }
    public setBetTargetType(betTargetType: BetTargetType): void {
        this.betTargetType = betTargetType;
    }
    public getBetTargetSize(): number | undefined {
        return this.betTargetSize;
    }
    public setBetTargetSize(betTargetSize: number): void {
        this.betTargetSize = betTargetSize;
    }

}
