/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class IncludeItem extends Enum {
    static ALL: string;
    static EXCHANGE: string;
    static POKER_ROOM: string;
    static DEPOSITS_WITHDRAWALS: string;
    constructor(value?: string);
    setValue(value: string): void;
}
