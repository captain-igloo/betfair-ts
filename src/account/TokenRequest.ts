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
    private clientId: string;
    private grantType: GrantType;
    private code?: string;
    private clientSecret: string;
    private refreshToken?: string;

    constructor(options: ITokenRequestOptions) {
        super();
        this.clientId = options.client_id;
        this.grantType = this.fromJson(options.grant_type, GrantType);
        this.code = options.code;
        this.clientSecret = options.client_secret;
        this.refreshToken = options.refresh_token;
    }

    public toJson(): ITokenRequestOptions {
        const json: ITokenRequestOptions = {
            client_id: this.clientId,
            grant_type: this.grantType.getValue(),
            client_secret: this.clientSecret,
        };
        if (typeof this.code !== 'undefined') {
            json.code = this.code;
        }
        if (typeof this.refreshToken !== 'undefined') {
            json.refresh_token = this.refreshToken;
        }
        return json;
    }

    public getClientId(): string {
        return this.clientId;
    }
    public setClientId(clientId: string): void {
        this.clientId = clientId;
    }
    public getGrantType(): GrantType {
        return this.grantType;
    }
    public setGrantType(grantType: GrantType): void {
        this.grantType = grantType;
    }
    public getCode(): string | undefined {
        return this.code;
    }
    public setCode(code: string): void {
        this.code = code;
    }
    public getClientSecret(): string {
        return this.clientSecret;
    }
    public setClientSecret(clientSecret: string): void {
        this.clientSecret = clientSecret;
    }
    public getRefreshToken(): string | undefined {
        return this.refreshToken;
    }
    public setRefreshToken(refreshToken: string): void {
        this.refreshToken = refreshToken;
    }

}
