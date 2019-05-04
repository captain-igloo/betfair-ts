/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export default class KeyLineSelection extends JsonMember {
    private selectionId;
    private handicap;
    constructor(selectionId?: number | null, handicap?: number | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getSelectionId(): number | null;
    setSelectionId(selectionId: number | null): void;
    getHandicap(): number | null;
    setHandicap(handicap: number | null): void;
}
