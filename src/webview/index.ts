private getWebviewContent(styleUri: vscode.Uri): string {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="${styleUri}" rel="stylesheet">
    <!-- Load from CDN -->
    <script type="module" src="https://unpkg.com/@vscode/webview-ui-toolkit@latest"></script>
    <title>DeepSeek Copilot</title>
    <style>
      body {
        padding: 10px;
        color: var(--vscode-editor-foreground);
        background: var(--vscode-editor-background);
        font-family: var(--vscode-font-family);
      }
      .chat-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    </style>
  </head>
  <body>
    <vscode-panels>
      <vscode-panel-tab id="tab-chat">CHAT</vscode-panel-tab>
      <vscode-panel-tab id="tab-code">CODE</vscode-panel-tab>
      
      <vscode-panel-view id="view-chat">
        <div class="chat-container">
          <vscode-text-area placeholder="Ask DeepSeek..." rows="3"></vscode-text-area>
          <vscode-button appearance="primary">Send</vscode-button>
        </div>
      </vscode-panel-view>
      
      <vscode-panel-view id="view-code">
        <vscode-text-area placeholder="Describe code you want to generate..." rows="3"></vscode-text-area>
        <vscode-button appearance="primary">Generate</vscode-button>
      </vscode-panel-view>
    </vscode-panels>
    
    <script>
      // Your webview JavaScript here
    </script>
  </body>
  </html>
  `;
}