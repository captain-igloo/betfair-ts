/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import GrantType from '../account/enum/GrantType';
import JsonRequest from '../JsonRequest';
export default class TokenRequest extends JsonRequest {
    private clientId;
    private grantType;
    private code;
    private clientSecret;
    private refreshToken;
    constructor(clientId?: string, grantType?: GrantType, code?: string, clientSecret?: string, refreshToken?: string);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getClientId(): string;
    setClientId(clientId: string): void;
    getGrantType(): GrantType;
    setGrantType(grantType: GrantType): void;
    getCode(): string;
    setCode(code: string): void;
    getClientSecret(): string;
    setClientSecret(clientSecret: string): void;
    getRefreshToken(): string;
    setRefreshToken(refreshToken: string): void;
}
