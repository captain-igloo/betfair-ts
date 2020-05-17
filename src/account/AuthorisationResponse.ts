/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';


export interface IAuthorisationResponseOptions {
    authorisationCode?: string;
    redirectUrl?: string;
}

export default class AuthorisationResponse extends JsonResponse {
    private authorisationCode?: string;
    private redirectUrl?: string;

    constructor(options: IAuthorisationResponseOptions) {
        super();
        if (this.validateJson(options)) {
            this.authorisationCode = options.authorisationCode;
            this.redirectUrl = options.redirectUrl;
        }
    }

    public toJson(): IAuthorisationResponseOptions {
        const json: IAuthorisationResponseOptions = {
        };
        if (typeof this.authorisationCode !== 'undefined') {
            json.authorisationCode = this.authorisationCode;
        }
        if (typeof this.redirectUrl !== 'undefined') {
            json.redirectUrl = this.redirectUrl;
        }
        return json;
    }

    public getAuthorisationCode(): string | undefined {
        return this.authorisationCode;
    }
    public setAuthorisationCode(authorisationCode: string): void {
        this.authorisationCode = authorisationCode;
    }
    public getRedirectUrl(): string | undefined {
        return this.redirectUrl;
    }
    public setRedirectUrl(redirectUrl: string): void {
        this.redirectUrl = redirectUrl;
    }

}
