/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class Status extends Enum {
    static SUCCESS: string;
    constructor(value?: string);
    setValue(value: string): void;
}
