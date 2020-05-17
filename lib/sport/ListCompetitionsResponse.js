"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const CompetitionResult_1 = require("../sport/CompetitionResult");
class ListCompetitionsResponse extends JsonResponse_1.default {
    constructor(options) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.competitionResults = this.arrayFromJson(options, CompetitionResult_1.default);
            }
        }
    }
    toJson() {
        throw new Error('not implemented');
    }
    getCompetitionResults() {
        return this.competitionResults;
    }
    setCompetitionResults(competitionResults) {
        this.competitionResults = competitionResults;
    }
}
exports.default = ListCompetitionsResponse;
//# sourceMappingURL=ListCompetitionsResponse.js.map