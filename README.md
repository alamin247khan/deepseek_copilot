# 🤖 DeepSeek Copilot

[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/your-publisher.deepseek-copilot?style=for-the-badge&label=VS%20Marketplace)](https://marketplace.visualstudio.com/items?itemName=your-publisher.deepseek-copilot)
[![GitHub license](https://img.shields.io/github/license/alamin247khan/deepseek-copilot?style=for-the-badge)](https://github.com/alamin247khan/deepseek-copilot/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/alamin247khan/deepseek-copilot?style=for-the-badge)](https://github.com/alamin247khan/deepseek-copilot/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/alamin247khan/deepseek-copilot?style=for-the-badge)](https://github.com/alamin247khan/deepseek-copilot/issues)

> AI-powered code suggestions using the DeepSeek API, right in your editor.

DeepSeek Copilot brings the power of DeepSeek's language models to Visual Studio Code, providing intelligent code completion suggestions to boost your productivity.

## ✨ Features

- **Intelligent Code Completion**: Get smart code suggestions as you type.
- **Powered by DeepSeek API**: Leverages the cutting-edge models from DeepSeek.
- **Seamless Integration**: Integrates directly into the VS Code editor for a smooth workflow.
- **Configurable**: Easily configure your API key to get started.

## 🚀 Installation

### From Visual Studio Marketplace

1.  Open the **Extensions** view in VS Code (`Ctrl+Shift+X`).
2.  Search for `DeepSeek Copilot`.
3.  Click **Install**.
4.  Reload VS Code if prompted.

*(Note: You'll need to replace `your-publisher` in the badge link once you publish the extension.)*

### From VSIX

1.  Download the latest `.vsix` file from the [releases page](https://github.com/alamin247khan/deepseek-copilot/releases).
2.  Open the **Extensions** view in VS Code (`Ctrl+Shift+X`).
3.  Click the `...` menu in the top-right corner and select **Install from VSIX...**.
4.  Choose the downloaded `.vsix` file.

## ⚙️ Configuration

Before using DeepSeek Copilot, you need to configure your DeepSeek API key:

1.  Open the **Command Palette** (`Ctrl+Shift+P`).
2.  Search for and select **Preferences: Open User Settings (JSON)**.
3.  Add the following to your `settings.json` file:

```json
"deepseekCopilot.apiKey": "YOUR_DEEPSEEK_API_KEY"
```

Replace `YOUR_DEEPSEEK_API_KEY` with your actual key.

## 🤝 Contributing

Contributions are welcome! If you have ideas for new features or have found a bug, please open an issue or submit a pull request,

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 