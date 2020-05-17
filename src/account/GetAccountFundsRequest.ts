/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';

import Wallet from '../account/enum/Wallet';

export interface IGetAccountFundsRequestOptions {
    wallet?: Wallet | string;
}

export default class GetAccountFundsRequest extends JsonRequest {
    private wallet?: Wallet;

    constructor(options: IGetAccountFundsRequestOptions) {
        super();
        if (options.wallet) {
            this.wallet = this.fromJson(options.wallet, Wallet);
        }
    }

    public toJson(): IGetAccountFundsRequestOptions {
        const json: IGetAccountFundsRequestOptions = {
        };
        if (this.wallet) {
            json.wallet = this.wallet.getValue();
        }
        return json;
    }

    public getWallet(): Wallet | undefined {
        return this.wallet;
    }
    public setWallet(wallet: Wallet): void {
        this.wallet = wallet;
    }

}
