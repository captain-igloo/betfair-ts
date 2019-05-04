/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import StatementItem from '../account/StatementItem';
export default class AccountStatementReport extends JsonResponse {
    private accountStatement;
    private moreAvailable;
    constructor(accountStatement?: StatementItem[], moreAvailable?: boolean | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getAccountStatement(): StatementItem[];
    setAccountStatement(accountStatement: StatementItem[]): void;
    getMoreAvailable(): boolean | null;
    setMoreAvailable(moreAvailable: boolean | null): void;
}
