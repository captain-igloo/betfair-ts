/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import Match, { IMatchOptions } from '../sport/Match';

export interface IMatchesOptions {
    matches?: Array<Match | IMatchOptions>;
}

export default class Matches extends JsonMember {
    private matches?: Match[];

    constructor(options: IMatchesOptions) {
        super();
        if (options.matches) {
            this.matches = this.arrayFromJson(options.matches, Match);
        }
    }

    public toJson(): IMatchesOptions {
        const json: IMatchesOptions = {
        };
        if (this.matches && this.matches.length > 0) {
            json.matches = this.matches.map((value) => value.toJson());
        }
        return json;
    }

    public getMatches(): Match[] | undefined {
        return this.matches;
    }
    public setMatches(matches: Match[]): void {
        this.matches = matches;
    }

}
