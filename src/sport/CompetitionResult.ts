/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import Competition from '../sport/Competition';

export default class CompetitionResult extends JsonMember {
    private competition: Competition;
    private marketCount: number | null;
    private competitionRegion: string;

    constructor(
        competition: Competition = new Competition(),
        marketCount: number | null = null,
        competitionRegion: string = '',
    ) {
        super();
        this.competition = competition;
        this.marketCount = marketCount;
        this.competitionRegion = competitionRegion;
    }

    public fromJson(json: any): void {
        if ('competition' in json) {
            this.competition.fromJson(json.competition);
        }
        if ('marketCount' in json) {
            this.marketCount = json.marketCount;
        }
        if ('competitionRegion' in json) {
            this.competitionRegion = json.competitionRegion;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.competition.isValid()) {
            json.competition = this.competition.toJson();
        }
        if (this.marketCount !== null) {
            json.marketCount = this.marketCount;
        }
        if (this.competitionRegion !== '') {
            json.competitionRegion = this.competitionRegion;
        }
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getCompetition(): Competition {
        return this.competition;
    }
    public setCompetition(competition: Competition): void {
        this.competition = competition;
    }
    public getMarketCount(): number | null {
        return this.marketCount;
    }
    public setMarketCount(marketCount: number | null): void {
        this.marketCount = marketCount;
    }
    public getCompetitionRegion(): string {
        return this.competitionRegion;
    }
    public setCompetitionRegion(competitionRegion: string): void {
        this.competitionRegion = competitionRegion;
    }

}
