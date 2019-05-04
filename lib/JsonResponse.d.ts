declare abstract class JsonResponse {
    private success;
    private faultCode;
    private faultString;
    abstract fromJson(json: string): void;
    validateJson(json: any): boolean;
    isSuccess(): boolean;
    getFaultCode(): string;
    getFaultString(): string;
}
export default JsonResponse;
