/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import TimeRange from '../common/TimeRange';
import JsonRequest from '../JsonRequest';
import OrderBy from '../sport/enum/OrderBy';
import OrderProjection from '../sport/enum/OrderProjection';
import SortDir from '../sport/enum/SortDir';
export default class ListCurrentOrdersRequest extends JsonRequest {
    private betIds;
    private marketIds;
    private orderProjection;
    private customerOrderRefs;
    private customerStrategyRefs;
    private placedDateRange;
    private dateRange;
    private orderBy;
    private sortDir;
    private fromRecord;
    private recordCount;
    constructor(betIds?: Set<string>, marketIds?: Set<string>, orderProjection?: OrderProjection, customerOrderRefs?: Set<string>, customerStrategyRefs?: Set<string>, placedDateRange?: TimeRange, dateRange?: TimeRange, orderBy?: OrderBy, sortDir?: SortDir, fromRecord?: number | null, recordCount?: number | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getBetIds(): Set<string>;
    setBetIds(betIds: Set<string>): void;
    getMarketIds(): Set<string>;
    setMarketIds(marketIds: Set<string>): void;
    getOrderProjection(): OrderProjection;
    setOrderProjection(orderProjection: OrderProjection): void;
    getCustomerOrderRefs(): Set<string>;
    setCustomerOrderRefs(customerOrderRefs: Set<string>): void;
    getCustomerStrategyRefs(): Set<string>;
    setCustomerStrategyRefs(customerStrategyRefs: Set<string>): void;
    getPlacedDateRange(): TimeRange;
    setPlacedDateRange(placedDateRange: TimeRange): void;
    getDateRange(): TimeRange;
    setDateRange(dateRange: TimeRange): void;
    getOrderBy(): OrderBy;
    setOrderBy(orderBy: OrderBy): void;
    getSortDir(): SortDir;
    setSortDir(sortDir: SortDir): void;
    getFromRecord(): number | null;
    setFromRecord(fromRecord: number | null): void;
    getRecordCount(): number | null;
    setRecordCount(recordCount: number | null): void;
}
