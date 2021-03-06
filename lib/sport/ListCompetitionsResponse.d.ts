/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import CompetitionResult, { ICompetitionResultOptions } from '../sport/CompetitionResult';
export interface IListCompetitionsResponseOptions {
    competitionResults?: (CompetitionResult | ICompetitionResultOptions)[];
}
export default class ListCompetitionsResponse extends JsonResponse {
    private competitionResults?;
    constructor(options: (CompetitionResult | ICompetitionResultOptions)[]);
    toJson(): IListCompetitionsResponseOptions;
    getCompetitionResults(): CompetitionResult[] | undefined;
    setCompetitionResults(competitionResults: CompetitionResult[]): void;
}
