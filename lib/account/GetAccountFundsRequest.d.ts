/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import Wallet from '../account/enum/Wallet';
export interface IGetAccountFundsRequestOptions {
    wallet?: Wallet | string;
}
export default class GetAccountFundsRequest extends JsonRequest {
    private wallet?;
    constructor(options: IGetAccountFundsRequestOptions);
    toJson(): IGetAccountFundsRequestOptions;
    getWallet(): Wallet | undefined;
    setWallet(wallet: Wallet): void;
}
