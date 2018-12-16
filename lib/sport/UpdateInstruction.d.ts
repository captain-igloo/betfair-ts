/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import PersistenceType from '../sport/enum/PersistenceType';
export default class UpdateInstruction extends JsonMember {
    private betId;
    private newPersistenceType;
    constructor(betId?: string, newPersistenceType?: PersistenceType);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getBetId(): string;
    setBetId(betId: string): void;
    getNewPersistenceType(): PersistenceType;
    setNewPersistenceType(newPersistenceType: PersistenceType): void;
}
