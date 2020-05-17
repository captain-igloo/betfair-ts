/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export interface IKeyLineSelectionOptions {
    selectionId: number;
    handicap: number;
}
export default class KeyLineSelection extends JsonMember {
    private selectionId;
    private handicap;
    constructor(options: IKeyLineSelectionOptions);
    toJson(): IKeyLineSelectionOptions;
    getSelectionId(): number;
    setSelectionId(selectionId: number): void;
    getHandicap(): number;
    setHandicap(handicap: number): void;
}
