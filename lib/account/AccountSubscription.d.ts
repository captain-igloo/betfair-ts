/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import SubscriptionTokenInfo from '../account/SubscriptionTokenInfo';
export default class AccountSubscription extends JsonMember {
    private subscriptionTokens;
    private applicationName;
    private applicationVersionId;
    constructor(subscriptionTokens?: SubscriptionTokenInfo[], applicationName?: string, applicationVersionId?: string);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getSubscriptionTokens(): SubscriptionTokenInfo[];
    setSubscriptionTokens(subscriptionTokens: SubscriptionTokenInfo[]): void;
    getApplicationName(): string;
    setApplicationName(applicationName: string): void;
    getApplicationVersionId(): string;
    setApplicationVersionId(applicationVersionId: string): void;
}
