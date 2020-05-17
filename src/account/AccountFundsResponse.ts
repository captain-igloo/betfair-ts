/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';


export interface IAccountFundsResponseOptions {
    availableToBetBalance?: number;
    exposure?: number;
    retainedCommission?: number;
    exposureLimit?: number;
    discountRate?: number;
    pointsBalance?: number;
    wallet?: string;
}

export default class AccountFundsResponse extends JsonResponse {
    private availableToBetBalance?: number;
    private exposure?: number;
    private retainedCommission?: number;
    private exposureLimit?: number;
    private discountRate?: number;
    private pointsBalance?: number;
    private wallet?: string;

    constructor(options: IAccountFundsResponseOptions) {
        super();
        if (this.validateJson(options)) {
            this.availableToBetBalance = options.availableToBetBalance;
            this.exposure = options.exposure;
            this.retainedCommission = options.retainedCommission;
            this.exposureLimit = options.exposureLimit;
            this.discountRate = options.discountRate;
            this.pointsBalance = options.pointsBalance;
            this.wallet = options.wallet;
        }
    }

    public toJson(): IAccountFundsResponseOptions {
        const json: IAccountFundsResponseOptions = {
        };
        if (typeof this.availableToBetBalance !== 'undefined') {
            json.availableToBetBalance = this.availableToBetBalance;
        }
        if (typeof this.exposure !== 'undefined') {
            json.exposure = this.exposure;
        }
        if (typeof this.retainedCommission !== 'undefined') {
            json.retainedCommission = this.retainedCommission;
        }
        if (typeof this.exposureLimit !== 'undefined') {
            json.exposureLimit = this.exposureLimit;
        }
        if (typeof this.discountRate !== 'undefined') {
            json.discountRate = this.discountRate;
        }
        if (typeof this.pointsBalance !== 'undefined') {
            json.pointsBalance = this.pointsBalance;
        }
        if (typeof this.wallet !== 'undefined') {
            json.wallet = this.wallet;
        }
        return json;
    }

    public getAvailableToBetBalance(): number | undefined {
        return this.availableToBetBalance;
    }
    public setAvailableToBetBalance(availableToBetBalance: number): void {
        this.availableToBetBalance = availableToBetBalance;
    }
    public getExposure(): number | undefined {
        return this.exposure;
    }
    public setExposure(exposure: number): void {
        this.exposure = exposure;
    }
    public getRetainedCommission(): number | undefined {
        return this.retainedCommission;
    }
    public setRetainedCommission(retainedCommission: number): void {
        this.retainedCommission = retainedCommission;
    }
    public getExposureLimit(): number | undefined {
        return this.exposureLimit;
    }
    public setExposureLimit(exposureLimit: number): void {
        this.exposureLimit = exposureLimit;
    }
    public getDiscountRate(): number | undefined {
        return this.discountRate;
    }
    public setDiscountRate(discountRate: number): void {
        this.discountRate = discountRate;
    }
    public getPointsBalance(): number | undefined {
        return this.pointsBalance;
    }
    public setPointsBalance(pointsBalance: number): void {
        this.pointsBalance = pointsBalance;
    }
    public getWallet(): string | undefined {
        return this.wallet;
    }
    public setWallet(wallet: string): void {
        this.wallet = wallet;
    }

}
