/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import ClearedOrderSummary, { IClearedOrderSummaryOptions } from '../sport/ClearedOrderSummary';

export interface IClearedOrderSummaryReportOptions {
    clearedOrders?: Array<ClearedOrderSummary | IClearedOrderSummaryOptions>;
    moreAvailable?: boolean;
}

export default class ClearedOrderSummaryReport extends JsonResponse {
    private clearedOrders?: ClearedOrderSummary[];
    private moreAvailable?: boolean;

    constructor(options: IClearedOrderSummaryReportOptions) {
        super();
        if (this.validateJson(options)) {
            if (options.clearedOrders) {
                this.clearedOrders = this.arrayFromJson(options.clearedOrders, ClearedOrderSummary);
            }
            this.moreAvailable = options.moreAvailable;
        }
    }

    public toJson(): IClearedOrderSummaryReportOptions {
        const json: IClearedOrderSummaryReportOptions = {
        };
        if (this.clearedOrders && this.clearedOrders.length > 0) {
            json.clearedOrders = this.clearedOrders.map((value) => value.toJson());
        }
        if (typeof this.moreAvailable !== 'undefined') {
            json.moreAvailable = this.moreAvailable;
        }
        return json;
    }

    public getClearedOrders(): ClearedOrderSummary[] | undefined {
        return this.clearedOrders;
    }
    public setClearedOrders(clearedOrders: ClearedOrderSummary[]): void {
        this.clearedOrders = clearedOrders;
    }
    public getMoreAvailable(): boolean | undefined {
        return this.moreAvailable;
    }
    public setMoreAvailable(moreAvailable: boolean): void {
        this.moreAvailable = moreAvailable;
    }

}
