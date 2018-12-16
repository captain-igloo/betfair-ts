/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import VendorDetails from '../account/VendorDetails';

export default class ListAuthorizedWebAppsResponse extends JsonResponse {
    private vendorDetailses: VendorDetails[];

    constructor(
        vendorDetailses: VendorDetails[] = [],
    ) {
        super();
        this.vendorDetailses = vendorDetailses;
    }

    public fromJson(json: any): void {
        if (this.validateJson(json)) {
            this.vendorDetailses = json.map((vendorDetailsesJson: any) => {
                const element = new VendorDetails();
                element.fromJson(vendorDetailsesJson);
                return element;
            });
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.vendorDetailses.length > 0) {
            json.vendorDetailses = this.vendorDetailses.map((value) => value.toJson());
        }
        return json;
    }

    public isValid(): boolean {
        return this.vendorDetailses.length > 0;
    }

    public getVendorDetailses(): VendorDetails[] {
        return this.vendorDetailses;
    }
    public setVendorDetailses(vendorDetailses: VendorDetails[]): void {
        this.vendorDetailses = vendorDetailses;
    }

}
