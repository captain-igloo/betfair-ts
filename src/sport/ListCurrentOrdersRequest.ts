/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';

import TimeRange from '../common/TimeRange';
import OrderBy from '../sport/enum/OrderBy';
import OrderProjection from '../sport/enum/OrderProjection';
import SortDir from '../sport/enum/SortDir';

export default class ListCurrentOrdersRequest extends JsonRequest {
    private betIds: Set<string>;
    private marketIds: Set<string>;
    private orderProjection: OrderProjection;
    private customerOrderRefs: Set<string>;
    private customerStrategyRefs: Set<string>;
    private placedDateRange: TimeRange;
    private dateRange: TimeRange;
    private orderBy: OrderBy;
    private sortDir: SortDir;
    private fromRecord: number | null;
    private recordCount: number | null;

    constructor(
        betIds: Set<string> = new Set(),
        marketIds: Set<string> = new Set(),
        orderProjection: OrderProjection = new OrderProjection(),
        customerOrderRefs: Set<string> = new Set(),
        customerStrategyRefs: Set<string> = new Set(),
        placedDateRange: TimeRange = new TimeRange(),
        dateRange: TimeRange = new TimeRange(),
        orderBy: OrderBy = new OrderBy(),
        sortDir: SortDir = new SortDir(),
        fromRecord: number | null = null,
        recordCount: number | null = null,
    ) {
        super();
        this.betIds = betIds;
        this.marketIds = marketIds;
        this.orderProjection = orderProjection;
        this.customerOrderRefs = customerOrderRefs;
        this.customerStrategyRefs = customerStrategyRefs;
        this.placedDateRange = placedDateRange;
        this.dateRange = dateRange;
        this.orderBy = orderBy;
        this.sortDir = sortDir;
        this.fromRecord = fromRecord;
        this.recordCount = recordCount;
    }

    public fromJson(json: any): void {
        if ('betIds' in json) {
            this.betIds = json.betIds;
        }
        if ('marketIds' in json) {
            this.marketIds = json.marketIds;
        }
        if ('orderProjection' in json) {
            this.orderProjection.setValue(json.orderProjection);
        }
        if ('customerOrderRefs' in json) {
            this.customerOrderRefs = json.customerOrderRefs;
        }
        if ('customerStrategyRefs' in json) {
            this.customerStrategyRefs = json.customerStrategyRefs;
        }
        if ('placedDateRange' in json) {
            this.placedDateRange.fromJson(json.placedDateRange);
        }
        if ('dateRange' in json) {
            this.dateRange.fromJson(json.dateRange);
        }
        if ('orderBy' in json) {
            this.orderBy.setValue(json.orderBy);
        }
        if ('sortDir' in json) {
            this.sortDir.setValue(json.sortDir);
        }
        if ('fromRecord' in json) {
            this.fromRecord = json.fromRecord;
        }
        if ('recordCount' in json) {
            this.recordCount = json.recordCount;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.betIds.size > 0) {
            json.betIds = [];
            this.betIds.forEach((element) => {
                json.betIds.push(element);
            });
        }
        if (this.marketIds.size > 0) {
            json.marketIds = [];
            this.marketIds.forEach((element) => {
                json.marketIds.push(element);
            });
        }
        if (this.orderProjection.isValid()) {
            json.orderProjection = this.orderProjection.getValue();
        }
        if (this.customerOrderRefs.size > 0) {
            json.customerOrderRefs = [];
            this.customerOrderRefs.forEach((element) => {
                json.customerOrderRefs.push(element);
            });
        }
        if (this.customerStrategyRefs.size > 0) {
            json.customerStrategyRefs = [];
            this.customerStrategyRefs.forEach((element) => {
                json.customerStrategyRefs.push(element);
            });
        }
        if (this.placedDateRange.isValid()) {
            json.placedDateRange = this.placedDateRange.toJson();
        }
        if (this.dateRange.isValid()) {
            json.dateRange = this.dateRange.toJson();
        }
        if (this.orderBy.isValid()) {
            json.orderBy = this.orderBy.getValue();
        }
        if (this.sortDir.isValid()) {
            json.sortDir = this.sortDir.getValue();
        }
        if (this.fromRecord !== null) {
            json.fromRecord = this.fromRecord;
        }
        if (this.recordCount !== null) {
            json.recordCount = this.recordCount;
        }
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getBetIds(): Set<string> {
        return this.betIds;
    }
    public setBetIds(betIds: Set<string>): void {
        this.betIds = betIds;
    }
    public getMarketIds(): Set<string> {
        return this.marketIds;
    }
    public setMarketIds(marketIds: Set<string>): void {
        this.marketIds = marketIds;
    }
    public getOrderProjection(): OrderProjection {
        return this.orderProjection;
    }
    public setOrderProjection(orderProjection: OrderProjection): void {
        this.orderProjection = orderProjection;
    }
    public getCustomerOrderRefs(): Set<string> {
        return this.customerOrderRefs;
    }
    public setCustomerOrderRefs(customerOrderRefs: Set<string>): void {
        this.customerOrderRefs = customerOrderRefs;
    }
    public getCustomerStrategyRefs(): Set<string> {
        return this.customerStrategyRefs;
    }
    public setCustomerStrategyRefs(customerStrategyRefs: Set<string>): void {
        this.customerStrategyRefs = customerStrategyRefs;
    }
    public getPlacedDateRange(): TimeRange {
        return this.placedDateRange;
    }
    public setPlacedDateRange(placedDateRange: TimeRange): void {
        this.placedDateRange = placedDateRange;
    }
    public getDateRange(): TimeRange {
        return this.dateRange;
    }
    public setDateRange(dateRange: TimeRange): void {
        this.dateRange = dateRange;
    }
    public getOrderBy(): OrderBy {
        return this.orderBy;
    }
    public setOrderBy(orderBy: OrderBy): void {
        this.orderBy = orderBy;
    }
    public getSortDir(): SortDir {
        return this.sortDir;
    }
    public setSortDir(sortDir: SortDir): void {
        this.sortDir = sortDir;
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

}
