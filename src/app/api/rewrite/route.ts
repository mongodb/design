import { AzureOpenAI } from "openai";
import { DefaultAzureCredential, getBearerTokenProvider } from "@azure/identity";
import dotenv from "dotenv";
import getSystemPrompt from "./_getSystemPrompt";
import { CopyContextGuidelinesKeys } from "./copyContextGuidelinesMap";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
 
dotenv.config();  

export const POST = auth(async function POST(req, res) {
	if (!req.auth) {
	  return NextResponse.json({
			message: "Unauthorized: You must be logged in to access this endpoint.",
		}, {
			status: 401,
		});
	}

  const endpoint = process.env["AZURE_OPENAI_ENDPOINT"] || "https://gai-351.openai.azure.com/";
  const deployment = "gpt-4o"; // This must match your deployment name
	const apiVersion = "2025-01-01-preview";

	const credential = new DefaultAzureCredential();
	const scope = "https://cognitiveservices.azure.com/.default";
	const azureADTokenProvider = getBearerTokenProvider(credential, scope);

	const body = await req?.json();

	const { copy, copyContext, minLength, maxLength }: {
		copy: string;
		copyContext?: CopyContextGuidelinesKeys | 'other';
		minLength?: string;
		maxLength?: string;
	} = body || {};

	const client = new AzureOpenAI({
		endpoint,
		azureADTokenProvider,
		apiVersion,
		deployment,
	});

	const systemPrompt = await getSystemPrompt({
		copyContext,
		minLength,
		maxLength,
	});

	const openAIResponse = await client.chat.completions.create({
		// The chat messages to generate a completion for.
		messages: [
			systemPrompt,
			{
				role: "user",
				content: `"""${copy}"""`
			}
		],

		// The model to use for the completion.
		model: "gpt-4o",

		// The maximum number of tokens to generate in the completion.
		// A value of 800 allows for a substantial amount of text to be generated, which is suitable for rewriting tasks.
		max_tokens: 800,

		// Determines how creative the model's responses will be.
		// A temperature of 0.7 should balance generating rewrites that are creative, while still being relevant to the input text.
		temperature: 0.7,

		// Set the number of completions to generate for each prompt.
		// A value of 3 means the model will generate three different rewrites of the input text.
		n: 3,

		// Penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
		// A frequency penalty of 0.3 is a moderate penalty that discourages repetition without being too strict.
		frequency_penalty: 0.3,
	})

	if (!openAIResponse) {
		return NextResponse.json({
			message: "Error: No response from OpenAI",
		}, {
			status: 500,
		});
	}

	return NextResponse.json({
		message: JSON.stringify(openAIResponse),
	}, {
		status: 200,
	});
});
