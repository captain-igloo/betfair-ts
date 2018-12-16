/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export default class MarketLineRangeInfo extends JsonMember {
    private maxUnitValue;
    private minUnitValue;
    private interval;
    private marketUnit;
    constructor(maxUnitValue?: number | null, minUnitValue?: number | null, interval?: number | null, marketUnit?: string);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getMaxUnitValue(): number | null;
    setMaxUnitValue(maxUnitValue: number | null): void;
    getMinUnitValue(): number | null;
    setMinUnitValue(minUnitValue: number | null): void;
    getInterval(): number | null;
    setInterval(interval: number | null): void;
    getMarketUnit(): string;
    setMarketUnit(marketUnit: string): void;
}
