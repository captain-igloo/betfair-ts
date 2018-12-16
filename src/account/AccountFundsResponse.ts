/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

export default class AccountFundsResponse extends JsonResponse {
    private availableToBetBalance: number | null;
    private exposure: number | null;
    private retainedCommission: number | null;
    private exposureLimit: number | null;
    private discountRate: number | null;
    private pointsBalance: number | null;
    private wallet: string;

    constructor(
        availableToBetBalance: number | null = null,
        exposure: number | null = null,
        retainedCommission: number | null = null,
        exposureLimit: number | null = null,
        discountRate: number | null = null,
        pointsBalance: number | null = null,
        wallet: string = '',
    ) {
        super();
        this.availableToBetBalance = availableToBetBalance;
        this.exposure = exposure;
        this.retainedCommission = retainedCommission;
        this.exposureLimit = exposureLimit;
        this.discountRate = discountRate;
        this.pointsBalance = pointsBalance;
        this.wallet = wallet;
    }

    public fromJson(json: any): void {
        if ('availableToBetBalance' in json) {
            this.availableToBetBalance = json.availableToBetBalance;
        }
        if ('exposure' in json) {
            this.exposure = json.exposure;
        }
        if ('retainedCommission' in json) {
            this.retainedCommission = json.retainedCommission;
        }
        if ('exposureLimit' in json) {
            this.exposureLimit = json.exposureLimit;
        }
        if ('discountRate' in json) {
            this.discountRate = json.discountRate;
        }
        if ('pointsBalance' in json) {
            this.pointsBalance = json.pointsBalance;
        }
        if ('wallet' in json) {
            this.wallet = json.wallet;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.availableToBetBalance !== null) {
            json.availableToBetBalance = this.availableToBetBalance;
        }
        if (this.exposure !== null) {
            json.exposure = this.exposure;
        }
        if (this.retainedCommission !== null) {
            json.retainedCommission = this.retainedCommission;
        }
        if (this.exposureLimit !== null) {
            json.exposureLimit = this.exposureLimit;
        }
        if (this.discountRate !== null) {
            json.discountRate = this.discountRate;
        }
        if (this.pointsBalance !== null) {
            json.pointsBalance = this.pointsBalance;
        }
        if (this.wallet !== null) {
            json.wallet = this.wallet;
        }
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getAvailableToBetBalance(): number | null {
        return this.availableToBetBalance;
    }
    public setAvailableToBetBalance(availableToBetBalance: number | null): void {
        this.availableToBetBalance = availableToBetBalance;
    }
    public getExposure(): number | null {
        return this.exposure;
    }
    public setExposure(exposure: number | null): void {
        this.exposure = exposure;
    }
    public getRetainedCommission(): number | null {
        return this.retainedCommission;
    }
    public setRetainedCommission(retainedCommission: number | null): void {
        this.retainedCommission = retainedCommission;
    }
    public getExposureLimit(): number | null {
        return this.exposureLimit;
    }
    public setExposureLimit(exposureLimit: number | null): void {
        this.exposureLimit = exposureLimit;
    }
    public getDiscountRate(): number | null {
        return this.discountRate;
    }
    public setDiscountRate(discountRate: number | null): void {
        this.discountRate = discountRate;
    }
    public getPointsBalance(): number | null {
        return this.pointsBalance;
    }
    public setPointsBalance(pointsBalance: number | null): void {
        this.pointsBalance = pointsBalance;
    }
    public getWallet(): string {
        return this.wallet;
    }
    public setWallet(wallet: string): void {
        this.wallet = wallet;
    }

}
