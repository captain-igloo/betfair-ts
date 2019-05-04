/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class OrderStatus extends Enum {
    static PENDING: string;
    static EXECUTION_COMPLETE: string;
    static EXECUTABLE: string;
    static EXPIRED: string;
    constructor(value?: string);
    setValue(value: string): void;
}
