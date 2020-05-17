/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export interface ISubscriptionHistoryOptions {
    subscriptionToken: string;
    expiryDateTime?: Date | string;
    expiredDateTime?: Date | string;
    createdDateTime?: Date | string;
    activationDateTime?: Date | string;
    cancellationDateTime?: Date | string;
    subscriptionStatus?: string;
    clientReference?: string;
}
export default class SubscriptionHistory extends JsonMember {
    private subscriptionToken;
    private expiryDateTime?;
    private expiredDateTime?;
    private createdDateTime?;
    private activationDateTime?;
    private cancellationDateTime?;
    private subscriptionStatus?;
    private clientReference?;
    constructor(options: ISubscriptionHistoryOptions);
    toJson(): ISubscriptionHistoryOptions;
    getSubscriptionToken(): string;
    setSubscriptionToken(subscriptionToken: string): void;
    getExpiryDateTime(): Date | undefined;
    setExpiryDateTime(expiryDateTime: Date): void;
    getExpiredDateTime(): Date | undefined;
    setExpiredDateTime(expiredDateTime: Date): void;
    getCreatedDateTime(): Date | undefined;
    setCreatedDateTime(createdDateTime: Date): void;
    getActivationDateTime(): Date | undefined;
    setActivationDateTime(activationDateTime: Date): void;
    getCancellationDateTime(): Date | undefined;
    setCancellationDateTime(cancellationDateTime: Date): void;
    getSubscriptionStatus(): string | undefined;
    setSubscriptionStatus(subscriptionStatus: string): void;
    getClientReference(): string | undefined;
    setClientReference(clientReference: string): void;
}
