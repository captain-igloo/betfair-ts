/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
export interface IVendorDetailsOptions {
    appVersionId?: number;
    vendorName?: string;
    redirectUrl?: string;
}
export default class VendorDetails extends JsonResponse {
    private appVersionId?;
    private vendorName?;
    private redirectUrl?;
    constructor(options: IVendorDetailsOptions);
    toJson(): IVendorDetailsOptions;
    getAppVersionId(): number | undefined;
    setAppVersionId(appVersionId: number): void;
    getVendorName(): string | undefined;
    setVendorName(vendorName: string): void;
    getRedirectUrl(): string | undefined;
    setRedirectUrl(redirectUrl: string): void;
}
