"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const StatementItem_1 = require("../account/StatementItem");
const JsonResponse_1 = require("../JsonResponse");
class AccountStatementReport extends JsonResponse_1.default {
    constructor(accountStatement = [], moreAvailable = null) {
        super();
        this.accountStatement = accountStatement;
        this.moreAvailable = moreAvailable;
    }
    fromJson(json) {
        if ('accountStatement' in json) {
            this.accountStatement = json.accountStatement.map((accountStatementJson) => {
                const element = new StatementItem_1.default();
                element.fromJson(accountStatementJson);
                return element;
            });
        }
        if ('moreAvailable' in json) {
            this.moreAvailable = json.moreAvailable;
        }
    }
    toJson() {
        const json = {};
        if (this.accountStatement.length > 0) {
            json.accountStatement = this.accountStatement.map((value) => value.toJson());
        }
        if (this.moreAvailable !== null) {
            json.moreAvailable = this.moreAvailable;
        }
        return json;
    }
    isValid() {
        return this.accountStatement.length > 0 &&
            this.moreAvailable !== null;
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
