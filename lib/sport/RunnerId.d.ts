/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export default class RunnerId extends JsonMember {
    private marketId;
    private selectionId;
    private handicap;
    constructor(marketId?: string, selectionId?: number | null, handicap?: number | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getMarketId(): string;
    setMarketId(marketId: string): void;
    getSelectionId(): number | null;
    setSelectionId(selectionId: number | null): void;
    getHandicap(): number | null;
    setHandicap(handicap: number | null): void;
}
