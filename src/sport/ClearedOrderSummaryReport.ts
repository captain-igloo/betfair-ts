/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import ClearedOrderSummary from '../sport/ClearedOrderSummary';

export default class ClearedOrderSummaryReport extends JsonResponse {
    private clearedOrders: ClearedOrderSummary[];
    private moreAvailable: boolean | null;

    constructor(
        clearedOrders: ClearedOrderSummary[] = [],
        moreAvailable: boolean | null = null,
    ) {
        super();
        this.clearedOrders = clearedOrders;
        this.moreAvailable = moreAvailable;
    }

    public fromJson(json: any): void {
        if (this.validateJson(json)) {
            if ('clearedOrders' in json) {
                this.clearedOrders = json.clearedOrders.map((clearedOrdersJson: any) => {
                    const element = new ClearedOrderSummary();
                    element.fromJson(clearedOrdersJson);
                    return element;
                });
            }
            if ('moreAvailable' in json) {
                this.moreAvailable = json.moreAvailable;
            }
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.clearedOrders.length > 0) {
            json.clearedOrders = this.clearedOrders.map((value) => value.toJson());
        }
        if (this.moreAvailable !== null) {
            json.moreAvailable = this.moreAvailable;
        }
        return json;
    }

    public isValid(): boolean {
        return this.clearedOrders.length > 0 &&
            this.moreAvailable !== null;
    }

    public getClearedOrders(): ClearedOrderSummary[] {
        return this.clearedOrders;
    }
    public setClearedOrders(clearedOrders: ClearedOrderSummary[]): void {
        this.clearedOrders = clearedOrders;
    }
    public getMoreAvailable(): boolean | null {
        return this.moreAvailable;
    }
    public setMoreAvailable(moreAvailable: boolean | null): void {
        this.moreAvailable = moreAvailable;
    }

}
