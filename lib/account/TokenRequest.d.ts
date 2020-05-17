/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import GrantType from '../account/enum/GrantType';
export interface ITokenRequestOptions {
    client_id: string;
    grant_type: GrantType | string;
    code?: string;
    client_secret: string;
    refresh_token?: string;
}
export default class TokenRequest extends JsonRequest {
    private clientId;
    private grantType;
    private code?;
    private clientSecret;
    private refreshToken?;
    constructor(options: ITokenRequestOptions);
    toJson(): ITokenRequestOptions;
    getClientId(): string;
    setClientId(clientId: string): void;
    getGrantType(): GrantType;
    setGrantType(grantType: GrantType): void;
    getCode(): string | undefined;
    setCode(code: string): void;
    getClientSecret(): string;
    setClientSecret(clientSecret: string): void;
    getRefreshToken(): string | undefined;
    setRefreshToken(refreshToken: string): void;
}
