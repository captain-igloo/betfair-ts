/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import ApplicationSubscription from '../account/ApplicationSubscription';
import TokenType from '../account/enum/TokenType';
export default class VendorAccessTokenInfo extends JsonResponse {
    private accessToken;
    private tokenType;
    private expiresIn;
    private refreshToken;
    private applicationSubscription;
    constructor(accessToken?: string, tokenType?: TokenType, expiresIn?: number | null, refreshToken?: string, applicationSubscription?: ApplicationSubscription);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getAccessToken(): string;
    setAccessToken(accessToken: string): void;
    getTokenType(): TokenType;
    setTokenType(tokenType: TokenType): void;
    getExpiresIn(): number | null;
    setExpiresIn(expiresIn: number | null): void;
    getRefreshToken(): string;
    setRefreshToken(refreshToken: string): void;
    getApplicationSubscription(): ApplicationSubscription;
    setApplicationSubscription(applicationSubscription: ApplicationSubscription): void;
}
