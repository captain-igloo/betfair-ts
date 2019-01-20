/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';


export default class TransferResponse extends JsonResponse {
    private transactionId: string;

    constructor(
        transactionId: string = '',
    ) {
        super();
        this.transactionId = transactionId;
    }

    public fromJson(json: any): void {
        if (this.validateJson(json)) {
            if ('transactionId' in json) {
                this.transactionId = json.transactionId;
            }
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.transactionId !== '') {
            json.transactionId = this.transactionId;
        }
        return json;
    }

    public isValid(): boolean {
        return this.transactionId !== '';
    }

    public getTransactionId(): string {
        return this.transactionId;
    }
    public setTransactionId(transactionId: string): void {
        this.transactionId = transactionId;
    }

}
