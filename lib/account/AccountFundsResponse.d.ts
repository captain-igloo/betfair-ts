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
    private availableToBetBalance?;
    private exposure?;
    private retainedCommission?;
    private exposureLimit?;
    private discountRate?;
    private pointsBalance?;
    private wallet?;
    constructor(options: IAccountFundsResponseOptions);
    toJson(): IAccountFundsResponseOptions;
    getAvailableToBetBalance(): number | undefined;
    setAvailableToBetBalance(availableToBetBalance: number): void;
    getExposure(): number | undefined;
    setExposure(exposure: number): void;
    getRetainedCommission(): number | undefined;
    setRetainedCommission(retainedCommission: number): void;
    getExposureLimit(): number | undefined;
    setExposureLimit(exposureLimit: number): void;
    getDiscountRate(): number | undefined;
    setDiscountRate(discountRate: number): void;
    getPointsBalance(): number | undefined;
    setPointsBalance(pointsBalance: number): void;
    getWallet(): string | undefined;
    setWallet(wallet: string): void;
}
