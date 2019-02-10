/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import ItemClass from '../account/enum/ItemClass';
import StatementLegacyData from '../account/StatementLegacyData';

export default class StatementItem extends JsonMember {
    private refId: string;
    private itemDate: Date | null;
    private amount: number | null;
    private balance: number | null;
    private itemClass: ItemClass;
    private itemClassData: Map<string, string>;
    private legacyData: StatementLegacyData;

    constructor(
        refId: string = '',
        itemDate: Date | null = null,
        amount: number | null = null,
        balance: number | null = null,
        itemClass: ItemClass = new ItemClass(),
        itemClassData: Map<string, string> = new Map<string, string>(),
        legacyData: StatementLegacyData = new StatementLegacyData(),
    ) {
        super();
        this.refId = refId;
        this.itemDate = itemDate;
        this.amount = amount;
        this.balance = balance;
        this.itemClass = itemClass;
        this.itemClassData = itemClassData;
        this.legacyData = legacyData;
    }

    public fromJson(json: any): void {
        if ('refId' in json) {
            this.refId = json.refId;
        }
        if ('itemDate' in json) {
            this.itemDate = new Date(json.itemDate);
        }
        if ('amount' in json) {
            this.amount = json.amount;
        }
        if ('balance' in json) {
            this.balance = json.balance;
        }
        if ('itemClass' in json) {
            this.itemClass.setValue(json.itemClass);
        }
        if ('itemClassData' in json) {
            Object.keys(json.itemClassData).forEach((key: string) => {
                this.itemClassData.set(key, json.itemClassData[key]);
            });
        }
        if ('legacyData' in json) {
            this.legacyData.fromJson(json.legacyData);
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.refId !== '') {
            json.refId = this.refId;
        }
        if (this.itemDate !== null) {
            json.itemDate = this.itemDate.toISOString();
        }
        if (this.amount !== null) {
            json.amount = this.amount;
        }
        if (this.balance !== null) {
            json.balance = this.balance;
        }
        if (this.itemClass.isValid()) {
            json.itemClass = this.itemClass.getValue();
        }
        if (this.itemClassData.size > 0) {
            json.itemClassData = {};
            this.itemClassData.forEach((value, key) => {
                json.itemClassData.key = value;
            });
        }
        if (this.legacyData.isValid()) {
            json.legacyData = this.legacyData.toJson();
        }
        return json;
    }

    public isValid(): boolean {
        return this.itemDate !== null;
    }

    public getRefId(): string {
        return this.refId;
    }
    public setRefId(refId: string): void {
        this.refId = refId;
    }
    public getItemDate(): Date | null {
        return this.itemDate;
    }
    public setItemDate(itemDate: Date | null): void {
        this.itemDate = itemDate;
    }
    public getAmount(): number | null {
        return this.amount;
    }
    public setAmount(amount: number | null): void {
        this.amount = amount;
    }
    public getBalance(): number | null {
        return this.balance;
    }
    public setBalance(balance: number | null): void {
        this.balance = balance;
    }
    public getItemClass(): ItemClass {
        return this.itemClass;
    }
    public setItemClass(itemClass: ItemClass): void {
        this.itemClass = itemClass;
    }
    public getItemClassData(): Map<string, string> {
        return this.itemClassData;
    }
    public setItemClassData(itemClassData: Map<string, string>): void {
        this.itemClassData = itemClassData;
    }
    public getLegacyData(): StatementLegacyData {
        return this.legacyData;
    }
    public setLegacyData(legacyData: StatementLegacyData): void {
        this.legacyData = legacyData;
    }

}
