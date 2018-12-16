/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export default class ApplicationSubscription extends JsonMember {
    private subscriptionToken;
    private expiryDateTime;
    private expiredDateTime;
    private createdDateTime;
    private activationDateTime;
    private cancellationDateTime;
    private subscriptionStatus;
    private clientReference;
    private vendorClientId;
    constructor(subscriptionToken?: string, expiryDateTime?: Date | null, expiredDateTime?: Date | null, createdDateTime?: Date | null, activationDateTime?: Date | null, cancellationDateTime?: Date | null, subscriptionStatus?: string, clientReference?: string, vendorClientId?: string);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getSubscriptionToken(): string;
    setSubscriptionToken(subscriptionToken: string): void;
    getExpiryDateTime(): Date | null;
    setExpiryDateTime(expiryDateTime: Date | null): void;
    getExpiredDateTime(): Date | null;
    setExpiredDateTime(expiredDateTime: Date | null): void;
    getCreatedDateTime(): Date | null;
    setCreatedDateTime(createdDateTime: Date | null): void;
    getActivationDateTime(): Date | null;
    setActivationDateTime(activationDateTime: Date | null): void;
    getCancellationDateTime(): Date | null;
    setCancellationDateTime(cancellationDateTime: Date | null): void;
    getSubscriptionStatus(): string;
    setSubscriptionStatus(subscriptionStatus: string): void;
    getClientReference(): string;
    setClientReference(clientReference: string): void;
    getVendorClientId(): string;
    setVendorClientId(vendorClientId: string): void;
}
