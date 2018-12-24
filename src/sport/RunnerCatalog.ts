/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

export default class RunnerCatalog extends JsonMember {
    private selectionId: number | null;
    private runnerName: string;
    private handicap: number | null;
    private sortPriority: number | null;
    private metadata: Map<string, string>;

    constructor(
        selectionId: number | null = null,
        runnerName: string = '',
        handicap: number | null = null,
        sortPriority: number | null = null,
        metadata: Map<string, string> = new Map<string, string>(),
    ) {
        super();
        this.selectionId = selectionId;
        this.runnerName = runnerName;
        this.handicap = handicap;
        this.sortPriority = sortPriority;
        this.metadata = metadata;
    }

    public fromJson(json: any): void {
        if ('selectionId' in json) {
            this.selectionId = json.selectionId;
        }
        if ('runnerName' in json) {
            this.runnerName = json.runnerName;
        }
        if ('handicap' in json) {
            this.handicap = json.handicap;
        }
        if ('sortPriority' in json) {
            this.sortPriority = json.sortPriority;
        }
        if ('metadata' in json) {
            Object.keys(json.metadata).forEach((key: string) => {
                this.metadata.set(key, json.metadata[key]);
            });
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.selectionId !== null) {
            json.selectionId = this.selectionId;
        }
        if (this.runnerName !== null) {
            json.runnerName = this.runnerName;
        }
        if (this.handicap !== null) {
            json.handicap = this.handicap;
        }
        if (this.sortPriority !== null) {
            json.sortPriority = this.sortPriority;
        }
        if (this.metadata.size > 0) {
            json.metadata = {};
            this.metadata.forEach((value, key) => {
                json.metadata.key = value;
            });
        }
        return json;
    }

    public isValid(): boolean {
        return this.selectionId !== null &&
            this.runnerName !== null &&
            this.handicap !== null &&
            this.sortPriority !== null;
    }

    public getSelectionId(): number | null {
        return this.selectionId;
    }
    public setSelectionId(selectionId: number | null): void {
        this.selectionId = selectionId;
    }
    public getRunnerName(): string {
        return this.runnerName;
    }
    public setRunnerName(runnerName: string): void {
        this.runnerName = runnerName;
    }
    public getHandicap(): number | null {
        return this.handicap;
    }
    public setHandicap(handicap: number | null): void {
        this.handicap = handicap;
    }
    public getSortPriority(): number | null {
        return this.sortPriority;
    }
    public setSortPriority(sortPriority: number | null): void {
        this.sortPriority = sortPriority;
    }
    public getMetadata(): Map<string, string> {
        return this.metadata;
    }
    public setMetadata(metadata: Map<string, string>): void {
        this.metadata = metadata;
    }

}
