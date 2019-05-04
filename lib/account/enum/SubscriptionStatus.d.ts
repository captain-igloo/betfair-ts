/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class SubscriptionStatus extends Enum {
    static ALL: string;
    static ACTIVATED: string;
    static UNACTIVATED: string;
    static CANCELLED: string;
    static EXPIRED: string;
    constructor(value?: string);
    setValue(value: string): void;
}
