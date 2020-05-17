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
    private selectionId?: number;
    private ifWin?: number;
    private ifLose?: number;
    private ifPlace?: number;

    constructor(options: IRunnerProfitAndLossOptions) {
        super();
        this.selectionId = options.selectionId;
        this.ifWin = options.ifWin;
        this.ifLose = options.ifLose;
        this.ifPlace = options.ifPlace;
    }

    public toJson(): IRunnerProfitAndLossOptions {
        const json: IRunnerProfitAndLossOptions = {
        };
        if (typeof this.selectionId !== 'undefined') {
            json.selectionId = this.selectionId;
        }
        if (typeof this.ifWin !== 'undefined') {
            json.ifWin = this.ifWin;
        }
        if (typeof this.ifLose !== 'undefined') {
            json.ifLose = this.ifLose;
        }
        if (typeof this.ifPlace !== 'undefined') {
            json.ifPlace = this.ifPlace;
        }
        return json;
    }

    public getSelectionId(): number | undefined {
        return this.selectionId;
    }
    public setSelectionId(selectionId: number): void {
        this.selectionId = selectionId;
    }
    public getIfWin(): number | undefined {
        return this.ifWin;
    }
    public setIfWin(ifWin: number): void {
        this.ifWin = ifWin;
    }
    public getIfLose(): number | undefined {
        return this.ifLose;
    }
    public setIfLose(ifLose: number): void {
        this.ifLose = ifLose;
    }
    public getIfPlace(): number | undefined {
        return this.ifPlace;
    }
    public setIfPlace(ifPlace: number): void {
        this.ifPlace = ifPlace;
    }

}
