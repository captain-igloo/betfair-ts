/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export interface IRunnerProfitAndLossOptions {
    selectionId?: number;
    ifWin?: number;
    ifLose?: number;
    ifPlace?: number;
}
export default class RunnerProfitAndLoss extends JsonMember {
    private selectionId?;
    private ifWin?;
    private ifLose?;
    private ifPlace?;
    constructor(options: IRunnerProfitAndLossOptions);
    toJson(): IRunnerProfitAndLossOptions;
    getSelectionId(): number | undefined;
    setSelectionId(selectionId: number): void;
    getIfWin(): number | undefined;
    setIfWin(ifWin: number): void;
    getIfLose(): number | undefined;
    setIfLose(ifLose: number): void;
    getIfPlace(): number | undefined;
    setIfPlace(ifPlace: number): void;
}
