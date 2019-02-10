/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import ApplicationSubscription from '../account/ApplicationSubscription';
import TokenType from '../account/enum/TokenType';

export default class VendorAccessTokenInfo extends JsonResponse {
    private accessToken: string;
    private tokenType: TokenType;
    private expiresIn: number | null;
    private refreshToken: string;
    private applicationSubscription: ApplicationSubscription;

    constructor(
        accessToken: string = '',
        tokenType: TokenType = new TokenType(),
        expiresIn: number | null = null,
        refreshToken: string = '',
        applicationSubscription: ApplicationSubscription = new ApplicationSubscription(),
    ) {
        super();
        this.accessToken = accessToken;
        this.tokenType = tokenType;
        this.expiresIn = expiresIn;
        this.refreshToken = refreshToken;
        this.applicationSubscription = applicationSubscription;
    }

    public fromJson(json: any): void {
        if (this.validateJson(json)) {
            if ('access_token' in json) {
                this.accessToken = json.access_token;
            }
            if ('token_type' in json) {
                this.tokenType.setValue(json.token_type);
            }
            if ('expires_in' in json) {
                this.expiresIn = json.expires_in;
            }
            if ('refresh_token' in json) {
                this.refreshToken = json.refresh_token;
            }
            if ('application_subscription' in json) {
                this.applicationSubscription.fromJson(json.application_subscription);
            }
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.accessToken !== '') {
            json.access_token = this.accessToken;
        }
        if (this.tokenType.isValid()) {
            json.token_type = this.tokenType.getValue();
        }
        if (this.expiresIn !== null) {
            json.expires_in = this.expiresIn;
        }
        if (this.refreshToken !== '') {
            json.refresh_token = this.refreshToken;
        }
        if (this.applicationSubscription.isValid()) {
            json.application_subscription = this.applicationSubscription.toJson();
        }
        return json;
    }

    public isValid(): boolean {
        return this.accessToken !== '' &&
            this.tokenType.isValid() &&
            this.expiresIn !== null &&
            this.refreshToken !== '' &&
            this.applicationSubscription.isValid();
    }

    public getAccessToken(): string {
        return this.accessToken;
    }
    public setAccessToken(accessToken: string): void {
        this.accessToken = accessToken;
    }
    public getTokenType(): TokenType {
        return this.tokenType;
    }
    public setTokenType(tokenType: TokenType): void {
        this.tokenType = tokenType;
    }
    public getExpiresIn(): number | null {
        return this.expiresIn;
    }
    public setExpiresIn(expiresIn: number | null): void {
        this.expiresIn = expiresIn;
    }
    public getRefreshToken(): string {
        return this.refreshToken;
    }
    public setRefreshToken(refreshToken: string): void {
        this.refreshToken = refreshToken;
    }
    public getApplicationSubscription(): ApplicationSubscription {
        return this.applicationSubscription;
    }
    public setApplicationSubscription(applicationSubscription: ApplicationSubscription): void {
        this.applicationSubscription = applicationSubscription;
    }

}
