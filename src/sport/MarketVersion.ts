/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export interface IMarketVersionOptions {
    version?: number;
}

export default class MarketVersion extends JsonMember {
    private version?: number;

    constructor(options: IMarketVersionOptions) {
        super();
        this.version = options.version;
    }

    public toJson(): IMarketVersionOptions {
        const json: IMarketVersionOptions = {
        };
        if (typeof this.version !== 'undefined') {
            json.version = this.version;
        }
        return json;
    }

    public getVersion(): number | undefined {
        return this.version;
    }
    public setVersion(version: number): void {
        this.version = version;
    }

}
