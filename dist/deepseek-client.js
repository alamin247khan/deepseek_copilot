"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeepSeekClient = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
class DeepSeekClient {
    constructor(apiKey) {
        this.baseUrl = "https://api.deepseek.com/v1";
        this.apiKey = apiKey;
    }
    async getCodeCompletion(prompt, language) {
        const response = await (0, node_fetch_1.default)(`${this.baseUrl}/completions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiKey}`
            },
            body: JSON.stringify({
                prompt,
                language,
                max_tokens: 100,
                temperature: 0.7
            })
        });
        if (!response.ok) {
            throw new Error(`API error: ${response.statusText}`);
        }
        const data = await response.json();
        return data.choices[0].text;
    }
}
exports.DeepSeekClient = DeepSeekClient;
//# sourceMappingURL=deepseek-client.js.map