/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import TokenType from '../account/enum/TokenType';
import ApplicationSubscription from '../account/ApplicationSubscription';
export default class VendorAccessTokenInfo extends JsonResponse {
    private access_token;
    private token_type;
    private expires_in;
    private refresh_token;
    private application_subscription;
    constructor(access_token?: string, token_type?: TokenType, expires_in?: number | null, refresh_token?: string, application_subscription?: ApplicationSubscription);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getAccess_token(): string;
    setAccess_token(access_token: string): void;
    getToken_type(): TokenType;
    setToken_type(token_type: TokenType): void;
    getExpires_in(): number | null;
    setExpires_in(expires_in: number | null): void;
    getRefresh_token(): string;
    setRefresh_token(refresh_token: string): void;
    getApplication_subscription(): ApplicationSubscription;
    setApplication_subscription(application_subscription: ApplicationSubscription): void;
}
