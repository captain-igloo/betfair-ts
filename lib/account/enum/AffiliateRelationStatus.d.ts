/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class AffiliateRelationStatus extends Enum {
    static INVALID_USER: string;
    static AFFILIATED: string;
    static NOT_AFFILIATED: string;
    constructor(value?: string);
    setValue(value: string): void;
}
