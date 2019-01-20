/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';

import IncludeItem from '../account/enum/IncludeItem';
import Wallet from '../account/enum/Wallet';
import TimeRange from '../common/TimeRange';

export default class GetAccountStatementRequest extends JsonRequest {
    private locale: string;
    private fromRecord: number | null;
    private recordCount: number | null;
    private itemDateRange: TimeRange;
    private includeItem: IncludeItem;
    private wallet: Wallet;

    constructor(
        locale: string = '',
        fromRecord: number | null = null,
        recordCount: number | null = null,
        itemDateRange: TimeRange = new TimeRange(),
        includeItem: IncludeItem = new IncludeItem(),
        wallet: Wallet = new Wallet(),
    ) {
        super();
        this.locale = locale;
        this.fromRecord = fromRecord;
        this.recordCount = recordCount;
        this.itemDateRange = itemDateRange;
        this.includeItem = includeItem;
        this.wallet = wallet;
    }

    public fromJson(json: any): void {
        if ('locale' in json) {
            this.locale = json.locale;
        }
        if ('fromRecord' in json) {
            this.fromRecord = json.fromRecord;
        }
        if ('recordCount' in json) {
            this.recordCount = json.recordCount;
        }
        if ('itemDateRange' in json) {
            this.itemDateRange.fromJson(json.itemDateRange);
        }
        if ('includeItem' in json) {
            this.includeItem.setValue(json.includeItem);
        }
        if ('wallet' in json) {
            this.wallet.setValue(json.wallet);
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.locale !== '') {
            json.locale = this.locale;
        }
        if (this.fromRecord !== null) {
            json.fromRecord = this.fromRecord;
        }
        if (this.recordCount !== null) {
            json.recordCount = this.recordCount;
        }
        if (this.itemDateRange.isValid()) {
            json.itemDateRange = this.itemDateRange.toJson();
        }
        if (this.includeItem.isValid()) {
            json.includeItem = this.includeItem;
        }
        if (this.wallet.isValid()) {
            json.wallet = this.wallet;
        }
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getLocale(): string {
        return this.locale;
    }
    public setLocale(locale: string): void {
        this.locale = locale;
    }
    public getFromRecord(): number | null {
        return this.fromRecord;
    }
    public setFromRecord(fromRecord: number | null): void {
        this.fromRecord = fromRecord;
    }
    public getRecordCount(): number | null {
        return this.recordCount;
    }
    public setRecordCount(recordCount: number | null): void {
        this.recordCount = recordCount;
    }
    public getItemDateRange(): TimeRange {
        return this.itemDateRange;
    }
    public setItemDateRange(itemDateRange: TimeRange): void {
        this.itemDateRange = itemDateRange;
    }
    public getIncludeItem(): IncludeItem {
        return this.includeItem;
    }
    public setIncludeItem(includeItem: IncludeItem): void {
        this.includeItem = includeItem;
    }
    public getWallet(): Wallet {
        return this.wallet;
    }
    public setWallet(wallet: Wallet): void {
        this.wallet = wallet;
    }

}
