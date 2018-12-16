/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import TokenType from '../account/enum/TokenType';
import ApplicationSubscription from '../account/ApplicationSubscription';

export default class VendorAccessTokenInfo extends JsonResponse {
    private access_token: string;
    private token_type: TokenType;
    private expires_in: number | null;
    private refresh_token: string;
    private application_subscription: ApplicationSubscription;

    constructor(
        access_token: string = '',
        token_type: TokenType = new TokenType(),
        expires_in: number | null = null,
        refresh_token: string = '',
        application_subscription: ApplicationSubscription = new ApplicationSubscription(),
    ) {
        super();
        this.access_token = access_token;
        this.token_type = token_type;
        this.expires_in = expires_in;
        this.refresh_token = refresh_token;
        this.application_subscription = application_subscription;
    }

    public fromJson(json: any): void {
        if ('access_token' in json) {
            this.access_token = json.access_token;
        }
        if ('token_type' in json) {
            this.token_type.setValue(json.token_type);
        }
        if ('expires_in' in json) {
            this.expires_in = json.expires_in;
        }
        if ('refresh_token' in json) {
            this.refresh_token = json.refresh_token;
        }
        if ('application_subscription' in json) {
            this.application_subscription.fromJson(json.application_subscription);
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.access_token !== null) {
            json.access_token = this.access_token;
        }
        if (this.token_type.isValid()) {
            json.token_type = this.token_type;
        }
        if (this.expires_in !== null) {
            json.expires_in = this.expires_in;
        }
        if (this.refresh_token !== null) {
            json.refresh_token = this.refresh_token;
        }
        if (this.application_subscription.isValid()) {
            json.application_subscription = this.application_subscription.toJson();
        }
        return json;
    }

    public isValid(): boolean {
        return this.access_token !== null &&
            this.token_type.isValid() &&
            this.expires_in !== null &&
            this.refresh_token !== null &&
            this.application_subscription.isValid();
    }

    public getAccess_token(): string {
        return this.access_token;
    }
    public setAccess_token(access_token: string): void {
        this.access_token = access_token;
    }
    public getToken_type(): TokenType {
        return this.token_type;
    }
    public setToken_type(token_type: TokenType): void {
        this.token_type = token_type;
    }
    public getExpires_in(): number | null {
        return this.expires_in;
    }
    public setExpires_in(expires_in: number | null): void {
        this.expires_in = expires_in;
    }
    public getRefresh_token(): string {
        return this.refresh_token;
    }
    public setRefresh_token(refresh_token: string): void {
        this.refresh_token = refresh_token;
    }
    public getApplication_subscription(): ApplicationSubscription {
        return this.application_subscription;
    }
    public setApplication_subscription(application_subscription: ApplicationSubscription): void {
        this.application_subscription = application_subscription;
    }

}
