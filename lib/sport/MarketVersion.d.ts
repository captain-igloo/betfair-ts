/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export default class MarketVersion extends JsonMember {
    private version;
    constructor(version?: number | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getVersion(): number | null;
    setVersion(version: number | null): void;
}
