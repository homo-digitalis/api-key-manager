import { ApiKeyManager } from "./api-key-manager"

let apiKeyManager: ApiKeyManager

describe("ApiKeyManager", () => {
    beforeEach(async () => {
        apiKeyManager = ApiKeyManager.getInstance()
    })

    it("should generate new API Key", async () => {
        const apiKey: string = apiKeyManager.generateNewAPIKey()
        expect(apiKey)
            .toBeDefined()
    })

    it("should count calls", async () => {
        // const apiKey: string = apiKeyManager.generateNewAPIKey()
        // expect(apiKey)
        //     .toBeDefined()
    })

    it("sends API Key to Requestor", async () => {
        apiKeyManager.sendAPIKeyToRequestor("")
    })

})
