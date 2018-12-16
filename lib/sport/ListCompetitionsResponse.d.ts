/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import CompetitionResult from '../sport/CompetitionResult';
export default class ListCompetitionsResponse extends JsonResponse {
    private competitionResults;
    constructor(competitionResults?: CompetitionResult[]);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getCompetitionResults(): CompetitionResult[];
    setCompetitionResults(competitionResults: CompetitionResult[]): void;
}
