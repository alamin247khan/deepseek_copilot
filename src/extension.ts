import * as vscode from 'vscode';
import { DeepSeekClient } from './deepseek-client';

export function activate(context: vscode.ExtensionContext) {
    const config = vscode.workspace.getConfiguration('deepseekCopilot');
    const apiKey = config.get('sk-7c09cbda279b4f909626bfe98b6c4d20') as string; // Don't hardcode the key here!

    if (!apiKey) {
        vscode.window.showErrorMessage('❌ DeepSeek Copilot: Please set your API key in settings!');
        return;
    }

    const client = new DeepSeekClient(apiKey);

    // Register inline suggestions
    const provider: vscode.InlineCompletionItemProvider = {
        provideInlineCompletionItems: async (document, position) => {
            const textBeforeCursor = document.getText(
                new vscode.Range(
                    new vscode.Position(Math.max(0, position.line - 5), 0),
                    position
                )
            );

            try {
                const suggestion = await client.getCodeCompletion(
                    textBeforeCursor,
                    document.languageId
                );

                return [{
                    insertText: suggestion,
                    range: new vscode.Range(position, position)
                }];
            } catch (error) {
                vscode.window.showErrorMessage(`DeepSeek error: ${error instanceof Error ? error.message : String(error)}`);
                return [];
            }
        }
    };

    vscode.languages.registerInlineCompletionItemProvider(
        { scheme: 'file' },
        provider
    );
}

export function deactivate() {}