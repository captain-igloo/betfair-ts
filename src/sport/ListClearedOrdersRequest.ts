/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';

import TimeRange, { ITimeRangeOptions } from '../common/TimeRange';
import BetStatus from '../sport/enum/BetStatus';
import GroupBy from '../sport/enum/GroupBy';
import Side from '../sport/enum/Side';
import RunnerId, { IRunnerIdOptions } from '../sport/RunnerId';

export interface IListClearedOrdersRequestOptions {
    betStatus: BetStatus | string;
    eventTypeIds?: Set<string> | string[];
    eventIds?: Set<string> | string[];
    marketIds?: Set<string> | string[];
    runnerIds?: Array<RunnerId | IRunnerIdOptions>;
    betIds?: Set<string> | string[];
    customerOrderRefs?: Set<string> | string[];
    customerStrategyRefs?: Set<string> | string[];
    side?: Side | string;
    settledDateRange?: TimeRange | ITimeRangeOptions;
    groupBy?: GroupBy | string;
    includeItemDescription?: boolean;
    locale?: string;
    fromRecord?: number;
    recordCount?: number;
}

export default class ListClearedOrdersRequest extends JsonRequest {
    private betStatus: BetStatus;
    private eventTypeIds?: Set<string>;
    private eventIds?: Set<string>;
    private marketIds?: Set<string>;
    private runnerIds?: RunnerId[];
    private betIds?: Set<string>;
    private customerOrderRefs?: Set<string>;
    private customerStrategyRefs?: Set<string>;
    private side?: Side;
    private settledDateRange?: TimeRange;
    private groupBy?: GroupBy;
    private includeItemDescription?: boolean;
    private locale?: string;
    private fromRecord?: number;
    private recordCount?: number;

    constructor(options: IListClearedOrdersRequestOptions) {
        super();
        this.betStatus = this.fromJson(options.betStatus, BetStatus);
        this.eventTypeIds = options.eventTypeIds && this.setFromJson(options.eventTypeIds);
        this.eventIds = options.eventIds && this.setFromJson(options.eventIds);
        this.marketIds = options.marketIds && this.setFromJson(options.marketIds);
        if (options.runnerIds) {
            this.runnerIds = this.arrayFromJson(options.runnerIds, RunnerId);
        }
        this.betIds = options.betIds && this.setFromJson(options.betIds);
        this.customerOrderRefs = options.customerOrderRefs && this.setFromJson(options.customerOrderRefs);
        this.customerStrategyRefs = options.customerStrategyRefs && this.setFromJson(options.customerStrategyRefs);
        if (options.side) {
            this.side = this.fromJson(options.side, Side);
        }
        this.settledDateRange = options.settledDateRange && this.fromJson(options.settledDateRange, TimeRange);
        if (options.groupBy) {
            this.groupBy = this.fromJson(options.groupBy, GroupBy);
        }
        this.includeItemDescription = options.includeItemDescription;
        this.locale = options.locale;
        this.fromRecord = options.fromRecord;
        this.recordCount = options.recordCount;
    }

    public toJson(): IListClearedOrdersRequestOptions {
        const json: IListClearedOrdersRequestOptions = {
            betStatus: this.betStatus.getValue(),
        };
        if (this.eventTypeIds && this.eventTypeIds.size > 0) {
            json.eventTypeIds = this.setToJson(this.eventTypeIds);
        }
        if (this.eventIds && this.eventIds.size > 0) {
            json.eventIds = this.setToJson(this.eventIds);
        }
        if (this.marketIds && this.marketIds.size > 0) {
            json.marketIds = this.setToJson(this.marketIds);
        }
        if (this.runnerIds && this.runnerIds.length > 0) {
            json.runnerIds = this.runnerIds.map((value) => value.toJson());
        }
        if (this.betIds && this.betIds.size > 0) {
            json.betIds = this.setToJson(this.betIds);
        }
        if (this.customerOrderRefs && this.customerOrderRefs.size > 0) {
            json.customerOrderRefs = this.setToJson(this.customerOrderRefs);
        }
        if (this.customerStrategyRefs && this.customerStrategyRefs.size > 0) {
            json.customerStrategyRefs = this.setToJson(this.customerStrategyRefs);
        }
        if (this.side) {
            json.side = this.side.getValue();
        }
        if (this.settledDateRange) {
            json.settledDateRange = this.settledDateRange.toJson();
        }
        if (this.groupBy) {
            json.groupBy = this.groupBy.getValue();
        }
        if (typeof this.includeItemDescription !== 'undefined') {
            json.includeItemDescription = this.includeItemDescription;
        }
        if (typeof this.locale !== 'undefined') {
            json.locale = this.locale;
        }
        if (typeof this.fromRecord !== 'undefined') {
            json.fromRecord = this.fromRecord;
        }
        if (typeof this.recordCount !== 'undefined') {
            json.recordCount = this.recordCount;
        }
        return json;
    }

    public getBetStatus(): BetStatus {
        return this.betStatus;
    }
    public setBetStatus(betStatus: BetStatus): void {
        this.betStatus = betStatus;
    }
    public getEventTypeIds(): Set<string> | undefined {
        return this.eventTypeIds;
    }
    public setEventTypeIds(eventTypeIds: Set<string>): void {
        this.eventTypeIds = eventTypeIds;
    }
    public getEventIds(): Set<string> | undefined {
        return this.eventIds;
    }
    public setEventIds(eventIds: Set<string>): void {
        this.eventIds = eventIds;
    }
    public getMarketIds(): Set<string> | undefined {
        return this.marketIds;
    }
    public setMarketIds(marketIds: Set<string>): void {
        this.marketIds = marketIds;
    }
    public getRunnerIds(): RunnerId[] | undefined {
        return this.runnerIds;
    }
    public setRunnerIds(runnerIds: RunnerId[]): void {
        this.runnerIds = runnerIds;
    }
    public getBetIds(): Set<string> | undefined {
        return this.betIds;
    }
    public setBetIds(betIds: Set<string>): void {
        this.betIds = betIds;
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
    public getSide(): Side | undefined {
        return this.side;
    }
    public setSide(side: Side): void {
        this.side = side;
    }
    public getSettledDateRange(): TimeRange | undefined {
        return this.settledDateRange;
    }
    public setSettledDateRange(settledDateRange: TimeRange): void {
        this.settledDateRange = settledDateRange;
    }
    public getGroupBy(): GroupBy | undefined {
        return this.groupBy;
    }
    public setGroupBy(groupBy: GroupBy): void {
        this.groupBy = groupBy;
    }
    public getIncludeItemDescription(): boolean | undefined {
        return this.includeItemDescription;
    }
    public setIncludeItemDescription(includeItemDescription: boolean): void {
        this.includeItemDescription = includeItemDescription;
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

}
