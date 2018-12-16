/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import Wallet from '../account/enum/Wallet';
export default class GetAccountFundsRequest extends JsonRequest {
    private wallet;
    constructor(wallet?: Wallet);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getWallet(): Wallet;
    setWallet(wallet: Wallet): void;
}
