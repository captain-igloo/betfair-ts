/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class PriceLadderType extends Enum {
    static CLASSIC: string;
    static FINEST: string;
    static LINE_RANGE: string;
    constructor(value?: string);
    setValue(value: string): void;
}
