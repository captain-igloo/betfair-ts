/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import SubscriptionHistory, { ISubscriptionHistoryOptions } from '../account/SubscriptionHistory';

export interface IGetApplicationSubscriptionHistoryResponseOptions {
    subscriptionHistorys?: (SubscriptionHistory | ISubscriptionHistoryOptions)[];
}

export default class GetApplicationSubscriptionHistoryResponse extends JsonResponse {
    private subscriptionHistorys?: SubscriptionHistory[];

    constructor(options: (SubscriptionHistory | ISubscriptionHistoryOptions)[]) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.subscriptionHistorys = this.arrayFromJson(options, SubscriptionHistory);
            }
        }
    }

    public toJson(): IGetApplicationSubscriptionHistoryResponseOptions {
        throw new Error('not implemented');
    }

    public getSubscriptionHistorys(): SubscriptionHistory[] | undefined {
        return this.subscriptionHistorys;
    }
    public setSubscriptionHistorys(subscriptionHistorys: SubscriptionHistory[]): void {
        this.subscriptionHistorys = subscriptionHistorys;
    }

}
