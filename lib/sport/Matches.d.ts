/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import Match, { IMatchOptions } from '../sport/Match';
export interface IMatchesOptions {
    matches?: Array<Match | IMatchOptions>;
}
export default class Matches extends JsonMember {
    private matches?;
    constructor(options: IMatchesOptions);
    toJson(): IMatchesOptions;
    getMatches(): Match[] | undefined;
    setMatches(matches: Match[]): void;
}
