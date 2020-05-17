/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export interface IRunnerIdOptions {
    marketId: string;
    selectionId: number;
    handicap?: number;
}
export default class RunnerId extends JsonMember {
    private marketId;
    private selectionId;
    private handicap?;
    constructor(options: IRunnerIdOptions);
    toJson(): IRunnerIdOptions;
    getMarketId(): string;
    setMarketId(marketId: string): void;
    getSelectionId(): number;
    setSelectionId(selectionId: number): void;
    getHandicap(): number | undefined;
    setHandicap(handicap: number): void;
}
