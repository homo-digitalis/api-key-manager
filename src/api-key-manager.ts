import { ISender } from "./sender"

const uniqid: any = require("uniqid")

export interface IAPIKeyManager {
    generateNewAPIKey(): string
    sendAPIKeyToRequestor(address: string, message: any): void
}

export class ApiKeyManager implements IAPIKeyManager {

    private static instance: ApiKeyManager | undefined

    public static getInstance(sender: ISender): ApiKeyManager {
        if (ApiKeyManager.instance === undefined) {
            ApiKeyManager.instance = new ApiKeyManager(sender)
        }

        return ApiKeyManager.instance
    }

    private data: string

    private constructor(private readonly sender: ISender) {
        this.data = ""
    }

    public generateNewAPIKey(): string {
        this.data = uniqid(`${uniqid()}-${uniqid()}-${uniqid()}${uniqid()}`)

        return this.data
    }

    // tslint:disable-next-line:prefer-function-over-method
    public sendAPIKeyToRequestor(address: string, message: any): void {
        this.sender.send(address, message)
    }

}
