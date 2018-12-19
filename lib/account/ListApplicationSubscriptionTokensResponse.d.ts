/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import ApplicationSubscription from '../account/ApplicationSubscription';
import JsonResponse from '../JsonResponse';
export default class ListApplicationSubscriptionTokensResponse extends JsonResponse {
    private applicationSubscriptions;
    constructor(applicationSubscriptions?: ApplicationSubscription[]);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getApplicationSubscriptions(): ApplicationSubscription[];
    setApplicationSubscriptions(applicationSubscriptions: ApplicationSubscription[]): void;
}
