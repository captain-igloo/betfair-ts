"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const StatementItem_1 = require("../account/StatementItem");
class AccountStatementReport extends JsonResponse_1.default {
    constructor(options) {
        super();
        if (this.validateJson(options)) {
            if (options.accountStatement) {
                this.accountStatement = this.arrayFromJson(options.accountStatement, StatementItem_1.default);
            }
            this.moreAvailable = options.moreAvailable;
        }
    }
    toJson() {
        const json = {};
        if (this.accountStatement && this.accountStatement.length > 0) {
            json.accountStatement = this.accountStatement.map((value) => value.toJson());
        }
        if (typeof this.moreAvailable !== 'undefined') {
            json.moreAvailable = this.moreAvailable;
        }
        return json;
    }
    getAccountStatement() {
        return this.accountStatement;
    }
    setAccountStatement(accountStatement) {
        this.accountStatement = accountStatement;
    }
    getMoreAvailable() {
        return this.moreAvailable;
    }
    setMoreAvailable(moreAvailable) {
        this.moreAvailable = moreAvailable;
    }
}
exports.default = AccountStatementReport;
//# sourceMappingURL=AccountStatementReport.js.map