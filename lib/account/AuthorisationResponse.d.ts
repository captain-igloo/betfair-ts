/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
export default class AuthorisationResponse extends JsonResponse {
    private authorisationCode;
    private redirectUrl;
    constructor(authorisationCode?: string, redirectUrl?: string);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getAuthorisationCode(): string;
    setAuthorisationCode(authorisationCode: string): void;
    getRedirectUrl(): string;
    setRedirectUrl(redirectUrl: string): void;
}
