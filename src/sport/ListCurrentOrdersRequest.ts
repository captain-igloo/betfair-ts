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
    private betIds?: Set<string>;
    private marketIds?: Set<string>;
    private orderProjection?: OrderProjection;
    private customerOrderRefs?: Set<string>;
    private customerStrategyRefs?: Set<string>;
    private placedDateRange?: TimeRange;
    private dateRange?: TimeRange;
    private orderBy?: OrderBy;
    private sortDir?: SortDir;
    private fromRecord?: number;
    private recordCount?: number;

    constructor(options: IListCurrentOrdersRequestOptions) {
        super();
        this.betIds = options.betIds && this.setFromJson(options.betIds);
        this.marketIds = options.marketIds && this.setFromJson(options.marketIds);
        if (options.orderProjection) {
            this.orderProjection = this.fromJson(options.orderProjection, OrderProjection);
        }
        this.customerOrderRefs = options.customerOrderRefs && this.setFromJson(options.customerOrderRefs);
        this.customerStrategyRefs = options.customerStrategyRefs && this.setFromJson(options.customerStrategyRefs);
        this.placedDateRange = options.placedDateRange && this.fromJson(options.placedDateRange, TimeRange);
        this.dateRange = options.dateRange && this.fromJson(options.dateRange, TimeRange);
        if (options.orderBy) {
            this.orderBy = this.fromJson(options.orderBy, OrderBy);
        }
        if (options.sortDir) {
            this.sortDir = this.fromJson(options.sortDir, SortDir);
        }
        this.fromRecord = options.fromRecord;
        this.recordCount = options.recordCount;
    }

    public toJson(): IListCurrentOrdersRequestOptions {
        const json: IListCurrentOrdersRequestOptions = {
        };
        if (this.betIds && this.betIds.size > 0) {
            json.betIds = this.setToJson(this.betIds);
        }
        if (this.marketIds && this.marketIds.size > 0) {
            json.marketIds = this.setToJson(this.marketIds);
        }
        if (this.orderProjection) {
            json.orderProjection = this.orderProjection.getValue();
        }
        if (this.customerOrderRefs && this.customerOrderRefs.size > 0) {
            json.customerOrderRefs = this.setToJson(this.customerOrderRefs);
        }
        if (this.customerStrategyRefs && this.customerStrategyRefs.size > 0) {
            json.customerStrategyRefs = this.setToJson(this.customerStrategyRefs);
        }
        if (this.placedDateRange) {
            json.placedDateRange = this.placedDateRange.toJson();
        }
        if (this.dateRange) {
            json.dateRange = this.dateRange.toJson();
        }
        if (this.orderBy) {
            json.orderBy = this.orderBy.getValue();
        }
        if (this.sortDir) {
            json.sortDir = this.sortDir.getValue();
        }
        if (typeof this.fromRecord !== 'undefined') {
            json.fromRecord = this.fromRecord;
        }
        if (typeof this.recordCount !== 'undefined') {
            json.recordCount = this.recordCount;
        }
        return json;
    }

    public getBetIds(): Set<string> | undefined {
        return this.betIds;
    }
    public setBetIds(betIds: Set<string>): void {
        this.betIds = betIds;
    }
    public getMarketIds(): Set<string> | undefined {
        return this.marketIds;
    }
    public setMarketIds(marketIds: Set<string>): void {
        this.marketIds = marketIds;
    }
    public getOrderProjection(): OrderProjection | undefined {
        return this.orderProjection;
    }
    public setOrderProjection(orderProjection: OrderProjection): void {
        this.orderProjection = orderProjection;
    }
    public getCustomerOrderRefs(): Set<string> | undefined {
        return this.customerOrderRefs;
    }
    public setCustomerOrderRefs(customerOrderRefs: Set<string>): void {
        this.customerOrderRefs = customerOrderRefs;
    }
    public getCustomerStrategyRefs(): Set<string> | undefined {
        return this.customerStrategyRefs;
    }
    public setCustomerStrategyRefs(customerStrategyRefs: Set<string>): void {
        this.customerStrategyRefs = customerStrategyRefs;
    }
    public getPlacedDateRange(): TimeRange | undefined {
        return this.placedDateRange;
    }
    public setPlacedDateRange(placedDateRange: TimeRange): void {
        this.placedDateRange = placedDateRange;
    }
    public getDateRange(): TimeRange | undefined {
        return this.dateRange;
    }
    public setDateRange(dateRange: TimeRange): void {
        this.dateRange = dateRange;
    }
    public getOrderBy(): OrderBy | undefined {
        return this.orderBy;
    }
    public setOrderBy(orderBy: OrderBy): void {
        this.orderBy = orderBy;
    }
    public getSortDir(): SortDir | undefined {
        return this.sortDir;
    }
    public setSortDir(sortDir: SortDir): void {
        this.sortDir = sortDir;
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

}
