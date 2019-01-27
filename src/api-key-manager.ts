const uniqid: any = require("uniqid")

export interface IAPIKeyManager {
    generateNewAPIKey(): string
    sendAPIKeyToRequestor(address: string): void
}
export class ApiKeyManager implements IAPIKeyManager {

    private static instance: ApiKeyManager | undefined

    public static getInstance(): ApiKeyManager {
        if (ApiKeyManager.instance === undefined) {
            ApiKeyManager.instance = new ApiKeyManager()
        }

        return ApiKeyManager.instance
    }

    private data: string

    private constructor() {
        this.data = ""
    }

    public generateNewAPIKey(): string {
        this.data = uniqid(`${uniqid()}-${uniqid()}-${uniqid()}${uniqid()}`)

        return this.data
    }

    // tslint:disable-next-line:prefer-function-over-method
    public sendAPIKeyToRequestor(address: string): void {
        // tbd
    }

}
