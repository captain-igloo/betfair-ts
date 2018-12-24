/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import SubscriptionHistory from '../account/SubscriptionHistory';
import JsonResponse from '../JsonResponse';

export default class GetApplicationSubscriptionHistoryResponse extends JsonResponse {
    private subscriptionHistorys: SubscriptionHistory[];

    constructor(
        subscriptionHistorys: SubscriptionHistory[] = [],
    ) {
        super();
        this.subscriptionHistorys = subscriptionHistorys;
    }

    public fromJson(json: any): void {
        if (this.validateJson(json)) {
            this.subscriptionHistorys = json.map((subscriptionHistorysJson: any) => {
                const element = new SubscriptionHistory();
                element.fromJson(subscriptionHistorysJson);
                return element;
            });
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.subscriptionHistorys.length > 0) {
            json.subscriptionHistorys = this.subscriptionHistorys.map((value) => value.toJson());
        }
        return json;
    }

    public isValid(): boolean {
        return this.subscriptionHistorys.length > 0;
    }

    public getSubscriptionHistorys(): SubscriptionHistory[] {
        return this.subscriptionHistorys;
    }
    public setSubscriptionHistorys(subscriptionHistorys: SubscriptionHistory[]): void {
        this.subscriptionHistorys = subscriptionHistorys;
    }

}
