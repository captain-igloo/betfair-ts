/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import CompetitionResult, { ICompetitionResultOptions } from '../sport/CompetitionResult';

export interface IListCompetitionsResponseOptions {
    competitionResults?: Array<CompetitionResult | ICompetitionResultOptions>;
}

export default class ListCompetitionsResponse extends JsonResponse {
    private competitionResults?: CompetitionResult[];

    constructor(options: Array<CompetitionResult | ICompetitionResultOptions>) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.competitionResults = this.arrayFromJson(options, CompetitionResult);
            }
        }
    }

    public toJson(): IListCompetitionsResponseOptions {
        throw new Error('not implemented');
    }

    public getCompetitionResults(): CompetitionResult[] | undefined {
        return this.competitionResults;
    }
    public setCompetitionResults(competitionResults: CompetitionResult[]): void {
        this.competitionResults = competitionResults;
    }

}
