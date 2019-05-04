/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class BetStatus extends Enum {
    static SETTLED: string;
    static VOIDED: string;
    static LAPSED: string;
    static CANCELLED: string;
    constructor(value?: string);
    setValue(value: string): void;
}
