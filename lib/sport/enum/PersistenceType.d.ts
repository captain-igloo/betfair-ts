/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class PersistenceType extends Enum {
    static LAPSE: string;
    static PERSIST: string;
    static MARKET_ON_CLOSE: string;
    constructor(value?: string);
    setValue(value: string): void;
}
