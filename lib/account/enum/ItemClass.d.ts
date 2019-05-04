/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class ItemClass extends Enum {
    static UNKNOWN: string;
    constructor(value?: string);
    setValue(value: string): void;
}
