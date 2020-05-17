/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export interface IMarketVersionOptions {
    version?: number;
}
export default class MarketVersion extends JsonMember {
    private version?;
    constructor(options: IMarketVersionOptions);
    toJson(): IMarketVersionOptions;
    getVersion(): number | undefined;
    setVersion(version: number): void;
}
