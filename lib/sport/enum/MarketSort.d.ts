/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class MarketSort extends Enum {
    static MINIMUM_TRADED: string;
    static MAXIMUM_TRADED: string;
    static MINIMUM_AVAILABLE: string;
    static MAXIMUM_AVAILABLE: string;
    static FIRST_TO_START: string;
    static LAST_TO_START: string;
    constructor(value?: string);
    setValue(value: string): void;
}
