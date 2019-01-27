"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_key_manager_1 = require("./api-key-manager");
let apiKeyManager;
describe("ApiKeyManager", () => {
    beforeEach(async () => {
        apiKeyManager = api_key_manager_1.ApiKeyManager.getInstance();
    });
    it("should generate new API Key", async () => {
        const apiKey = apiKeyManager.generateNewAPIKey();
        expect(apiKey)
            .toBeDefined();
    });
    it("should count calls", async () => {
        // const apiKey: string = apiKeyManager.generateNewAPIKey()
        // expect(apiKey)
        //     .toBeDefined()
    });
    it("sends API Key to Requestor", async () => {
        apiKeyManager.sendAPIKeyToRequestor("");
    });
});
