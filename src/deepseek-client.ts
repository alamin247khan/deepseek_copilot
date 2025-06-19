import fetch from 'node-fetch';

interface DeepSeekResponse {
    choices: Array<{
        text: string;
    }>;
}

export class DeepSeekClient {
    private apiKey: string;
    private baseUrl: string = "https://api.deepseek.com/v1";

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async getCodeCompletion(prompt: string, language: string): Promise<string> {
        const response = await fetch(`${this.baseUrl}/completions`, {
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

        const data = await response.json() as DeepSeekResponse;
        return data.choices[0].text;
    }
}