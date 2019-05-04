/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
export default class TransferResponse extends JsonResponse {
    private transactionId;
    constructor(transactionId?: string);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getTransactionId(): string;
    setTransactionId(transactionId: string): void;
}
