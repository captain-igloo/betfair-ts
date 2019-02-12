/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import ApplicationSubscription from '../account/ApplicationSubscription';

export default class ListApplicationSubscriptionTokensResponse extends JsonResponse {
    private applicationSubscriptions: ApplicationSubscription[];

    constructor(
        applicationSubscriptions: ApplicationSubscription[] = [],
    ) {
        super();
        this.applicationSubscriptions = applicationSubscriptions;
    }

    public fromJson(json: any): void {
        if (this.validateJson(json)) {
            this.applicationSubscriptions = json.map((applicationSubscriptionsJson: any) => {
                const element = new ApplicationSubscription();
                element.fromJson(applicationSubscriptionsJson);
                return element;
            });
        }
    }

    public toJson(): any {
        let json: any = {};
        if (this.applicationSubscriptions.length > 0) {
            json.applicationSubscriptions = this.applicationSubscriptions.map((value) => value.toJson());
        }
        return json;
    }

    public isValid(): boolean {
        return this.applicationSubscriptions.length > 0;
    }

    public getApplicationSubscriptions(): ApplicationSubscription[] {
        return this.applicationSubscriptions;
    }
    public setApplicationSubscriptions(applicationSubscriptions: ApplicationSubscription[]): void {
        this.applicationSubscriptions = applicationSubscriptions;
    }

}
