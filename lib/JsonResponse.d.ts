declare abstract class JsonResponse {
    private success;
    private faultCode;
    private faultString;
    abstract fromJson(json: string): void;
    validateJson(json: any): boolean;
}
export default JsonResponse;
