/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
export default class AccountFundsResponse extends JsonResponse {
    private availableToBetBalance;
    private exposure;
    private retainedCommission;
    private exposureLimit;
    private discountRate;
    private pointsBalance;
    private wallet;
    constructor(availableToBetBalance?: number | null, exposure?: number | null, retainedCommission?: number | null, exposureLimit?: number | null, discountRate?: number | null, pointsBalance?: number | null, wallet?: string);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getAvailableToBetBalance(): number | null;
    setAvailableToBetBalance(availableToBetBalance: number | null): void;
    getExposure(): number | null;
    setExposure(exposure: number | null): void;
    getRetainedCommission(): number | null;
    setRetainedCommission(retainedCommission: number | null): void;
    getExposureLimit(): number | null;
    setExposureLimit(exposureLimit: number | null): void;
    getDiscountRate(): number | null;
    setDiscountRate(discountRate: number | null): void;
    getPointsBalance(): number | null;
    setPointsBalance(pointsBalance: number | null): void;
    getWallet(): string;
    setWallet(wallet: string): void;
}
