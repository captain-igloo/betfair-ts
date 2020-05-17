/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export interface IRunnerCatalogOptions {
    selectionId: number;
    runnerName: string;
    handicap: number;
    sortPriority: number;
    metadata?: Map<string, string> | {[key: string]: string};
}

export default class RunnerCatalog extends JsonMember {
    private selectionId: number;
    private runnerName: string;
    private handicap: number;
    private sortPriority: number;
    private metadata?: Map<string, string>;

    constructor(options: IRunnerCatalogOptions) {
        super();
        this.selectionId = options.selectionId;
        this.runnerName = options.runnerName;
        this.handicap = options.handicap;
        this.sortPriority = options.sortPriority;
        if (options.metadata) {
            this.metadata = this.mapFromJson(options.metadata);
        }
    }

    public toJson(): IRunnerCatalogOptions {
        const json: IRunnerCatalogOptions = {
            selectionId: this.selectionId,
            runnerName: this.runnerName,
            handicap: this.handicap,
            sortPriority: this.sortPriority,
        };
        if (this.metadata && this.metadata.size > 0) {
            json.metadata = {};
            this.metadata.forEach((value, key) => {
                (json.metadata as {[key: string]: string})[key] = value;
            });
        }
        return json;
    }

    public getSelectionId(): number {
        return this.selectionId;
    }
    public setSelectionId(selectionId: number): void {
        this.selectionId = selectionId;
    }
    public getRunnerName(): string {
        return this.runnerName;
    }
    public setRunnerName(runnerName: string): void {
        this.runnerName = runnerName;
    }
    public getHandicap(): number {
        return this.handicap;
    }
    public setHandicap(handicap: number): void {
        this.handicap = handicap;
    }
    public getSortPriority(): number {
        return this.sortPriority;
    }
    public setSortPriority(sortPriority: number): void {
        this.sortPriority = sortPriority;
    }
    public getMetadata(): Map<string, string> | undefined {
        return this.metadata;
    }
    public setMetadata(metadata: Map<string, string>): void {
        this.metadata = metadata;
    }

}
