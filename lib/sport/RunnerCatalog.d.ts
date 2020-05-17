/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export interface IRunnerCatalogOptions {
    selectionId: number;
    runnerName: string;
    handicap: number;
    sortPriority: number;
    metadata?: Map<string, string> | {
        [key: string]: string;
    };
}
export default class RunnerCatalog extends JsonMember {
    private selectionId;
    private runnerName;
    private handicap;
    private sortPriority;
    private metadata?;
    constructor(options: IRunnerCatalogOptions);
    toJson(): IRunnerCatalogOptions;
    getSelectionId(): number;
    setSelectionId(selectionId: number): void;
    getRunnerName(): string;
    setRunnerName(runnerName: string): void;
    getHandicap(): number;
    setHandicap(handicap: number): void;
    getSortPriority(): number;
    setSortPriority(sortPriority: number): void;
    getMetadata(): Map<string, string> | undefined;
    setMetadata(metadata: Map<string, string>): void;
}
