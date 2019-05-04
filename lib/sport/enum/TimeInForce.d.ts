/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class TimeInForce extends Enum {
    static FILL_OR_KILL: string;
    constructor(value?: string);
    setValue(value: string): void;
}
