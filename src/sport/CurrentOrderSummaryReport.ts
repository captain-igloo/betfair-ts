/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import CurrentOrderSummary from '../sport/CurrentOrderSummary';

export default class CurrentOrderSummaryReport extends JsonResponse {
    private currentOrders: CurrentOrderSummary[];
    private moreAvailable: boolean | null;

    constructor(
        currentOrders: CurrentOrderSummary[] = [],
        moreAvailable: boolean | null = null,
    ) {
        super();
        this.currentOrders = currentOrders;
        this.moreAvailable = moreAvailable;
    }

    public fromJson(json: any): void {
        if (this.validateJson(json)) {
            if ('currentOrders' in json) {
                this.currentOrders = json.currentOrders.map((currentOrdersJson: any) => {
                    const element = new CurrentOrderSummary();
                    element.fromJson(currentOrdersJson);
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
        if (this.currentOrders.length > 0) {
            json.currentOrders = this.currentOrders.map((value) => value.toJson());
        }
        if (this.moreAvailable !== null) {
            json.moreAvailable = this.moreAvailable;
        }
        return json;
    }

    public isValid(): boolean {
        return this.currentOrders.length > 0 &&
            this.moreAvailable !== null;
    }

    public getCurrentOrders(): CurrentOrderSummary[] {
        return this.currentOrders;
    }
    public setCurrentOrders(currentOrders: CurrentOrderSummary[]): void {
        this.currentOrders = currentOrders;
    }
    public getMoreAvailable(): boolean | null {
        return this.moreAvailable;
    }
    public setMoreAvailable(moreAvailable: boolean | null): void {
        this.moreAvailable = moreAvailable;
    }

}
