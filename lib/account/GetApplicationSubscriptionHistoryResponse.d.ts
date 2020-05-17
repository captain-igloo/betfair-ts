/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import SubscriptionHistory, { ISubscriptionHistoryOptions } from '../account/SubscriptionHistory';
export interface IGetApplicationSubscriptionHistoryResponseOptions {
    subscriptionHistorys?: Array<SubscriptionHistory | ISubscriptionHistoryOptions>;
}
export default class GetApplicationSubscriptionHistoryResponse extends JsonResponse {
    private subscriptionHistorys?;
    constructor(options: Array<SubscriptionHistory | ISubscriptionHistoryOptions>);
    toJson(): IGetApplicationSubscriptionHistoryResponseOptions;
    getSubscriptionHistorys(): SubscriptionHistory[] | undefined;
    setSubscriptionHistorys(subscriptionHistorys: SubscriptionHistory[]): void;
}
