/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import GrantType from '../account/enum/GrantType';
import JsonRequest from '../JsonRequest';

export default class TokenRequest extends JsonRequest {
    private clientId: string;
    private grantType: GrantType;
    private code: string;
    private clientSecret: string;
    private refreshToken: string;

    constructor(
        clientId: string = '',
        grantType: GrantType = new GrantType(),
        code: string = '',
        clientSecret: string = '',
        refreshToken: string = '',
    ) {
        super();
        this.clientId = clientId;
        this.grantType = grantType;
        this.code = code;
        this.clientSecret = clientSecret;
        this.refreshToken = refreshToken;
    }

    public fromJson(json: any): void {
        if ('client_id' in json) {
            this.clientId = json.client_id;
        }
        if ('grant_type' in json) {
            this.grantType.setValue(json.grant_type);
        }
        if ('code' in json) {
            this.code = json.code;
        }
        if ('client_secret' in json) {
            this.clientSecret = json.client_secret;
        }
        if ('refresh_token' in json) {
            this.refreshToken = json.refresh_token;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.clientId !== null) {
            json.client_id = this.clientId;
        }
        if (this.grantType.isValid()) {
            json.grant_type = this.grantType;
        }
        if (this.code !== null) {
            json.code = this.code;
        }
        if (this.clientSecret !== null) {
            json.client_secret = this.clientSecret;
        }
        if (this.refreshToken !== null) {
            json.refresh_token = this.refreshToken;
        }
        return json;
    }

    public isValid(): boolean {
        return this.clientId !== null &&
            this.grantType.isValid() &&
            this.clientSecret !== null;
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
    public getCode(): string {
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
    public getRefreshToken(): string {
        return this.refreshToken;
    }
    public setRefreshToken(refreshToken: string): void {
        this.refreshToken = refreshToken;
    }

}
