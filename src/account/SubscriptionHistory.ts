/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export default class SubscriptionHistory extends JsonMember {
    private subscriptionToken: string;
    private expiryDateTime: Date | null;
    private expiredDateTime: Date | null;
    private createdDateTime: Date | null;
    private activationDateTime: Date | null;
    private cancellationDateTime: Date | null;
    private subscriptionStatus: string;
    private clientReference: string;

    constructor(
        subscriptionToken: string = '',
        expiryDateTime: Date | null = null,
        expiredDateTime: Date | null = null,
        createdDateTime: Date | null = null,
        activationDateTime: Date | null = null,
        cancellationDateTime: Date | null = null,
        subscriptionStatus: string = '',
        clientReference: string = '',
    ) {
        super();
        this.subscriptionToken = subscriptionToken;
        this.expiryDateTime = expiryDateTime;
        this.expiredDateTime = expiredDateTime;
        this.createdDateTime = createdDateTime;
        this.activationDateTime = activationDateTime;
        this.cancellationDateTime = cancellationDateTime;
        this.subscriptionStatus = subscriptionStatus;
        this.clientReference = clientReference;
    }

    public fromJson(json: any): void {
        if ('subscriptionToken' in json) {
            this.subscriptionToken = json.subscriptionToken;
        }
        if ('expiryDateTime' in json) {
            this.expiryDateTime = new Date(json.expiryDateTime);
        }
        if ('expiredDateTime' in json) {
            this.expiredDateTime = new Date(json.expiredDateTime);
        }
        if ('createdDateTime' in json) {
            this.createdDateTime = new Date(json.createdDateTime);
        }
        if ('activationDateTime' in json) {
            this.activationDateTime = new Date(json.activationDateTime);
        }
        if ('cancellationDateTime' in json) {
            this.cancellationDateTime = new Date(json.cancellationDateTime);
        }
        if ('subscriptionStatus' in json) {
            this.subscriptionStatus = json.subscriptionStatus;
        }
        if ('clientReference' in json) {
            this.clientReference = json.clientReference;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.subscriptionToken !== '') {
            json.subscriptionToken = this.subscriptionToken;
        }
        if (this.expiryDateTime !== null) {
            json.expiryDateTime = this.expiryDateTime.toISOString();
        }
        if (this.expiredDateTime !== null) {
            json.expiredDateTime = this.expiredDateTime.toISOString();
        }
        if (this.createdDateTime !== null) {
            json.createdDateTime = this.createdDateTime.toISOString();
        }
        if (this.activationDateTime !== null) {
            json.activationDateTime = this.activationDateTime.toISOString();
        }
        if (this.cancellationDateTime !== null) {
            json.cancellationDateTime = this.cancellationDateTime.toISOString();
        }
        if (this.subscriptionStatus !== '') {
            json.subscriptionStatus = this.subscriptionStatus;
        }
        if (this.clientReference !== '') {
            json.clientReference = this.clientReference;
        }
        return json;
    }

    public isValid(): boolean {
        return this.subscriptionToken !== '';
    }

    public getSubscriptionToken(): string {
        return this.subscriptionToken;
    }
    public setSubscriptionToken(subscriptionToken: string): void {
        this.subscriptionToken = subscriptionToken;
    }
    public getExpiryDateTime(): Date | null {
        return this.expiryDateTime;
    }
    public setExpiryDateTime(expiryDateTime: Date | null): void {
        this.expiryDateTime = expiryDateTime;
    }
    public getExpiredDateTime(): Date | null {
        return this.expiredDateTime;
    }
    public setExpiredDateTime(expiredDateTime: Date | null): void {
        this.expiredDateTime = expiredDateTime;
    }
    public getCreatedDateTime(): Date | null {
        return this.createdDateTime;
    }
    public setCreatedDateTime(createdDateTime: Date | null): void {
        this.createdDateTime = createdDateTime;
    }
    public getActivationDateTime(): Date | null {
        return this.activationDateTime;
    }
    public setActivationDateTime(activationDateTime: Date | null): void {
        this.activationDateTime = activationDateTime;
    }
    public getCancellationDateTime(): Date | null {
        return this.cancellationDateTime;
    }
    public setCancellationDateTime(cancellationDateTime: Date | null): void {
        this.cancellationDateTime = cancellationDateTime;
    }
    public getSubscriptionStatus(): string {
        return this.subscriptionStatus;
    }
    public setSubscriptionStatus(subscriptionStatus: string): void {
        this.subscriptionStatus = subscriptionStatus;
    }
    public getClientReference(): string {
        return this.clientReference;
    }
    public setClientReference(clientReference: string): void {
        this.clientReference = clientReference;
    }

}
