/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';


export interface ITransferResponseOptions {
    transactionId?: string;
}

export default class TransferResponse extends JsonResponse {
    private transactionId?: string;

    constructor(options: ITransferResponseOptions) {
        super();
        if (this.validateJson(options)) {
            this.transactionId = options.transactionId;
        }
    }

    public toJson(): ITransferResponseOptions {
        const json: ITransferResponseOptions = {
        };
        if (typeof this.transactionId !== 'undefined') {
            json.transactionId = this.transactionId;
        }
        return json;
    }

    public getTransactionId(): string | undefined {
        return this.transactionId;
    }
    public setTransactionId(transactionId: string): void {
        this.transactionId = transactionId;
    }

}
