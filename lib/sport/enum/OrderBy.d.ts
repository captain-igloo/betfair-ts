/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class OrderBy extends Enum {
    static BY_BET: string;
    static BY_MARKET: string;
    static BY_PLACE_TIME: string;
    static BY_MATCH_TIME: string;
    static BY_VOID_TIME: string;
    static BY_SETTLED_TIME: string;
    constructor(value?: string);
    setValue(value: string): void;
}
