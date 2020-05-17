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
    private competition?;
    private marketCount?;
    private competitionRegion?;
    constructor(options: ICompetitionResultOptions);
    toJson(): ICompetitionResultOptions;
    getCompetition(): Competition | undefined;
    setCompetition(competition: Competition): void;
    getMarketCount(): number | undefined;
    setMarketCount(marketCount: number): void;
    getCompetitionRegion(): string | undefined;
    setCompetitionRegion(competitionRegion: string): void;
}
