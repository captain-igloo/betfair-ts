/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class MarketStatus extends Enum {
    static INACTIVE: string;
    static OPEN: string;
    static SUSPENDED: string;
    static CLOSED: string;
    constructor(value?: string);
    setValue(value: string): void;
}
