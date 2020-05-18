/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import CurrentOrderSummary, { ICurrentOrderSummaryOptions } from '../sport/CurrentOrderSummary';

export interface ICurrentOrderSummaryReportOptions {
    currentOrders?: (CurrentOrderSummary | ICurrentOrderSummaryOptions)[];
    moreAvailable?: boolean;
}

export default class CurrentOrderSummaryReport extends JsonResponse {
    private currentOrders?: CurrentOrderSummary[];
    private moreAvailable?: boolean;

    constructor(options: ICurrentOrderSummaryReportOptions) {
        super();
        if (this.validateJson(options)) {
            if (options.currentOrders) {
                this.currentOrders = this.arrayFromJson(options.currentOrders, CurrentOrderSummary);
            }
            this.moreAvailable = options.moreAvailable;
        }
    }

    public toJson(): ICurrentOrderSummaryReportOptions {
        const json: ICurrentOrderSummaryReportOptions = {
        };
        if (this.currentOrders && this.currentOrders.length > 0) {
            json.currentOrders = this.currentOrders.map((value) => value.toJson());
        }
        if (typeof this.moreAvailable !== 'undefined') {
            json.moreAvailable = this.moreAvailable;
        }
        return json;
    }

    public getCurrentOrders(): CurrentOrderSummary[] | undefined {
        return this.currentOrders;
    }
    public setCurrentOrders(currentOrders: CurrentOrderSummary[]): void {
        this.currentOrders = currentOrders;
    }
    public getMoreAvailable(): boolean | undefined {
        return this.moreAvailable;
    }
    public setMoreAvailable(moreAvailable: boolean): void {
        this.moreAvailable = moreAvailable;
    }

}
