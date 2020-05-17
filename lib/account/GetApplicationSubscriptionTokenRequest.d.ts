/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
export interface IGetApplicationSubscriptionTokenRequestOptions {
    subscriptionLength?: number;
    clientReference?: string;
}
export default class GetApplicationSubscriptionTokenRequest extends JsonRequest {
    private subscriptionLength?;
    private clientReference?;
    constructor(options: IGetApplicationSubscriptionTokenRequestOptions);
    toJson(): IGetApplicationSubscriptionTokenRequestOptions;
    getSubscriptionLength(): number | undefined;
    setSubscriptionLength(subscriptionLength: number): void;
    getClientReference(): string | undefined;
    setClientReference(clientReference: string): void;
}
