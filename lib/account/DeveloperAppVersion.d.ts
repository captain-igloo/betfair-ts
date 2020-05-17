/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export interface IDeveloperAppVersionOptions {
    owner: string;
    versionId: number;
    version: string;
    applicationKey: string;
    delayData?: boolean;
    subscriptionRequired: boolean;
    ownerManaged: boolean;
    active: boolean;
    vendorId?: string;
    vendorSecret?: string;
}
export default class DeveloperAppVersion extends JsonMember {
    private owner;
    private versionId;
    private version;
    private applicationKey;
    private delayData?;
    private subscriptionRequired;
    private ownerManaged;
    private active;
    private vendorId?;
    private vendorSecret?;
    constructor(options: IDeveloperAppVersionOptions);
    toJson(): IDeveloperAppVersionOptions;
    getOwner(): string;
    setOwner(owner: string): void;
    getVersionId(): number;
    setVersionId(versionId: number): void;
    getVersion(): string;
    setVersion(version: string): void;
    getApplicationKey(): string;
    setApplicationKey(applicationKey: string): void;
    getDelayData(): boolean | undefined;
    setDelayData(delayData: boolean): void;
    getSubscriptionRequired(): boolean;
    setSubscriptionRequired(subscriptionRequired: boolean): void;
    getOwnerManaged(): boolean;
    setOwnerManaged(ownerManaged: boolean): void;
    getActive(): boolean;
    setActive(active: boolean): void;
    getVendorId(): string | undefined;
    setVendorId(vendorId: string): void;
    getVendorSecret(): string | undefined;
    setVendorSecret(vendorSecret: string): void;
}
