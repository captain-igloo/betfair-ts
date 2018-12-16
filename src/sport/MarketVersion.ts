/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

export default class MarketVersion extends JsonMember {
    private version: number | null;

    constructor(
        version: number | null = null,
    ) {
        super();
        this.version = version;
    }

    public fromJson(json: any): void {
        if ('version' in json) {
            this.version = json.version;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.version !== null) {
            json.version = this.version;
        }
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getVersion(): number | null {
        return this.version;
    }
    public setVersion(version: number | null): void {
        this.version = version;
    }

}
