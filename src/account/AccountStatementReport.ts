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
    private accountStatement?: StatementItem[];
    private moreAvailable?: boolean;

    constructor(options: IAccountStatementReportOptions) {
        super();
        if (this.validateJson(options)) {
            if (options.accountStatement) {
                this.accountStatement = this.arrayFromJson(options.accountStatement, StatementItem);
            }
            this.moreAvailable = options.moreAvailable;
        }
    }

    public toJson(): IAccountStatementReportOptions {
        const json: IAccountStatementReportOptions = {
        };
        if (this.accountStatement && this.accountStatement.length > 0) {
            json.accountStatement = this.accountStatement.map((value) => value.toJson());
        }
        if (typeof this.moreAvailable !== 'undefined') {
            json.moreAvailable = this.moreAvailable;
        }
        return json;
    }

    public getAccountStatement(): StatementItem[] | undefined {
        return this.accountStatement;
    }
    public setAccountStatement(accountStatement: StatementItem[]): void {
        this.accountStatement = accountStatement;
    }
    public getMoreAvailable(): boolean | undefined {
        return this.moreAvailable;
    }
    public setMoreAvailable(moreAvailable: boolean): void {
        this.moreAvailable = moreAvailable;
    }

}
