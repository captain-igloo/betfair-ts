/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import SubscriptionHistory from '../account/SubscriptionHistory';
export default class GetApplicationSubscriptionHistoryResponse extends JsonResponse {
    private subscriptionHistorys;
    constructor(subscriptionHistorys?: SubscriptionHistory[]);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getSubscriptionHistorys(): SubscriptionHistory[];
    setSubscriptionHistorys(subscriptionHistorys: SubscriptionHistory[]): void;
}
