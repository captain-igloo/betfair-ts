/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import CurrentOrderSummary from '../sport/CurrentOrderSummary';
export default class CurrentOrderSummaryReport extends JsonResponse {
    private currentOrders;
    private moreAvailable;
    constructor(currentOrders?: CurrentOrderSummary[], moreAvailable?: boolean | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getCurrentOrders(): CurrentOrderSummary[];
    setCurrentOrders(currentOrders: CurrentOrderSummary[]): void;
    getMoreAvailable(): boolean | null;
    setMoreAvailable(moreAvailable: boolean | null): void;
}
