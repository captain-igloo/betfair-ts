/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export default class SubscriptionTokenInfo extends JsonMember {
    private subscriptionToken;
    private activatedDateTime;
    private expiryDateTime;
    private expiredDateTime;
    private cancellationDateTime;
    private subscriptionStatus;
    constructor(subscriptionToken?: string, activatedDateTime?: Date | null, expiryDateTime?: Date | null, expiredDateTime?: Date | null, cancellationDateTime?: Date | null, subscriptionStatus?: string);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getSubscriptionToken(): string;
    setSubscriptionToken(subscriptionToken: string): void;
    getActivatedDateTime(): Date | null;
    setActivatedDateTime(activatedDateTime: Date | null): void;
    getExpiryDateTime(): Date | null;
    setExpiryDateTime(expiryDateTime: Date | null): void;
    getExpiredDateTime(): Date | null;
    setExpiredDateTime(expiredDateTime: Date | null): void;
    getCancellationDateTime(): Date | null;
    setCancellationDateTime(cancellationDateTime: Date | null): void;
    getSubscriptionStatus(): string;
    setSubscriptionStatus(subscriptionStatus: string): void;
}
