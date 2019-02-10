/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import BetTargetType from '../sport/enum/BetTargetType';
import PersistenceType from '../sport/enum/PersistenceType';
import TimeInForce from '../sport/enum/TimeInForce';

export default class LimitOrder extends JsonMember {
    private size: number | null;
    private price: number | null;
    private persistenceType: PersistenceType;
    private timeInForce: TimeInForce;
    private minFillSize: number | null;
    private betTargetType: BetTargetType;
    private betTargetSize: number | null;

    constructor(
        size: number | null = null,
        price: number | null = null,
        persistenceType: PersistenceType = new PersistenceType(),
        timeInForce: TimeInForce = new TimeInForce(),
        minFillSize: number | null = null,
        betTargetType: BetTargetType = new BetTargetType(),
        betTargetSize: number | null = null,
    ) {
        super();
        this.size = size;
        this.price = price;
        this.persistenceType = persistenceType;
        this.timeInForce = timeInForce;
        this.minFillSize = minFillSize;
        this.betTargetType = betTargetType;
        this.betTargetSize = betTargetSize;
    }

    public fromJson(json: any): void {
        if ('size' in json) {
            this.size = json.size;
        }
        if ('price' in json) {
            this.price = json.price;
        }
        if ('persistenceType' in json) {
            this.persistenceType.setValue(json.persistenceType);
        }
        if ('timeInForce' in json) {
            this.timeInForce.setValue(json.timeInForce);
        }
        if ('minFillSize' in json) {
            this.minFillSize = json.minFillSize;
        }
        if ('betTargetType' in json) {
            this.betTargetType.setValue(json.betTargetType);
        }
        if ('betTargetSize' in json) {
            this.betTargetSize = json.betTargetSize;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.size !== null) {
            json.size = this.size;
        }
        if (this.price !== null) {
            json.price = this.price;
        }
        if (this.persistenceType.isValid()) {
            json.persistenceType = this.persistenceType.getValue();
        }
        if (this.timeInForce.isValid()) {
            json.timeInForce = this.timeInForce.getValue();
        }
        if (this.minFillSize !== null) {
            json.minFillSize = this.minFillSize;
        }
        if (this.betTargetType.isValid()) {
            json.betTargetType = this.betTargetType.getValue();
        }
        if (this.betTargetSize !== null) {
            json.betTargetSize = this.betTargetSize;
        }
        return json;
    }

    public isValid(): boolean {
        return this.price !== null;
    }

    public getSize(): number | null {
        return this.size;
    }
    public setSize(size: number | null): void {
        this.size = size;
    }
    public getPrice(): number | null {
        return this.price;
    }
    public setPrice(price: number | null): void {
        this.price = price;
    }
    public getPersistenceType(): PersistenceType {
        return this.persistenceType;
    }
    public setPersistenceType(persistenceType: PersistenceType): void {
        this.persistenceType = persistenceType;
    }
    public getTimeInForce(): TimeInForce {
        return this.timeInForce;
    }
    public setTimeInForce(timeInForce: TimeInForce): void {
        this.timeInForce = timeInForce;
    }
    public getMinFillSize(): number | null {
        return this.minFillSize;
    }
    public setMinFillSize(minFillSize: number | null): void {
        this.minFillSize = minFillSize;
    }
    public getBetTargetType(): BetTargetType {
        return this.betTargetType;
    }
    public setBetTargetType(betTargetType: BetTargetType): void {
        this.betTargetType = betTargetType;
    }
    public getBetTargetSize(): number | null {
        return this.betTargetSize;
    }
    public setBetTargetSize(betTargetSize: number | null): void {
        this.betTargetSize = betTargetSize;
    }

}
