/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export interface IMarketLineRangeInfoOptions {
    maxUnitValue: number;
    minUnitValue: number;
    interval: number;
    marketUnit: string;
}
export default class MarketLineRangeInfo extends JsonMember {
    private maxUnitValue;
    private minUnitValue;
    private interval;
    private marketUnit;
    constructor(options: IMarketLineRangeInfoOptions);
    toJson(): IMarketLineRangeInfoOptions;
    getMaxUnitValue(): number;
    setMaxUnitValue(maxUnitValue: number): void;
    getMinUnitValue(): number;
    setMinUnitValue(minUnitValue: number): void;
    getInterval(): number;
    setInterval(interval: number): void;
    getMarketUnit(): string;
    setMarketUnit(marketUnit: string): void;
}
