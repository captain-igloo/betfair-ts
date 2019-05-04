/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class BetTargetType extends Enum {
    static PAYOUT: string;
    static BACKERS_PROFIT: string;
    constructor(value?: string);
    setValue(value: string): void;
}
