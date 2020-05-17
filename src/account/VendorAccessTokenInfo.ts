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
    private accessToken?: string;
    private tokenType?: TokenType;
    private expiresIn?: number;
    private refreshToken?: string;
    private applicationSubscription?: ApplicationSubscription;

    constructor(options: IVendorAccessTokenInfoOptions) {
        super();
        if (this.validateJson(options)) {
            this.accessToken = options.access_token;
            if (options.token_type) {
                this.tokenType = this.fromJson(options.token_type, TokenType);
            }
            this.expiresIn = options.expires_in;
            this.refreshToken = options.refresh_token;
            this.applicationSubscription = options.application_subscription && this.fromJson(options.application_subscription, ApplicationSubscription);
        }
    }

    public toJson(): IVendorAccessTokenInfoOptions {
        const json: IVendorAccessTokenInfoOptions = {
        };
        if (typeof this.accessToken !== 'undefined') {
            json.access_token = this.accessToken;
        }
        if (this.tokenType) {
            json.token_type = this.tokenType.getValue();
        }
        if (typeof this.expiresIn !== 'undefined') {
            json.expires_in = this.expiresIn;
        }
        if (typeof this.refreshToken !== 'undefined') {
            json.refresh_token = this.refreshToken;
        }
        if (this.applicationSubscription) {
            json.application_subscription = this.applicationSubscription.toJson();
        }
        return json;
    }

    public getAccessToken(): string | undefined {
        return this.accessToken;
    }
    public setAccessToken(accessToken: string): void {
        this.accessToken = accessToken;
    }
    public getTokenType(): TokenType | undefined {
        return this.tokenType;
    }
    public setTokenType(tokenType: TokenType): void {
        this.tokenType = tokenType;
    }
    public getExpiresIn(): number | undefined {
        return this.expiresIn;
    }
    public setExpiresIn(expiresIn: number): void {
        this.expiresIn = expiresIn;
    }
    public getRefreshToken(): string | undefined {
        return this.refreshToken;
    }
    public setRefreshToken(refreshToken: string): void {
        this.refreshToken = refreshToken;
    }
    public getApplicationSubscription(): ApplicationSubscription | undefined {
        return this.applicationSubscription;
    }
    public setApplicationSubscription(applicationSubscription: ApplicationSubscription): void {
        this.applicationSubscription = applicationSubscription;
    }

}
