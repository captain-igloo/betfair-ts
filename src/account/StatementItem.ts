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
    itemClassData?: Map<string, string> | {[key: string]: string};
    legacyData?: StatementLegacyData | IStatementLegacyDataOptions;
}

export default class StatementItem extends JsonMember {
    private refId?: string;
    private itemDate: Date;
    private amount?: number;
    private balance?: number;
    private itemClass?: ItemClass;
    private itemClassData?: Map<string, string>;
    private legacyData?: StatementLegacyData;

    constructor(options: IStatementItemOptions) {
        super();
        this.refId = options.refId;
        this.itemDate = this.fromJson(options.itemDate, Date);
        this.amount = options.amount;
        this.balance = options.balance;
        if (options.itemClass) {
            this.itemClass = this.fromJson(options.itemClass, ItemClass);
        }
        if (options.itemClassData) {
            this.itemClassData = this.mapFromJson(options.itemClassData);
        }
        this.legacyData = options.legacyData && this.fromJson(options.legacyData, StatementLegacyData);
    }

    public toJson(): IStatementItemOptions {
        const json: IStatementItemOptions = {
            itemDate: this.itemDate.toISOString(),
        };
        if (typeof this.refId !== 'undefined') {
            json.refId = this.refId;
        }
        if (typeof this.amount !== 'undefined') {
            json.amount = this.amount;
        }
        if (typeof this.balance !== 'undefined') {
            json.balance = this.balance;
        }
        if (this.itemClass) {
            json.itemClass = this.itemClass.getValue();
        }
        if (this.itemClassData && this.itemClassData.size > 0) {
            json.itemClassData = {};
            this.itemClassData.forEach((value, key) => {
                (json.itemClassData as {[key: string]: string})[key] = value;
            });
        }
        if (this.legacyData) {
            json.legacyData = this.legacyData.toJson();
        }
        return json;
    }

    public getRefId(): string | undefined {
        return this.refId;
    }
    public setRefId(refId: string): void {
        this.refId = refId;
    }
    public getItemDate(): Date {
        return this.itemDate;
    }
    public setItemDate(itemDate: Date): void {
        this.itemDate = itemDate;
    }
    public getAmount(): number | undefined {
        return this.amount;
    }
    public setAmount(amount: number): void {
        this.amount = amount;
    }
    public getBalance(): number | undefined {
        return this.balance;
    }
    public setBalance(balance: number): void {
        this.balance = balance;
    }
    public getItemClass(): ItemClass | undefined {
        return this.itemClass;
    }
    public setItemClass(itemClass: ItemClass): void {
        this.itemClass = itemClass;
    }
    public getItemClassData(): Map<string, string> | undefined {
        return this.itemClassData;
    }
    public setItemClassData(itemClassData: Map<string, string>): void {
        this.itemClassData = itemClassData;
    }
    public getLegacyData(): StatementLegacyData | undefined {
        return this.legacyData;
    }
    public setLegacyData(legacyData: StatementLegacyData): void {
        this.legacyData = legacyData;
    }

}
