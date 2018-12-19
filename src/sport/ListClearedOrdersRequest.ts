/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import TimeRange from '../common/TimeRange';
import JsonRequest from '../JsonRequest';
import BetStatus from '../sport/enum/BetStatus';
import GroupBy from '../sport/enum/GroupBy';
import Side from '../sport/enum/Side';
import RunnerId from '../sport/RunnerId';

export default class ListClearedOrdersRequest extends JsonRequest {
    private betStatus: BetStatus;
    private eventTypeIds: Set<string>;
    private eventIds: Set<string>;
    private marketIds: Set<string>;
    private runnerIds: RunnerId[];
    private betIds: Set<string>;
    private customerOrderRefs: Set<string>;
    private customerStrategyRefs: Set<string>;
    private side: Side;
    private settledDateRange: TimeRange;
    private groupBy: GroupBy;
    private includeItemDescription: boolean | null;
    private locale: string;
    private fromRecord: number | null;
    private recordCount: number | null;

    constructor(
        betStatus: BetStatus = new BetStatus(),
        eventTypeIds: Set<string> = new Set(),
        eventIds: Set<string> = new Set(),
        marketIds: Set<string> = new Set(),
        runnerIds: RunnerId[] = [],
        betIds: Set<string> = new Set(),
        customerOrderRefs: Set<string> = new Set(),
        customerStrategyRefs: Set<string> = new Set(),
        side: Side = new Side(),
        settledDateRange: TimeRange = new TimeRange(),
        groupBy: GroupBy = new GroupBy(),
        includeItemDescription: boolean | null = null,
        locale: string = '',
        fromRecord: number | null = null,
        recordCount: number | null = null,
    ) {
        super();
        this.betStatus = betStatus;
        this.eventTypeIds = eventTypeIds;
        this.eventIds = eventIds;
        this.marketIds = marketIds;
        this.runnerIds = runnerIds;
        this.betIds = betIds;
        this.customerOrderRefs = customerOrderRefs;
        this.customerStrategyRefs = customerStrategyRefs;
        this.side = side;
        this.settledDateRange = settledDateRange;
        this.groupBy = groupBy;
        this.includeItemDescription = includeItemDescription;
        this.locale = locale;
        this.fromRecord = fromRecord;
        this.recordCount = recordCount;
    }

    public fromJson(json: any): void {
        if ('betStatus' in json) {
            this.betStatus.setValue(json.betStatus);
        }
        if ('eventTypeIds' in json) {
            this.eventTypeIds = json.eventTypeIds;
        }
        if ('eventIds' in json) {
            this.eventIds = json.eventIds;
        }
        if ('marketIds' in json) {
            this.marketIds = json.marketIds;
        }
        if ('runnerIds' in json) {
            this.runnerIds = json.runnerIds.map((runnerIdsJson: any) => {
                const element = new RunnerId();
                element.fromJson(runnerIdsJson);
                return element;
            });
        }
        if ('betIds' in json) {
            this.betIds = json.betIds;
        }
        if ('customerOrderRefs' in json) {
            this.customerOrderRefs = json.customerOrderRefs;
        }
        if ('customerStrategyRefs' in json) {
            this.customerStrategyRefs = json.customerStrategyRefs;
        }
        if ('side' in json) {
            this.side.setValue(json.side);
        }
        if ('settledDateRange' in json) {
            this.settledDateRange.fromJson(json.settledDateRange);
        }
        if ('groupBy' in json) {
            this.groupBy.setValue(json.groupBy);
        }
        if ('includeItemDescription' in json) {
            this.includeItemDescription = json.includeItemDescription;
        }
        if ('locale' in json) {
            this.locale = json.locale;
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
        if (this.betStatus.isValid()) {
            json.betStatus = this.betStatus;
        }
        if (this.eventTypeIds.size > 0) {
            json.eventTypeIds = this.eventTypeIds;
        }
        if (this.eventIds.size > 0) {
            json.eventIds = this.eventIds;
        }
        if (this.marketIds.size > 0) {
            json.marketIds = this.marketIds;
        }
        if (this.runnerIds.length > 0) {
            json.runnerIds = this.runnerIds.map((value) => value.toJson());
        }
        if (this.betIds.size > 0) {
            json.betIds = this.betIds;
        }
        if (this.customerOrderRefs.size > 0) {
            json.customerOrderRefs = this.customerOrderRefs;
        }
        if (this.customerStrategyRefs.size > 0) {
            json.customerStrategyRefs = this.customerStrategyRefs;
        }
        if (this.side.isValid()) {
            json.side = this.side;
        }
        if (this.settledDateRange.isValid()) {
            json.settledDateRange = this.settledDateRange.toJson();
        }
        if (this.groupBy.isValid()) {
            json.groupBy = this.groupBy;
        }
        if (this.includeItemDescription !== null) {
            json.includeItemDescription = this.includeItemDescription;
        }
        if (this.locale !== null) {
            json.locale = this.locale;
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
        return this.betStatus.isValid();
    }

    public getBetStatus(): BetStatus {
        return this.betStatus;
    }
    public setBetStatus(betStatus: BetStatus): void {
        this.betStatus = betStatus;
    }
    public getEventTypeIds(): Set<string> {
        return this.eventTypeIds;
    }
    public setEventTypeIds(eventTypeIds: Set<string>): void {
        this.eventTypeIds = eventTypeIds;
    }
    public getEventIds(): Set<string> {
        return this.eventIds;
    }
    public setEventIds(eventIds: Set<string>): void {
        this.eventIds = eventIds;
    }
    public getMarketIds(): Set<string> {
        return this.marketIds;
    }
    public setMarketIds(marketIds: Set<string>): void {
        this.marketIds = marketIds;
    }
    public getRunnerIds(): RunnerId[] {
        return this.runnerIds;
    }
    public setRunnerIds(runnerIds: RunnerId[]): void {
        this.runnerIds = runnerIds;
    }
    public getBetIds(): Set<string> {
        return this.betIds;
    }
    public setBetIds(betIds: Set<string>): void {
        this.betIds = betIds;
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
    public getSide(): Side {
        return this.side;
    }
    public setSide(side: Side): void {
        this.side = side;
    }
    public getSettledDateRange(): TimeRange {
        return this.settledDateRange;
    }
    public setSettledDateRange(settledDateRange: TimeRange): void {
        this.settledDateRange = settledDateRange;
    }
    public getGroupBy(): GroupBy {
        return this.groupBy;
    }
    public setGroupBy(groupBy: GroupBy): void {
        this.groupBy = groupBy;
    }
    public getIncludeItemDescription(): boolean | null {
        return this.includeItemDescription;
    }
    public setIncludeItemDescription(includeItemDescription: boolean | null): void {
        this.includeItemDescription = includeItemDescription;
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

}
