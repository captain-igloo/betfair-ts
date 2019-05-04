/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class OrderType extends Enum {
    static LIMIT: string;
    static LIMIT_ON_CLOSE: string;
    static MARKET_ON_CLOSE: string;
    constructor(value?: string);
    setValue(value: string): void;
}
