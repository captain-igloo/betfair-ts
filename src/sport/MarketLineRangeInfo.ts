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
    private maxUnitValue: number;
    private minUnitValue: number;
    private interval: number;
    private marketUnit: string;

    constructor(options: IMarketLineRangeInfoOptions) {
        super();
        this.maxUnitValue = options.maxUnitValue;
        this.minUnitValue = options.minUnitValue;
        this.interval = options.interval;
        this.marketUnit = options.marketUnit;
    }

    public toJson(): IMarketLineRangeInfoOptions {
        const json: IMarketLineRangeInfoOptions = {
            maxUnitValue: this.maxUnitValue,
            minUnitValue: this.minUnitValue,
            interval: this.interval,
            marketUnit: this.marketUnit,
        };
        return json;
    }

    public getMaxUnitValue(): number {
        return this.maxUnitValue;
    }
    public setMaxUnitValue(maxUnitValue: number): void {
        this.maxUnitValue = maxUnitValue;
    }
    public getMinUnitValue(): number {
        return this.minUnitValue;
    }
    public setMinUnitValue(minUnitValue: number): void {
        this.minUnitValue = minUnitValue;
    }
    public getInterval(): number {
        return this.interval;
    }
    public setInterval(interval: number): void {
        this.interval = interval;
    }
    public getMarketUnit(): string {
        return this.marketUnit;
    }
    public setMarketUnit(marketUnit: string): void {
        this.marketUnit = marketUnit;
    }

}
