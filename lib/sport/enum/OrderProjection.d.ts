/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class OrderProjection extends Enum {
    static ALL: string;
    static EXECUTABLE: string;
    static EXECUTION_COMPLETE: string;
    constructor(value?: string);
    setValue(value: string): void;
}
