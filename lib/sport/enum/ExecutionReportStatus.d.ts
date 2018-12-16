/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class ExecutionReportStatus extends Enum {
    static SUCCESS: string;
    static FAILURE: string;
    static PROCESSED_WITH_ERRORS: string;
    static TIMEOUT: string;
    constructor(value?: string);
    setValue(value: string): void;
}
