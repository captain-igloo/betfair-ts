/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class GroupBy extends Enum {
    static EVENT_TYPE: string;
    static EVENT: string;
    static MARKET: string;
    static RUNNER: string;
    static SIDE: string;
    static BET: string;
    static STRATEGY: string;
    constructor(value?: string);
    setValue(value: string): void;
}
