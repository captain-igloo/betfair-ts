/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';

import Wallet from '../account/enum/Wallet';

export interface ITransferFundsRequestOptions {
    from: Wallet | string;
    to: Wallet | string;
    amount: number;
}

export default class TransferFundsRequest extends JsonRequest {
    private from: Wallet;
    private to: Wallet;
    private amount: number;

    constructor(options: ITransferFundsRequestOptions) {
        super();
        this.from = this.fromJson(options.from, Wallet);
        this.to = this.fromJson(options.to, Wallet);
        this.amount = options.amount;
    }

    public toJson(): ITransferFundsRequestOptions {
        const json: ITransferFundsRequestOptions = {
            from: this.from.getValue(),
            to: this.to.getValue(),
            amount: this.amount,
        };
        return json;
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
    public getAmount(): number {
        return this.amount;
    }
    public setAmount(amount: number): void {
        this.amount = amount;
    }

}
