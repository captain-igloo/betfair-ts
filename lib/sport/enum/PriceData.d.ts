/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class PriceData extends Enum {
    static SP_AVAILABLE: string;
    static SP_TRADED: string;
    static EX_BEST_OFFERS: string;
    static EX_ALL_OFFERS: string;
    static EX_TRADED: string;
    constructor(value?: string);
    setValue(value: string): void;
}
