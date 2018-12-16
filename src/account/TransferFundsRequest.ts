/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import Wallet from '../account/enum/Wallet';

export default class TransferFundsRequest extends JsonRequest {
    private from: Wallet;
    private to: Wallet;
    private amount: number | null;

    constructor(
        from: Wallet = new Wallet(),
        to: Wallet = new Wallet(),
        amount: number | null = null,
    ) {
        super();
        this.from = from;
        this.to = to;
        this.amount = amount;
    }

    public fromJson(json: any): void {
        if ('from' in json) {
            this.from.setValue(json.from);
        }
        if ('to' in json) {
            this.to.setValue(json.to);
        }
        if ('amount' in json) {
            this.amount = json.amount;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.from.isValid()) {
            json.from = this.from;
        }
        if (this.to.isValid()) {
            json.to = this.to;
        }
        if (this.amount !== null) {
            json.amount = this.amount;
        }
        return json;
    }

    public isValid(): boolean {
        return this.from.isValid() &&
            this.to.isValid() &&
            this.amount !== null;
    }

    public getFrom(): Wallet {
        return this.from;
    }
    public setFrom(from: Wallet): void {
        this.from = from;
    }
    public getTo(): Wallet {
        return this.to;
    }
    public setTo(to: Wallet): void {
        this.to = to;
    }
    public getAmount(): number | null {
        return this.amount;
    }
    public setAmount(amount: number | null): void {
        this.amount = amount;
    }

}
