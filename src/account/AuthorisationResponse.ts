/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';


export default class AuthorisationResponse extends JsonResponse {
    private authorisationCode: string;
    private redirectUrl: string;

    constructor(
        authorisationCode: string = '',
        redirectUrl: string = '',
    ) {
        super();
        this.authorisationCode = authorisationCode;
        this.redirectUrl = redirectUrl;
    }

    public fromJson(json: any): void {
        if (this.validateJson(json)) {
            if ('authorisationCode' in json) {
                this.authorisationCode = json.authorisationCode;
            }
            if ('redirectUrl' in json) {
                this.redirectUrl = json.redirectUrl;
            }
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.authorisationCode !== '') {
            json.authorisationCode = this.authorisationCode;
        }
        if (this.redirectUrl !== '') {
            json.redirectUrl = this.redirectUrl;
        }
        return json;
    }

    public isValid(): boolean {
        return this.authorisationCode !== '' &&
            this.redirectUrl !== '';
    }

    public getAuthorisationCode(): string {
        return this.authorisationCode;
    }
    public setAuthorisationCode(authorisationCode: string): void {
        this.authorisationCode = authorisationCode;
    }
    public getRedirectUrl(): string {
        return this.redirectUrl;
    }
    public setRedirectUrl(redirectUrl: string): void {
        this.redirectUrl = redirectUrl;
    }

}
