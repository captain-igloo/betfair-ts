/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Wallet from '../account/enum/Wallet';
import JsonRequest from '../JsonRequest';

export default class GetAccountFundsRequest extends JsonRequest {
    private wallet: Wallet;

    constructor(
        wallet: Wallet = new Wallet(),
    ) {
        super();
        this.wallet = wallet;
    }

    public fromJson(json: any): void {
        if ('wallet' in json) {
            this.wallet.setValue(json.wallet);
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.wallet.isValid()) {
            json.wallet = this.wallet;
        }
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getWallet(): Wallet {
        return this.wallet;
    }
    public setWallet(wallet: Wallet): void {
        this.wallet = wallet;
    }

}
