/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import Match from '../sport/Match';

export default class Matches extends JsonMember {
    private matches: Match[];

    constructor(
        matches: Match[] = [],
    ) {
        super();
        this.matches = matches;
    }

    public fromJson(json: any): void {
        if ('matches' in json) {
            this.matches = json.matches.map((matchesJson: any) => {
                const element = new Match();
                element.fromJson(matchesJson);
                return element;
            });
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.matches.length > 0) {
            json.matches = this.matches.map((value) => value.toJson());
        }
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getMatches(): Match[] {
        return this.matches;
    }
    public setMatches(matches: Match[]): void {
        this.matches = matches;
    }

}
