"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uniqid = require("uniqid");
class ApiKeyManager {
    constructor(sender) {
        this.sender = sender;
        this.data = "";
    }
    static getInstance(sender) {
        if (ApiKeyManager.instance === undefined) {
            ApiKeyManager.instance = new ApiKeyManager(sender);
        }
        return ApiKeyManager.instance;
    }
    generateNewAPIKey() {
        this.data = uniqid(`${uniqid()}-${uniqid()}-${uniqid()}${uniqid()}`);
        return this.data;
    }
    // tslint:disable-next-line:prefer-function-over-method
    sendAPIKeyToRequestor(address, message) {
        this.sender.send(address, message);
    }
}
exports.ApiKeyManager = ApiKeyManager;
