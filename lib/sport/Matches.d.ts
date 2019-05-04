/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import Match from '../sport/Match';
export default class Matches extends JsonMember {
    private matches;
    constructor(matches?: Match[]);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getMatches(): Match[];
    setMatches(matches: Match[]): void;
}
