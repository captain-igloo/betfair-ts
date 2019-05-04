/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class RollupModel extends Enum {
    static STAKE: string;
    static PAYOUT: string;
    static MANAGED_LIABILITY: string;
    static NONE: string;
    constructor(value?: string);
    setValue(value: string): void;
}
