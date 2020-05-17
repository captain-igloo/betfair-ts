/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import PersistenceType from '../sport/enum/PersistenceType';
export interface IUpdateInstructionOptions {
    betId: string;
    newPersistenceType: PersistenceType | string;
}
export default class UpdateInstruction extends JsonMember {
    private betId;
    private newPersistenceType;
    constructor(options: IUpdateInstructionOptions);
    toJson(): IUpdateInstructionOptions;
    getBetId(): string;
    setBetId(betId: string): void;
    getNewPersistenceType(): PersistenceType;
    setNewPersistenceType(newPersistenceType: PersistenceType): void;
}
