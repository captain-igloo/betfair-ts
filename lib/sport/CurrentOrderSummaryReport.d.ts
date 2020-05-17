/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import CurrentOrderSummary, { ICurrentOrderSummaryOptions } from '../sport/CurrentOrderSummary';
export interface ICurrentOrderSummaryReportOptions {
    currentOrders?: Array<CurrentOrderSummary | ICurrentOrderSummaryOptions>;
    moreAvailable?: boolean;
}
export default class CurrentOrderSummaryReport extends JsonResponse {
    private currentOrders?;
    private moreAvailable?;
    constructor(options: ICurrentOrderSummaryReportOptions);
    toJson(): ICurrentOrderSummaryReportOptions;
    getCurrentOrders(): CurrentOrderSummary[] | undefined;
    setCurrentOrders(currentOrders: CurrentOrderSummary[]): void;
    getMoreAvailable(): boolean | undefined;
    setMoreAvailable(moreAvailable: boolean): void;
}
