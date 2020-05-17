/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export interface IMarketLicenceOptions {
    wallet: string;
    rules?: string;
    rulesHasDate?: boolean;
    clarifications?: string;
}

export default class MarketLicence extends JsonMember {
    private wallet: string;
    private rules?: string;
    private rulesHasDate?: boolean;
    private clarifications?: string;

    constructor(options: IMarketLicenceOptions) {
        super();
        this.wallet = options.wallet;
        this.rules = options.rules;
        this.rulesHasDate = options.rulesHasDate;
        this.clarifications = options.clarifications;
    }

    public toJson(): IMarketLicenceOptions {
        const json: IMarketLicenceOptions = {
            wallet: this.wallet,
        };
        if (typeof this.rules !== 'undefined') {
            json.rules = this.rules;
        }
        if (typeof this.rulesHasDate !== 'undefined') {
            json.rulesHasDate = this.rulesHasDate;
        }
        if (typeof this.clarifications !== 'undefined') {
            json.clarifications = this.clarifications;
        }
        return json;
    }

    public getWallet(): string {
        return this.wallet;
    }
    public setWallet(wallet: string): void {
        this.wallet = wallet;
    }
    public getRules(): string | undefined {
        return this.rules;
    }
    public setRules(rules: string): void {
        this.rules = rules;
    }
    public getRulesHasDate(): boolean | undefined {
        return this.rulesHasDate;
    }
    public setRulesHasDate(rulesHasDate: boolean): void {
        this.rulesHasDate = rulesHasDate;
    }
    public getClarifications(): string | undefined {
        return this.clarifications;
    }
    public setClarifications(clarifications: string): void {
        this.clarifications = clarifications;
    }

}
