/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

export default class DeveloperAppVersion extends JsonMember {
    private owner: string;
    private versionId: number | null;
    private version: string;
    private applicationKey: string;
    private delayData: boolean | null;
    private subscriptionRequired: boolean | null;
    private ownerManaged: boolean | null;
    private active: boolean | null;
    private vendorId: string;
    private vendorSecret: string;

    constructor(
        owner: string = '',
        versionId: number | null = null,
        version: string = '',
        applicationKey: string = '',
        delayData: boolean | null = null,
        subscriptionRequired: boolean | null = null,
        ownerManaged: boolean | null = null,
        active: boolean | null = null,
        vendorId: string = '',
        vendorSecret: string = '',
    ) {
        super();
        this.owner = owner;
        this.versionId = versionId;
        this.version = version;
        this.applicationKey = applicationKey;
        this.delayData = delayData;
        this.subscriptionRequired = subscriptionRequired;
        this.ownerManaged = ownerManaged;
        this.active = active;
        this.vendorId = vendorId;
        this.vendorSecret = vendorSecret;
    }

    public fromJson(json: any): void {
        if ('owner' in json) {
            this.owner = json.owner;
        }
        if ('versionId' in json) {
            this.versionId = json.versionId;
        }
        if ('version' in json) {
            this.version = json.version;
        }
        if ('applicationKey' in json) {
            this.applicationKey = json.applicationKey;
        }
        if ('delayData' in json) {
            this.delayData = json.delayData;
        }
        if ('subscriptionRequired' in json) {
            this.subscriptionRequired = json.subscriptionRequired;
        }
        if ('ownerManaged' in json) {
            this.ownerManaged = json.ownerManaged;
        }
        if ('active' in json) {
            this.active = json.active;
        }
        if ('vendorId' in json) {
            this.vendorId = json.vendorId;
        }
        if ('vendorSecret' in json) {
            this.vendorSecret = json.vendorSecret;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.owner !== null) {
            json.owner = this.owner;
        }
        if (this.versionId !== null) {
            json.versionId = this.versionId;
        }
        if (this.version !== null) {
            json.version = this.version;
        }
        if (this.applicationKey !== null) {
            json.applicationKey = this.applicationKey;
        }
        if (this.delayData !== null) {
            json.delayData = this.delayData;
        }
        if (this.subscriptionRequired !== null) {
            json.subscriptionRequired = this.subscriptionRequired;
        }
        if (this.ownerManaged !== null) {
            json.ownerManaged = this.ownerManaged;
        }
        if (this.active !== null) {
            json.active = this.active;
        }
        if (this.vendorId !== null) {
            json.vendorId = this.vendorId;
        }
        if (this.vendorSecret !== null) {
            json.vendorSecret = this.vendorSecret;
        }
        return json;
    }

    public isValid(): boolean {
        return this.owner !== null &&
            this.versionId !== null &&
            this.version !== null &&
            this.applicationKey !== null &&
            this.subscriptionRequired !== null &&
            this.ownerManaged !== null &&
            this.active !== null;
    }

    public getOwner(): string {
        return this.owner;
    }
    public setOwner(owner: string): void {
        this.owner = owner;
    }
    public getVersionId(): number | null {
        return this.versionId;
    }
    public setVersionId(versionId: number | null): void {
        this.versionId = versionId;
    }
    public getVersion(): string {
        return this.version;
    }
    public setVersion(version: string): void {
        this.version = version;
    }
    public getApplicationKey(): string {
        return this.applicationKey;
    }
    public setApplicationKey(applicationKey: string): void {
        this.applicationKey = applicationKey;
    }
    public getDelayData(): boolean | null {
        return this.delayData;
    }
    public setDelayData(delayData: boolean | null): void {
        this.delayData = delayData;
    }
    public getSubscriptionRequired(): boolean | null {
        return this.subscriptionRequired;
    }
    public setSubscriptionRequired(subscriptionRequired: boolean | null): void {
        this.subscriptionRequired = subscriptionRequired;
    }
    public getOwnerManaged(): boolean | null {
        return this.ownerManaged;
    }
    public setOwnerManaged(ownerManaged: boolean | null): void {
        this.ownerManaged = ownerManaged;
    }
    public getActive(): boolean | null {
        return this.active;
    }
    public setActive(active: boolean | null): void {
        this.active = active;
    }
    public getVendorId(): string {
        return this.vendorId;
    }
    public setVendorId(vendorId: string): void {
        this.vendorId = vendorId;
    }
    public getVendorSecret(): string {
        return this.vendorSecret;
    }
    public setVendorSecret(vendorSecret: string): void {
        this.vendorSecret = vendorSecret;
    }

}
