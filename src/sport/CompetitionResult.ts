/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import Competition, { ICompetitionOptions } from '../sport/Competition';

export interface ICompetitionResultOptions {
    competition?: Competition | ICompetitionOptions;
    marketCount?: number;
    competitionRegion?: string;
}

export default class CompetitionResult extends JsonMember {
    private competition?: Competition;
    private marketCount?: number;
    private competitionRegion?: string;

    constructor(options: ICompetitionResultOptions) {
        super();
        this.competition = options.competition && this.fromJson(options.competition, Competition);
        this.marketCount = options.marketCount;
        this.competitionRegion = options.competitionRegion;
    }

    public toJson(): ICompetitionResultOptions {
        const json: ICompetitionResultOptions = {
        };
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

    public getCompetition(): Competition | undefined {
        return this.competition;
    }
    public setCompetition(competition: Competition): void {
        this.competition = competition;
    }
    public getMarketCount(): number | undefined {
        return this.marketCount;
    }
    public setMarketCount(marketCount: number): void {
        this.marketCount = marketCount;
    }
    public getCompetitionRegion(): string | undefined {
        return this.competitionRegion;
    }
    public setCompetitionRegion(competitionRegion: string): void {
        this.competitionRegion = competitionRegion;
    }

}
