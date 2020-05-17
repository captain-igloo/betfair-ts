/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
export interface IAuthorisationResponseOptions {
    authorisationCode?: string;
    redirectUrl?: string;
}
export default class AuthorisationResponse extends JsonResponse {
    private authorisationCode?;
    private redirectUrl?;
    constructor(options: IAuthorisationResponseOptions);
    toJson(): IAuthorisationResponseOptions;
    getAuthorisationCode(): string | undefined;
    setAuthorisationCode(authorisationCode: string): void;
    getRedirectUrl(): string | undefined;
    setRedirectUrl(redirectUrl: string): void;
}
