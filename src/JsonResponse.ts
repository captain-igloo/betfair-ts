
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
                this.faultString = json.faultString;
            }
            this.success = false;
        }
        return this.success;
    }
}

export default JsonResponse;
