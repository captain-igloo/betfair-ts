import JsonMember from './JsonMember';

export interface IError {
    faultCode: string;
    faultString?: string;
}

export default abstract class JsonResponse extends JsonMember {
    private success: boolean = false;
    private faultCode: string = '';
    private faultString: string = '';

    public validateJson(json: any): boolean {
        this.success = true;
        if ('faultcode' in json) {
            this.faultCode = json.faultcode;
            if ('faultstring' in json) {
                this.faultString = json.faultstring;
            }
            this.success = false;
        }
        return this.success;
    }

    public isSuccess(): boolean {
        return this.success;
    }

    public getFaultCode(): string {
        return this.faultCode;
    }

    public getFaultString(): string {
        return this.faultString;
    }
}

