/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import GrantType from '../account/enum/GrantType';

export default class TokenRequest extends JsonRequest {
    private client_id: string;
    private grant_type: GrantType;
    private code: string;
    private client_secret: string;
    private refresh_token: string;

    constructor(
        client_id: string = '',
        grant_type: GrantType = new GrantType(),
        code: string = '',
        client_secret: string = '',
        refresh_token: string = '',
    ) {
        super();
        this.client_id = client_id;
        this.grant_type = grant_type;
        this.code = code;
        this.client_secret = client_secret;
        this.refresh_token = refresh_token;
    }

    public fromJson(json: any): void {
        if ('client_id' in json) {
            this.client_id = json.client_id;
        }
        if ('grant_type' in json) {
            this.grant_type.setValue(json.grant_type);
        }
        if ('code' in json) {
            this.code = json.code;
        }
        if ('client_secret' in json) {
            this.client_secret = json.client_secret;
        }
        if ('refresh_token' in json) {
            this.refresh_token = json.refresh_token;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.client_id !== null) {
            json.client_id = this.client_id;
        }
        if (this.grant_type.isValid()) {
            json.grant_type = this.grant_type;
        }
        if (this.code !== null) {
            json.code = this.code;
        }
        if (this.client_secret !== null) {
            json.client_secret = this.client_secret;
        }
        if (this.refresh_token !== null) {
            json.refresh_token = this.refresh_token;
        }
        return json;
    }

    public isValid(): boolean {
        return this.client_id !== null &&
            this.grant_type.isValid() &&
            this.client_secret !== null;
    }

    public getClient_id(): string {
        return this.client_id;
    }
    public setClient_id(client_id: string): void {
        this.client_id = client_id;
    }
    public getGrant_type(): GrantType {
        return this.grant_type;
    }
    public setGrant_type(grant_type: GrantType): void {
        this.grant_type = grant_type;
    }
    public getCode(): string {
        return this.code;
    }
    public setCode(code: string): void {
        this.code = code;
    }
    public getClient_secret(): string {
        return this.client_secret;
    }
    public setClient_secret(client_secret: string): void {
        this.client_secret = client_secret;
    }
    public getRefresh_token(): string {
        return this.refresh_token;
    }
    public setRefresh_token(refresh_token: string): void {
        this.refresh_token = refresh_token;
    }

}
