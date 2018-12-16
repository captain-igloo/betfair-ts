/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import ClearedOrderSummary from '../sport/ClearedOrderSummary';
export default class ClearedOrderSummaryReport extends JsonResponse {
    private clearedOrders;
    private moreAvailable;
    constructor(clearedOrders?: ClearedOrderSummary[], moreAvailable?: boolean | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getClearedOrders(): ClearedOrderSummary[];
    setClearedOrders(clearedOrders: ClearedOrderSummary[]): void;
    getMoreAvailable(): boolean | null;
    setMoreAvailable(moreAvailable: boolean | null): void;
}
