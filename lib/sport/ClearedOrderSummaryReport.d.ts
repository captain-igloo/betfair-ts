/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import ClearedOrderSummary, { IClearedOrderSummaryOptions } from '../sport/ClearedOrderSummary';
export interface IClearedOrderSummaryReportOptions {
    clearedOrders?: (ClearedOrderSummary | IClearedOrderSummaryOptions)[];
    moreAvailable?: boolean;
}
export default class ClearedOrderSummaryReport extends JsonResponse {
    private clearedOrders?;
    private moreAvailable?;
    constructor(options: IClearedOrderSummaryReportOptions);
    toJson(): IClearedOrderSummaryReportOptions;
    getClearedOrders(): ClearedOrderSummary[] | undefined;
    setClearedOrders(clearedOrders: ClearedOrderSummary[]): void;
    getMoreAvailable(): boolean | undefined;
    setMoreAvailable(moreAvailable: boolean): void;
}
