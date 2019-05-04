/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export default class RunnerProfitAndLoss extends JsonMember {
    private selectionId;
    private ifWin;
    private ifLose;
    private ifPlace;
    constructor(selectionId?: number | null, ifWin?: number | null, ifLose?: number | null, ifPlace?: number | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getSelectionId(): number | null;
    setSelectionId(selectionId: number | null): void;
    getIfWin(): number | null;
    setIfWin(ifWin: number | null): void;
    getIfLose(): number | null;
    setIfLose(ifLose: number | null): void;
    getIfPlace(): number | null;
    setIfPlace(ifPlace: number | null): void;
}
