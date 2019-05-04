/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class TimeGranularity extends Enum {
    static DAYS: string;
    static HOURS: string;
    static MINUTES: string;
    constructor(value?: string);
    setValue(value: string): void;
}
