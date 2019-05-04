/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export default class MarketLicence extends JsonMember {
    private wallet;
    private rules;
    private rulesHasDate;
    private clarifications;
    constructor(wallet?: string, rules?: string, rulesHasDate?: boolean | null, clarifications?: string);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getWallet(): string;
    setWallet(wallet: string): void;
    getRules(): string;
    setRules(rules: string): void;
    getRulesHasDate(): boolean | null;
    setRulesHasDate(rulesHasDate: boolean | null): void;
    getClarifications(): string;
    setClarifications(clarifications: string): void;
}
