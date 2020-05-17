/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';

import IncludeItem from '../account/enum/IncludeItem';
import Wallet from '../account/enum/Wallet';
import TimeRange, { ITimeRangeOptions } from '../common/TimeRange';

export interface IGetAccountStatementRequestOptions {
    locale?: string;
    fromRecord?: number;
    recordCount?: number;
    itemDateRange?: TimeRange | ITimeRangeOptions;
    includeItem?: IncludeItem | string;
    wallet?: Wallet | string;
}

export default class GetAccountStatementRequest extends JsonRequest {
    private locale?: string;
    private fromRecord?: number;
    private recordCount?: number;
    private itemDateRange?: TimeRange;
    private includeItem?: IncludeItem;
    private wallet?: Wallet;

    constructor(options: IGetAccountStatementRequestOptions) {
        super();
        this.locale = options.locale;
        this.fromRecord = options.fromRecord;
        this.recordCount = options.recordCount;
        this.itemDateRange = options.itemDateRange && this.fromJson(options.itemDateRange, TimeRange);
        if (options.includeItem) {
            this.includeItem = this.fromJson(options.includeItem, IncludeItem);
        }
        if (options.wallet) {
            this.wallet = this.fromJson(options.wallet, Wallet);
        }
    }

    public toJson(): IGetAccountStatementRequestOptions {
        const json: IGetAccountStatementRequestOptions = {
        };
        if (typeof this.locale !== 'undefined') {
            json.locale = this.locale;
        }
        if (typeof this.fromRecord !== 'undefined') {
            json.fromRecord = this.fromRecord;
        }
        if (typeof this.recordCount !== 'undefined') {
            json.recordCount = this.recordCount;
        }
        if (this.itemDateRange) {
            json.itemDateRange = this.itemDateRange.toJson();
        }
        if (this.includeItem) {
            json.includeItem = this.includeItem.getValue();
        }
        if (this.wallet) {
            json.wallet = this.wallet.getValue();
        }
        return json;
    }

    public getLocale(): string | undefined {
        return this.locale;
    }
    public setLocale(locale: string): void {
        this.locale = locale;
    }
    public getFromRecord(): number | undefined {
        return this.fromRecord;
    }
    public setFromRecord(fromRecord: number): void {
        this.fromRecord = fromRecord;
    }
    public getRecordCount(): number | undefined {
        return this.recordCount;
    }
    public setRecordCount(recordCount: number): void {
        this.recordCount = recordCount;
    }
    public getItemDateRange(): TimeRange | undefined {
        return this.itemDateRange;
    }
    public setItemDateRange(itemDateRange: TimeRange): void {
        this.itemDateRange = itemDateRange;
    }
    public getIncludeItem(): IncludeItem | undefined {
        return this.includeItem;
    }
    public setIncludeItem(includeItem: IncludeItem): void {
        this.includeItem = includeItem;
    }
    public getWallet(): Wallet | undefined {
        return this.wallet;
    }
    public setWallet(wallet: Wallet): void {
        this.wallet = wallet;
    }

}
