/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class SortDir extends Enum {
    static EARLIEST_TO_LATEST: string;
    static LATEST_TO_EARLIEST: string;
    constructor(value?: string);
    setValue(value: string): void;
}
