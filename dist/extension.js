"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(require("vscode"));
const deepseek_client_1 = require("./deepseek-client");
function activate(context) {
    const config = vscode.workspace.getConfiguration('deepseekCopilot');
    const apiKey = config.get('sk-7c09cbda279b4f909626bfe98b6c4d20'); // Don't hardcode the key here!
    if (!apiKey) {
        vscode.window.showErrorMessage('❌ DeepSeek Copilot: Please set your API key in settings!');
        return;
    }
    const client = new deepseek_client_1.DeepSeekClient(apiKey);
    // Register inline suggestions
    const provider = {
        provideInlineCompletionItems: async (document, position) => {
            const textBeforeCursor = document.getText(new vscode.Range(new vscode.Position(Math.max(0, position.line - 5), 0), position));
            try {
                const suggestion = await client.getCodeCompletion(textBeforeCursor, document.languageId);
                return [{
                        insertText: suggestion,
                        range: new vscode.Range(position, position)
                    }];
            }
            catch (error) {
                vscode.window.showErrorMessage(`DeepSeek error: ${error instanceof Error ? error.message : String(error)}`);
                return [];
            }
        }
    };
    vscode.languages.registerInlineCompletionItemProvider({ scheme: 'file' }, provider);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map