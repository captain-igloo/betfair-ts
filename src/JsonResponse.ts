
abstract class JsonResponse {
    private success: boolean = false;
    private faultCode: string = '';
    private faultString: string = '';

    public abstract fromJson(json: string): void;

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

export default JsonResponse;
