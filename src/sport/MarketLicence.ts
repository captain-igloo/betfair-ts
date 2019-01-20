/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export default class MarketLicence extends JsonMember {
    private wallet: string;
    private rules: string;
    private rulesHasDate: boolean | null;
    private clarifications: string;

    constructor(
        wallet: string = '',
        rules: string = '',
        rulesHasDate: boolean | null = null,
        clarifications: string = '',
    ) {
        super();
        this.wallet = wallet;
        this.rules = rules;
        this.rulesHasDate = rulesHasDate;
        this.clarifications = clarifications;
    }

    public fromJson(json: any): void {
        if ('wallet' in json) {
            this.wallet = json.wallet;
        }
        if ('rules' in json) {
            this.rules = json.rules;
        }
        if ('rulesHasDate' in json) {
            this.rulesHasDate = json.rulesHasDate;
        }
        if ('clarifications' in json) {
            this.clarifications = json.clarifications;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.wallet !== '') {
            json.wallet = this.wallet;
        }
        if (this.rules !== '') {
            json.rules = this.rules;
        }
        if (this.rulesHasDate !== null) {
            json.rulesHasDate = this.rulesHasDate;
        }
        if (this.clarifications !== '') {
            json.clarifications = this.clarifications;
        }
        return json;
    }

    public isValid(): boolean {
        return this.wallet !== '';
    }

    public getWallet(): string {
        return this.wallet;
    }
    public setWallet(wallet: string): void {
        this.wallet = wallet;
    }
    public getRules(): string {
        return this.rules;
    }
    public setRules(rules: string): void {
        this.rules = rules;
    }
    public getRulesHasDate(): boolean | null {
        return this.rulesHasDate;
    }
    public setRulesHasDate(rulesHasDate: boolean | null): void {
        this.rulesHasDate = rulesHasDate;
    }
    public getClarifications(): string {
        return this.clarifications;
    }
    public setClarifications(clarifications: string): void {
        this.clarifications = clarifications;
    }

}
