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
    private appVersionId?: number;
    private vendorName?: string;
    private redirectUrl?: string;

    constructor(options: IVendorDetailsOptions) {
        super();
        if (this.validateJson(options)) {
            this.appVersionId = options.appVersionId;
            this.vendorName = options.vendorName;
            this.redirectUrl = options.redirectUrl;
        }
    }

    public toJson(): IVendorDetailsOptions {
        const json: IVendorDetailsOptions = {
        };
        if (typeof this.appVersionId !== 'undefined') {
            json.appVersionId = this.appVersionId;
        }
        if (typeof this.vendorName !== 'undefined') {
            json.vendorName = this.vendorName;
        }
        if (typeof this.redirectUrl !== 'undefined') {
            json.redirectUrl = this.redirectUrl;
        }
        return json;
    }

    public getAppVersionId(): number | undefined {
        return this.appVersionId;
    }
    public setAppVersionId(appVersionId: number): void {
        this.appVersionId = appVersionId;
    }
    public getVendorName(): string | undefined {
        return this.vendorName;
    }
    public setVendorName(vendorName: string): void {
        this.vendorName = vendorName;
    }
    public getRedirectUrl(): string | undefined {
        return this.redirectUrl;
    }
    public setRedirectUrl(redirectUrl: string): void {
        this.redirectUrl = redirectUrl;
    }

}
