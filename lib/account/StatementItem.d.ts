/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import ItemClass from '../account/enum/ItemClass';
import StatementLegacyData from '../account/StatementLegacyData';
export default class StatementItem extends JsonMember {
    private refId;
    private itemDate;
    private amount;
    private balance;
    private itemClass;
    private itemClassData;
    private legacyData;
    constructor(refId?: string, itemDate?: Date | null, amount?: number | null, balance?: number | null, itemClass?: ItemClass, itemClassData?: Map<string, string>, legacyData?: StatementLegacyData);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getRefId(): string;
    setRefId(refId: string): void;
    getItemDate(): Date | null;
    setItemDate(itemDate: Date | null): void;
    getAmount(): number | null;
    setAmount(amount: number | null): void;
    getBalance(): number | null;
    setBalance(balance: number | null): void;
    getItemClass(): ItemClass;
    setItemClass(itemClass: ItemClass): void;
    getItemClassData(): Map<string, string>;
    setItemClassData(itemClassData: Map<string, string>): void;
    getLegacyData(): StatementLegacyData;
    setLegacyData(legacyData: StatementLegacyData): void;
}
