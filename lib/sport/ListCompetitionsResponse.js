"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const CompetitionResult_1 = require("../sport/CompetitionResult");
class ListCompetitionsResponse extends JsonResponse_1.default {
    constructor(competitionResults = []) {
        super();
        this.competitionResults = competitionResults;
    }
    fromJson(json) {
        if (this.validateJson(json)) {
            this.competitionResults = json.map((competitionResultsJson) => {
                const element = new CompetitionResult_1.default();
                element.fromJson(competitionResultsJson);
                return element;
            });
        }
    }
    toJson() {
        const json = {};
        if (this.competitionResults.length > 0) {
            json.competitionResults = this.competitionResults.map((value) => value.toJson());
        }
        return json;
    }
    isValid() {
        return this.competitionResults.length > 0;
    }
    getCompetitionResults() {
        return this.competitionResults;
    }
    setCompetitionResults(competitionResults) {
        this.competitionResults = competitionResults;
    }
}
exports.default = ListCompetitionsResponse;
