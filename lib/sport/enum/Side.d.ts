/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class Side extends Enum {
    static BACK: string;
    static LAY: string;
    constructor(value?: string);
    setValue(value: string): void;
}
