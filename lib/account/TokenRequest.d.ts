/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import GrantType from '../account/enum/GrantType';
export default class TokenRequest extends JsonRequest {
    private client_id;
    private grant_type;
    private code;
    private client_secret;
    private refresh_token;
    constructor(client_id?: string, grant_type?: GrantType, code?: string, client_secret?: string, refresh_token?: string);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getClient_id(): string;
    setClient_id(client_id: string): void;
    getGrant_type(): GrantType;
    setGrant_type(grant_type: GrantType): void;
    getCode(): string;
    setCode(code: string): void;
    getClient_secret(): string;
    setClient_secret(client_secret: string): void;
    getRefresh_token(): string;
    setRefresh_token(refresh_token: string): void;
}
