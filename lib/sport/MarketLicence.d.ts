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
    private wallet;
    private rules?;
    private rulesHasDate?;
    private clarifications?;
    constructor(options: IMarketLicenceOptions);
    toJson(): IMarketLicenceOptions;
    getWallet(): string;
    setWallet(wallet: string): void;
    getRules(): string | undefined;
    setRules(rules: string): void;
    getRulesHasDate(): boolean | undefined;
    setRulesHasDate(rulesHasDate: boolean): void;
    getClarifications(): string | undefined;
    setClarifications(clarifications: string): void;
}
