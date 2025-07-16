import { stripIndents } from "common-tags";
import {copyContextGuidelinesMap, CopyContextGuidelinesKeys} from "./copyContexts/_copyContextGuidelinesMap";
import retrieveTextFile from "./_retrieveTextFile";

interface SystemPromptParameters {
	copyContext?: CopyContextGuidelinesKeys | 'other';
	minLength?: string;
	maxLength?: string;
}

const rewriteDir = "src/app/api/rewrite";
let basePrompt: string = "";
let voiceAndToneGuidelines: string = "";
let grammarAndMechanicsGuidelines: string = "";

export default async function getSystemPrompt({copyContext, minLength, maxLength}: SystemPromptParameters) {

  const calculatedMaxLength = (() => {
		if (!maxLength) {
			if (copyContext === "button") {
				return "25";
			}

			return undefined;
		}

		return maxLength;
	})()

	basePrompt = basePrompt ||
		await retrieveTextFile(`${rewriteDir}/_basePrompt`);
	voiceAndToneGuidelines = voiceAndToneGuidelines ||
		await retrieveTextFile(`${rewriteDir}/_voiceAndToneGuidelines`);
	grammarAndMechanicsGuidelines = grammarAndMechanicsGuidelines ||
		await retrieveTextFile(`${rewriteDir}/_grammarAndMechanicsGuidelines`);

	return {
		role: "developer",
		content: `
		  ${stripIndents`${basePrompt}`}
			${minLength ? `The copy you write must have a minimum length of ${minLength} characters.` : ""}
			${calculatedMaxLength ? `The copy you write must have a maximum length of ${calculatedMaxLength} characters.` : ""}
			${voiceAndToneGuidelines}
			${grammarAndMechanicsGuidelines}
			${copyContext && copyContext != 'other' ? copyContextGuidelinesMap[copyContext] : ""}
		`,
	} as const;
}
