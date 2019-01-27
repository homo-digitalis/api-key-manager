import { ISender } from "./sender";
export interface IAPIKeyManager {
    generateNewAPIKey(): string;
    sendAPIKeyToRequestor(address: string, message: any): void;
}
export declare class ApiKeyManager implements IAPIKeyManager {
    private readonly sender;
    private static instance;
    static getInstance(sender: ISender): ApiKeyManager;
    private data;
    private constructor();
    generateNewAPIKey(): string;
    sendAPIKeyToRequestor(address: string, message: any): void;
}
