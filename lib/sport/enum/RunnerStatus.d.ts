/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class RunnerStatus extends Enum {
    static ACTIVE: string;
    static WINNER: string;
    static LOSER: string;
    static REMOVED_VACANT: string;
    static REMOVED: string;
    static PLACED: string;
    constructor(value?: string);
    setValue(value: string): void;
}
