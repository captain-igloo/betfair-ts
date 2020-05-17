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
    private from;
    private to;
    private amount;
    constructor(options: ITransferFundsRequestOptions);
    toJson(): ITransferFundsRequestOptions;
    getFrom(): Wallet;
    setFrom(from: Wallet): void;
    getTo(): Wallet;
    setTo(to: Wallet): void;
    getAmount(): number;
    setAmount(amount: number): void;
}
