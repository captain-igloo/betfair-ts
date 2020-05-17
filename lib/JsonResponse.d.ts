import JsonMember from './JsonMember';
export interface IError {
    faultCode: string;
    faultString?: string;
}
export default abstract class JsonResponse extends JsonMember {
    private success;
    private faultCode;
    private faultString;
    validateJson(json: any): boolean;
    isSuccess(): boolean;
    getFaultCode(): string;
    getFaultString(): string;
}
