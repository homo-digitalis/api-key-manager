"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uniqid = require("uniqid");
class ApiKeyManager {
    static getInstance() {
        if (ApiKeyManager.instance === undefined) {
            ApiKeyManager.instance = new ApiKeyManager();
        }
        return ApiKeyManager.instance;
    }
    constructor() {
        this.data = "";
    }
    generateNewAPIKey() {
        this.data = uniqid(`${uniqid()}-${uniqid()}-${uniqid()}${uniqid()}`);
        return this.data;
    }
    // tslint:disable-next-line:prefer-function-over-method
    sendAPIKeyToRequestor(address) {
        // tbd
    }
}
exports.ApiKeyManager = ApiKeyManager;
