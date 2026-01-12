import retrieveTextFile from "../_retrieveTextFile";

const copyContextDir = "src/app/api/rewrite/copyContexts";

/**
 * An array of copy contexts for which guidelines are provided.
 * 
 * **Note:** When adding a new context, ensure to create a corresponding file in the copyContexts directory named "_${context}.txt".
 */
const copyContexts = [
	"button",
	"inlineLink",
	"standaloneLink",
	"inputLabel",
	"inputDescription",
	"inputPlaceholder",
	"errorMessage",
	"successMessage",
	"notifications",
	"tooltipsAndHelp",
	"tabs",
	"titles",
	"subtitles",
] as const;

type CopyContextGuidelinesMap = Record<
	typeof copyContexts[number],
	string
>;

export const copyContextGuidelinesMap: CopyContextGuidelinesMap = (() => {
	const map: Partial<CopyContextGuidelinesMap> = {};

	copyContexts.forEach(async (contextName) => {
		map[contextName] =
			await retrieveTextFile(`${copyContextDir}/_${contextName}`);
	});

	return map as CopyContextGuidelinesMap;
})();

export type CopyContextGuidelinesKeys = keyof typeof copyContextGuidelinesMap;
