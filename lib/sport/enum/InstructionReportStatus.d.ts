/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class InstructionReportStatus extends Enum {
    static SUCCESS: string;
    static FAILURE: string;
    static TIMEOUT: string;
    constructor(value?: string);
    setValue(value: string): void;
}
