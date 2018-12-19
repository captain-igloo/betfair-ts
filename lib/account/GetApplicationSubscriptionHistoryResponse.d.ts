/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import SubscriptionHistory from '../account/SubscriptionHistory';
import JsonResponse from '../JsonResponse';
export default class GetApplicationSubscriptionHistoryResponse extends JsonResponse {
    private subscriptionHistorys;
    constructor(subscriptionHistorys?: SubscriptionHistory[]);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getSubscriptionHistorys(): SubscriptionHistory[];
    setSubscriptionHistorys(subscriptionHistorys: SubscriptionHistory[]): void;
}
