/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class MatchProjection extends Enum {
    static NO_ROLLUP: string;
    static ROLLED_UP_BY_PRICE: string;
    static ROLLED_UP_BY_AVG_PRICE: string;
    constructor(value?: string);
    setValue(value: string): void;
}
