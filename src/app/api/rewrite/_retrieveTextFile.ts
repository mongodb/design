import {promises as fs} from "fs";

/**
 * Retrieves the content of a text file from the specified path.
 * @param {string} path - The  path to the text file from the repository's root (without txt extension).
 * @returns {Promise<string>} - A promise that resolves to the content of the text file.
 * @throws {Error} - Throws an error if the file does not exist or cannot be read.
 */
export default async function retrieveTextFile(path: string) {
	const workingDir = process.cwd();
	const filePath = `${workingDir}/${path}.txt`;
	const fileContent = await fs.readFile(filePath, "utf-8");
	
	if (!fileContent) {
		throw new Error(`File not found: ${filePath}`);
	}

	return fileContent;
}
