/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import StatementItem from '../account/StatementItem';
import JsonResponse from '../JsonResponse';

export default class AccountStatementReport extends JsonResponse {
    private accountStatement: StatementItem[];
    private moreAvailable: boolean | null;

    constructor(
        accountStatement: StatementItem[] = [],
        moreAvailable: boolean | null = null,
    ) {
        super();
        this.accountStatement = accountStatement;
        this.moreAvailable = moreAvailable;
    }

    public fromJson(json: any): void {
        if (this.validateJson(json)) {
            if ('accountStatement' in json) {
                this.accountStatement = json.accountStatement.map((accountStatementJson: any) => {
                    const element = new StatementItem();
                    element.fromJson(accountStatementJson);
                    return element;
                });
            }
            if ('moreAvailable' in json) {
                this.moreAvailable = json.moreAvailable;
            }
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.accountStatement.length > 0) {
            json.accountStatement = this.accountStatement.map((value) => value.toJson());
        }
        if (this.moreAvailable !== null) {
            json.moreAvailable = this.moreAvailable;
        }
        return json;
    }

    public isValid(): boolean {
        return this.accountStatement.length > 0 &&
            this.moreAvailable !== null;
    }

    public getAccountStatement(): StatementItem[] {
        return this.accountStatement;
    }
    public setAccountStatement(accountStatement: StatementItem[]): void {
        this.accountStatement = accountStatement;
    }
    public getMoreAvailable(): boolean | null {
        return this.moreAvailable;
    }
    public setMoreAvailable(moreAvailable: boolean | null): void {
        this.moreAvailable = moreAvailable;
    }

}
