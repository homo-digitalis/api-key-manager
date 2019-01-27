"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_key_manager_1 = require("./api-key-manager");
const sender_1 = require("./sender");
describe("ApiKeyManager", () => {
    it("should generate new API Key", async () => {
        const apiKeyManager = api_key_manager_1.ApiKeyManager.getInstance(new sender_1.TelegramMessageSender());
        const apiKey = apiKeyManager.generateNewAPIKey();
        expect(apiKey)
            .toBeDefined();
    });
    it("should count calls", async () => {
        // work in progress
    });
    it("sends API Key to Requestor", async () => {
        const apiKeyManager = api_key_manager_1.ApiKeyManager.getInstance(new sender_1.TelegramMessageSender());
        // work in progress
        apiKeyManager.sendAPIKeyToRequestor("", "");
    });
});
