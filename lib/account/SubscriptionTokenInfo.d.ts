/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export interface ISubscriptionTokenInfoOptions {
    subscriptionToken: string;
    activatedDateTime?: Date | string;
    expiryDateTime?: Date | string;
    expiredDateTime?: Date | string;
    cancellationDateTime?: Date | string;
    subscriptionStatus?: string;
}
export default class SubscriptionTokenInfo extends JsonMember {
    private subscriptionToken;
    private activatedDateTime?;
    private expiryDateTime?;
    private expiredDateTime?;
    private cancellationDateTime?;
    private subscriptionStatus?;
    constructor(options: ISubscriptionTokenInfoOptions);
    toJson(): ISubscriptionTokenInfoOptions;
    getSubscriptionToken(): string;
    setSubscriptionToken(subscriptionToken: string): void;
    getActivatedDateTime(): Date | undefined;
    setActivatedDateTime(activatedDateTime: Date): void;
    getExpiryDateTime(): Date | undefined;
    setExpiryDateTime(expiryDateTime: Date): void;
    getExpiredDateTime(): Date | undefined;
    setExpiredDateTime(expiredDateTime: Date): void;
    getCancellationDateTime(): Date | undefined;
    setCancellationDateTime(cancellationDateTime: Date): void;
    getSubscriptionStatus(): string | undefined;
    setSubscriptionStatus(subscriptionStatus: string): void;
}
