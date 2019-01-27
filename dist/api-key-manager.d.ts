export interface IAPIKeyManager {
    generateNewAPIKey(): string;
    sendAPIKeyToRequestor(address: string): void;
}
export declare class ApiKeyManager implements IAPIKeyManager {
    private static instance;
    static getInstance(): ApiKeyManager;
    private data;
    private constructor();
    generateNewAPIKey(): string;
    sendAPIKeyToRequestor(address: string): void;
}
