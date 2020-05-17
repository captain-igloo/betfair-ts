/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
export interface ITransferResponseOptions {
    transactionId?: string;
}
export default class TransferResponse extends JsonResponse {
    private transactionId?;
    constructor(options: ITransferResponseOptions);
    toJson(): ITransferResponseOptions;
    getTransactionId(): string | undefined;
    setTransactionId(transactionId: string): void;
}
