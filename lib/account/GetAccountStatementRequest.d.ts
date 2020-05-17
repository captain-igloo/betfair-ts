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
    private locale?;
    private fromRecord?;
    private recordCount?;
    private itemDateRange?;
    private includeItem?;
    private wallet?;
    constructor(options: IGetAccountStatementRequestOptions);
    toJson(): IGetAccountStatementRequestOptions;
    getLocale(): string | undefined;
    setLocale(locale: string): void;
    getFromRecord(): number | undefined;
    setFromRecord(fromRecord: number): void;
    getRecordCount(): number | undefined;
    setRecordCount(recordCount: number): void;
    getItemDateRange(): TimeRange | undefined;
    setItemDateRange(itemDateRange: TimeRange): void;
    getIncludeItem(): IncludeItem | undefined;
    setIncludeItem(includeItem: IncludeItem): void;
    getWallet(): Wallet | undefined;
    setWallet(wallet: Wallet): void;
}
