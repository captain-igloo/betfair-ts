/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export default class RunnerCatalog extends JsonMember {
    private selectionId;
    private runnerName;
    private handicap;
    private sortPriority;
    private metadata;
    constructor(selectionId?: number | null, runnerName?: string, handicap?: number | null, sortPriority?: number | null, metadata?: Map<string, string>);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getSelectionId(): number | null;
    setSelectionId(selectionId: number | null): void;
    getRunnerName(): string;
    setRunnerName(runnerName: string): void;
    getHandicap(): number | null;
    setHandicap(handicap: number | null): void;
    getSortPriority(): number | null;
    setSortPriority(sortPriority: number | null): void;
    getMetadata(): Map<string, string>;
    setMetadata(metadata: Map<string, string>): void;
}
