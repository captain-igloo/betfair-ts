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
    private betId: string;
    private newPersistenceType: PersistenceType;

    constructor(options: IUpdateInstructionOptions) {
        super();
        this.betId = options.betId;
        this.newPersistenceType = this.fromJson(options.newPersistenceType, PersistenceType);
    }

    public toJson(): IUpdateInstructionOptions {
        const json: IUpdateInstructionOptions = {
            betId: this.betId,
            newPersistenceType: this.newPersistenceType.getValue(),
        };
        return json;
    }

    public getBetId(): string {
        return this.betId;
    }
    public setBetId(betId: string): void {
        this.betId = betId;
    }
    public getNewPersistenceType(): PersistenceType {
        return this.newPersistenceType;
    }
    public setNewPersistenceType(newPersistenceType: PersistenceType): void {
        this.newPersistenceType = newPersistenceType;
    }

}
