/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import Wallet from '../account/enum/Wallet';
export default class TransferFundsRequest extends JsonRequest {
    private from;
    private to;
    private amount;
    constructor(from?: Wallet, to?: Wallet, amount?: number | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getFrom(): Wallet;
    setFrom(from: Wallet): void;
    getTo(): Wallet;
    setTo(to: Wallet): void;
    getAmount(): number | null;
    setAmount(amount: number | null): void;
}
