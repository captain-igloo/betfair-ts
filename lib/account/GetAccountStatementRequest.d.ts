/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import TimeRange from '../common/TimeRange';
import IncludeItem from '../account/enum/IncludeItem';
import Wallet from '../account/enum/Wallet';
export default class GetAccountStatementRequest extends JsonRequest {
    private locale;
    private fromRecord;
    private recordCount;
    private itemDateRange;
    private includeItem;
    private wallet;
    constructor(locale?: string, fromRecord?: number | null, recordCount?: number | null, itemDateRange?: TimeRange, includeItem?: IncludeItem, wallet?: Wallet);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getLocale(): string;
    setLocale(locale: string): void;
    getFromRecord(): number | null;
    setFromRecord(fromRecord: number | null): void;
    getRecordCount(): number | null;
    setRecordCount(recordCount: number | null): void;
    getItemDateRange(): TimeRange;
    setItemDateRange(itemDateRange: TimeRange): void;
    getIncludeItem(): IncludeItem;
    setIncludeItem(includeItem: IncludeItem): void;
    getWallet(): Wallet;
    setWallet(wallet: Wallet): void;
}
