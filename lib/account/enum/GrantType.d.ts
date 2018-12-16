/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class GrantType extends Enum {
    static AUTHORIZATION_CODE: string;
    static REFRESH_TOKEN: string;
    constructor(value?: string);
    setValue(value: string): void;
}
