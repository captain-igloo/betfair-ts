/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

export default class MarketLineRangeInfo extends JsonMember {
    private maxUnitValue: number | null;
    private minUnitValue: number | null;
    private interval: number | null;
    private marketUnit: string;

    constructor(
        maxUnitValue: number | null = null,
        minUnitValue: number | null = null,
        interval: number | null = null,
        marketUnit: string = '',
    ) {
        super();
        this.maxUnitValue = maxUnitValue;
        this.minUnitValue = minUnitValue;
        this.interval = interval;
        this.marketUnit = marketUnit;
    }

    public fromJson(json: any): void {
        if ('maxUnitValue' in json) {
            this.maxUnitValue = json.maxUnitValue;
        }
        if ('minUnitValue' in json) {
            this.minUnitValue = json.minUnitValue;
        }
        if ('interval' in json) {
            this.interval = json.interval;
        }
        if ('marketUnit' in json) {
            this.marketUnit = json.marketUnit;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.maxUnitValue !== null) {
            json.maxUnitValue = this.maxUnitValue;
        }
        if (this.minUnitValue !== null) {
            json.minUnitValue = this.minUnitValue;
        }
        if (this.interval !== null) {
            json.interval = this.interval;
        }
        if (this.marketUnit !== null) {
            json.marketUnit = this.marketUnit;
        }
        return json;
    }

    public isValid(): boolean {
        return this.maxUnitValue !== null &&
            this.minUnitValue !== null &&
            this.interval !== null &&
            this.marketUnit !== null;
    }

    public getMaxUnitValue(): number | null {
        return this.maxUnitValue;
    }
    public setMaxUnitValue(maxUnitValue: number | null): void {
        this.maxUnitValue = maxUnitValue;
    }
    public getMinUnitValue(): number | null {
        return this.minUnitValue;
    }
    public setMinUnitValue(minUnitValue: number | null): void {
        this.minUnitValue = minUnitValue;
    }
    public getInterval(): number | null {
        return this.interval;
    }
    public setInterval(interval: number | null): void {
        this.interval = interval;
    }
    public getMarketUnit(): string {
        return this.marketUnit;
    }
    public setMarketUnit(marketUnit: string): void {
        this.marketUnit = marketUnit;
    }

}
