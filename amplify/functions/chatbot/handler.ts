import type { Handler } from 'aws-lambda';
import dotenv from 'dotenv';

import { SystemPrompt } from 'mongodb-chatbot-server';
import { AzureOpenAI } from 'mongodb-rag-core/openai';

dotenv.config();

// System prompt for chatbot
const systemPrompt: SystemPrompt = {
  role: 'system',
  content: `You are an assistant to engineers and product designers using the LeafyGreen design system.
Answer their questions about the framework in a friendly conversational tone.

For questions regarding engineering, and react components, provide code examples.
For questions regarding design and UX guidelines, provide sources.

Format your answers in Markdown.
Be concise in your answers.
`,
};

export const handler: Handler = async (event, context) => {
  console.log(event, process.env.AZURE_OPENAI_ENDPOINT);

  const openAiClient = new AzureOpenAI({
    endpoint: process.env.AZURE_OPENAI_ENDPOINT,
    apiKey: process.env.AZURE_OPENAI_API_KEY,
    apiVersion: '2024-04-01-preview',
    deployment: process.env.AZURE_OPENAI_API_CHAT_COMPLETION_DEPLOYMENT_NAME,
  });

  const response = await openAiClient.responses.create({
    model: process.env.AZURE_OPENAI_CHAT_COMPLETION_MODEL || 'gpt-4o',
    stream: false,
    input: 'Hello, World!',
  });

  console.log('OpenAI response:', response);

  return JSON.stringify(response);
};
