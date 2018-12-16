/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import ApplicationSubscription from '../account/ApplicationSubscription';
export default class ListApplicationSubscriptionTokensResponse extends JsonResponse {
    private applicationSubscriptions;
    constructor(applicationSubscriptions?: ApplicationSubscription[]);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getApplicationSubscriptions(): ApplicationSubscription[];
    setApplicationSubscriptions(applicationSubscriptions: ApplicationSubscription[]): void;
}
