/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import TimeRange, { ITimeRangeOptions } from '../common/TimeRange';
import OrderBy from '../sport/enum/OrderBy';
import OrderProjection from '../sport/enum/OrderProjection';
import SortDir from '../sport/enum/SortDir';
export interface IListCurrentOrdersRequestOptions {
    betIds?: Set<string> | string[];
    marketIds?: Set<string> | string[];
    orderProjection?: OrderProjection | string;
    customerOrderRefs?: Set<string> | string[];
    customerStrategyRefs?: Set<string> | string[];
    placedDateRange?: TimeRange | ITimeRangeOptions;
    dateRange?: TimeRange | ITimeRangeOptions;
    orderBy?: OrderBy | string;
    sortDir?: SortDir | string;
    fromRecord?: number;
    recordCount?: number;
}
export default class ListCurrentOrdersRequest extends JsonRequest {
    private betIds?;
    private marketIds?;
    private orderProjection?;
    private customerOrderRefs?;
    private customerStrategyRefs?;
    private placedDateRange?;
    private dateRange?;
    private orderBy?;
    private sortDir?;
    private fromRecord?;
    private recordCount?;
    constructor(options: IListCurrentOrdersRequestOptions);
    toJson(): IListCurrentOrdersRequestOptions;
    getBetIds(): Set<string> | undefined;
    setBetIds(betIds: Set<string>): void;
    getMarketIds(): Set<string> | undefined;
    setMarketIds(marketIds: Set<string>): void;
    getOrderProjection(): OrderProjection | undefined;
    setOrderProjection(orderProjection: OrderProjection): void;
    getCustomerOrderRefs(): Set<string> | undefined;
    setCustomerOrderRefs(customerOrderRefs: Set<string>): void;
    getCustomerStrategyRefs(): Set<string> | undefined;
    setCustomerStrategyRefs(customerStrategyRefs: Set<string>): void;
    getPlacedDateRange(): TimeRange | undefined;
    setPlacedDateRange(placedDateRange: TimeRange): void;
    getDateRange(): TimeRange | undefined;
    setDateRange(dateRange: TimeRange): void;
    getOrderBy(): OrderBy | undefined;
    setOrderBy(orderBy: OrderBy): void;
    getSortDir(): SortDir | undefined;
    setSortDir(sortDir: SortDir): void;
    getFromRecord(): number | undefined;
    setFromRecord(fromRecord: number): void;
    getRecordCount(): number | undefined;
    setRecordCount(recordCount: number): void;
}
