/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import CompetitionResult from '../sport/CompetitionResult';

export default class ListCompetitionsResponse extends JsonResponse {
    private competitionResults: CompetitionResult[];

    constructor(
        competitionResults: CompetitionResult[] = [],
    ) {
        super();
        this.competitionResults = competitionResults;
    }

    public fromJson(json: any): void {
        if (this.validateJson(json)) {
            this.competitionResults = json.map((competitionResultsJson: any) => {
                const element = new CompetitionResult();
                element.fromJson(competitionResultsJson);
                return element;
            });
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.competitionResults.length > 0) {
            json.competitionResults = this.competitionResults.map((value) => value.toJson());
        }
        return json;
    }

    public isValid(): boolean {
        return this.competitionResults.length > 0;
    }

    public getCompetitionResults(): CompetitionResult[] {
        return this.competitionResults;
    }
    public setCompetitionResults(competitionResults: CompetitionResult[]): void {
        this.competitionResults = competitionResults;
    }

}
