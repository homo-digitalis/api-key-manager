import { ApiKeyManager } from "./api-key-manager"
import { TelegramMessageSender } from "./sender"

describe("ApiKeyManager", () => {

    it("should generate new API Key", async () => {
        const apiKeyManager: ApiKeyManager = ApiKeyManager.getInstance(new TelegramMessageSender())

        const apiKey: string = apiKeyManager.generateNewAPIKey()
        expect(apiKey)
            .toBeDefined()
    })

    it("should count calls", async () => {
        // work in progress
    })

    it("sends API Key to Requestor", async () => {
        const apiKeyManager: ApiKeyManager = ApiKeyManager.getInstance(new TelegramMessageSender())

        // work in progress
        apiKeyManager.sendAPIKeyToRequestor("", "")
    })

})
