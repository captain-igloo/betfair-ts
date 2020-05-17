"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const Competition_1 = require("../sport/Competition");
class CompetitionResult extends JsonMember_1.default {
    constructor(options) {
        super();
        this.competition = options.competition && this.fromJson(options.competition, Competition_1.default);
        this.marketCount = options.marketCount;
        this.competitionRegion = options.competitionRegion;
    }
    toJson() {
        const json = {};
        if (this.competition) {
            json.competition = this.competition.toJson();
        }
        if (typeof this.marketCount !== 'undefined') {
            json.marketCount = this.marketCount;
        }
        if (typeof this.competitionRegion !== 'undefined') {
            json.competitionRegion = this.competitionRegion;
        }
        return json;
    }
    getCompetition() {
        return this.competition;
    }
    setCompetition(competition) {
        this.competition = competition;
    }
    getMarketCount() {
        return this.marketCount;
    }
    setMarketCount(marketCount) {
        this.marketCount = marketCount;
    }
    getCompetitionRegion() {
        return this.competitionRegion;
    }
    setCompetitionRegion(competitionRegion) {
        this.competitionRegion = competitionRegion;
    }
}
exports.default = CompetitionResult;
//# sourceMappingURL=CompetitionResult.js.map