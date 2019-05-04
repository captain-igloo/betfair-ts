/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import Competition from '../sport/Competition';
export default class CompetitionResult extends JsonMember {
    private competition;
    private marketCount;
    private competitionRegion;
    constructor(competition?: Competition, marketCount?: number | null, competitionRegion?: string);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getCompetition(): Competition;
    setCompetition(competition: Competition): void;
    getMarketCount(): number | null;
    setMarketCount(marketCount: number | null): void;
    getCompetitionRegion(): string;
    setCompetitionRegion(competitionRegion: string): void;
}
