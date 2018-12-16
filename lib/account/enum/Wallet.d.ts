/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class Wallet extends Enum {
    static UK: string;
    static AUSTRALIAN: string;
    constructor(value?: string);
    setValue(value: string): void;
}
