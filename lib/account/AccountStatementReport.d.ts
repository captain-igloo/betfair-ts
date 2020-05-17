/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import StatementItem, { IStatementItemOptions } from '../account/StatementItem';
export interface IAccountStatementReportOptions {
    accountStatement?: Array<StatementItem | IStatementItemOptions>;
    moreAvailable?: boolean;
}
export default class AccountStatementReport extends JsonResponse {
    private accountStatement?;
    private moreAvailable?;
    constructor(options: IAccountStatementReportOptions);
    toJson(): IAccountStatementReportOptions;
    getAccountStatement(): StatementItem[] | undefined;
    setAccountStatement(accountStatement: StatementItem[]): void;
    getMoreAvailable(): boolean | undefined;
    setMoreAvailable(moreAvailable: boolean): void;
}
