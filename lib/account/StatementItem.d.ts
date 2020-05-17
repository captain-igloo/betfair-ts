/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import ItemClass from '../account/enum/ItemClass';
import StatementLegacyData, { IStatementLegacyDataOptions } from '../account/StatementLegacyData';
export interface IStatementItemOptions {
    refId?: string;
    itemDate: Date | string;
    amount?: number;
    balance?: number;
    itemClass?: ItemClass | string;
    itemClassData?: Map<string, string> | {
        [key: string]: string;
    };
    legacyData?: StatementLegacyData | IStatementLegacyDataOptions;
}
export default class StatementItem extends JsonMember {
    private refId?;
    private itemDate;
    private amount?;
    private balance?;
    private itemClass?;
    private itemClassData?;
    private legacyData?;
    constructor(options: IStatementItemOptions);
    toJson(): IStatementItemOptions;
    getRefId(): string | undefined;
    setRefId(refId: string): void;
    getItemDate(): Date;
    setItemDate(itemDate: Date): void;
    getAmount(): number | undefined;
    setAmount(amount: number): void;
    getBalance(): number | undefined;
    setBalance(balance: number): void;
    getItemClass(): ItemClass | undefined;
    setItemClass(itemClass: ItemClass): void;
    getItemClassData(): Map<string, string> | undefined;
    setItemClassData(itemClassData: Map<string, string>): void;
    getLegacyData(): StatementLegacyData | undefined;
    setLegacyData(legacyData: StatementLegacyData): void;
}
