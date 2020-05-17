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
    private betStatus;
    private eventTypeIds?;
    private eventIds?;
    private marketIds?;
    private runnerIds?;
    private betIds?;
    private customerOrderRefs?;
    private customerStrategyRefs?;
    private side?;
    private settledDateRange?;
    private groupBy?;
    private includeItemDescription?;
    private locale?;
    private fromRecord?;
    private recordCount?;
    constructor(options: IListClearedOrdersRequestOptions);
    toJson(): IListClearedOrdersRequestOptions;
    getBetStatus(): BetStatus;
    setBetStatus(betStatus: BetStatus): void;
    getEventTypeIds(): Set<string> | undefined;
    setEventTypeIds(eventTypeIds: Set<string>): void;
    getEventIds(): Set<string> | undefined;
    setEventIds(eventIds: Set<string>): void;
    getMarketIds(): Set<string> | undefined;
    setMarketIds(marketIds: Set<string>): void;
    getRunnerIds(): RunnerId[] | undefined;
    setRunnerIds(runnerIds: RunnerId[]): void;
    getBetIds(): Set<string> | undefined;
    setBetIds(betIds: Set<string>): void;
    getCustomerOrderRefs(): Set<string> | undefined;
    setCustomerOrderRefs(customerOrderRefs: Set<string>): void;
    getCustomerStrategyRefs(): Set<string> | undefined;
    setCustomerStrategyRefs(customerStrategyRefs: Set<string>): void;
    getSide(): Side | undefined;
    setSide(side: Side): void;
    getSettledDateRange(): TimeRange | undefined;
    setSettledDateRange(settledDateRange: TimeRange): void;
    getGroupBy(): GroupBy | undefined;
    setGroupBy(groupBy: GroupBy): void;
    getIncludeItemDescription(): boolean | undefined;
    setIncludeItemDescription(includeItemDescription: boolean): void;
    getLocale(): string | undefined;
    setLocale(locale: string): void;
    getFromRecord(): number | undefined;
    setFromRecord(fromRecord: number): void;
    getRecordCount(): number | undefined;
    setRecordCount(recordCount: number): void;
}
