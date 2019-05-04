/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class MarketGroupType extends Enum {
    static EVENT: string;
    constructor(value?: string);
    setValue(value: string): void;
}
