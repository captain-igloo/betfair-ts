/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import ApplicationSubscription, { IApplicationSubscriptionOptions } from '../account/ApplicationSubscription';
import TokenType from '../account/enum/TokenType';
export interface IVendorAccessTokenInfoOptions {
    access_token?: string;
    token_type?: TokenType | string;
    expires_in?: number;
    refresh_token?: string;
    application_subscription?: ApplicationSubscription | IApplicationSubscriptionOptions;
}
export default class VendorAccessTokenInfo extends JsonResponse {
    private accessToken?;
    private tokenType?;
    private expiresIn?;
    private refreshToken?;
    private applicationSubscription?;
    constructor(options: IVendorAccessTokenInfoOptions);
    toJson(): IVendorAccessTokenInfoOptions;
    getAccessToken(): string | undefined;
    setAccessToken(accessToken: string): void;
    getTokenType(): TokenType | undefined;
    setTokenType(tokenType: TokenType): void;
    getExpiresIn(): number | undefined;
    setExpiresIn(expiresIn: number): void;
    getRefreshToken(): string | undefined;
    setRefreshToken(refreshToken: string): void;
    getApplicationSubscription(): ApplicationSubscription | undefined;
    setApplicationSubscription(applicationSubscription: ApplicationSubscription): void;
}
